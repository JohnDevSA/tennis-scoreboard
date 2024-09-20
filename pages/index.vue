<template>
     <v-container>
          <v-row>
                <img width="100" height="100" src="/assets/images/crossed-tennis-rackets.jpg" alt="Crossed Tennis" />
          </v-row>
     </v-container>
      <score-board :game="currentGame" />
      <controls :game="currentGame" @updateScore="updateScore" @editGame="openEditDialog()" />
     <prev-games :games="completedGames"></prev-games>
      <game-score-dialog
          v-if="isModalVisible"
          :isVisible="isDialogVisible"
          :editMode="editMode"
          :player1Name="currentGame.player1Name"
          :player2Name="currentGame.player2Name"
          @save="saveGame"
          @close="closeModal"
      />
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        isEditMode: false,
        isModalVisible: false,
        isDialogVisible:false,
        player1Name: '',
        player2Name: '',
        player1Score: 0,
        player2Score: 0,
        currentGame: new TennisGame(),
        completedGames: [],
        editMode: false,
      };
    },
    methods: {
      updateScore(player) {
        if (player === 'player1') {
          this.currentGame.player1Point();
        } else if (player === 'player2') {
          this.currentGame.player2Point();
        }

        // Check if game is complete and store it
        if (this.currentGame.isComplete()) {
          this.storeCompletedGame();
        }
      },
      storeCompletedGame() {
        this.completedGames.push({
          player1Name: this.currentGame.getPlayer1Name(),
          player2Name: this.currentGame.getPlayer2Name(),
          player1Score: this.currentGame.player1Score,
          player2Score: this.currentGame.player2Score,
          gameComplete: true,
          date: new Date().toLocaleString(),
        });
        localStorage.setItem('completedGames', JSON.stringify(this.completedGames));
        this.currentGame = new TennisGame('Player 1', 'Player 2');
      },
      openEditDialog() {
        this.isModalVisible = true;
        this.isDialogVisible = true;
        this.editMode = true;
      },
      saveGame(updatedGame) {
        this.currentGame.setPlayersNames(updatedGame.player1Name, updatedGame.player2Name);
        this.isDialogVisible = false;
      },
      closeModal () {
        console.log('close modal ---');
        this.isModalVisible = false;

      },
    }
  }
</script>
<style scoped>

</style>/