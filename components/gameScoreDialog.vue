<template>
  <div v-if="isVisible" class="modal">
    <h3  class="font-semibold">{{ editMode ? 'Update' : 'Add' }} Score for {{ player1Name }} vs {{ player2Name }}</h3>
    <label>Player 1 Name: <v-text-field v-model="localPlayer1Name"></v-text-field></label>
    <label>Player 2 Name: <v-text-field v-model="localPlayer2Name"></v-text-field></label>
    <v-row class="float-right">
      <button @click="closeModal" class="bg-red-400 px-2">Cancel</button>
      <button @click="saveScore" class="bg-green-600 px-2">Save</button>
    </v-row>

  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    editMode: Boolean,
    player1Name: String,
    player2Name: String,
    currentGame:  {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localPlayer1Name: this.player1Name,
      localPlayer2Name: this.player2Name,
    };
  },
  mounted() {
    console.log('props',this.props);
    console.log('Component mounted');
  },
  methods: {
    saveScore() {
      this.$emit('save', {
        player1Name: this.localPlayer1Name,
        player2Name: this.localPlayer2Name,
        player1Score: this.localPlayer1Score,
        player2Score: this.localPlayer2Score,
      });
    },
    closeModal() {
      this.$emit('close');
    }
  },
  watch: {
    player1Name(newVal) {
      this.localPlayer1Name = newVal;
    },
    player2Name(newVal) {
      this.localPlayer2Name = newVal;
    },
    player1Score(newVal) {
      this.localPlayer1Score = newVal;
    },
    player2Score(newVal) {
      this.localPlayer2Score = newVal;
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
label {
  display: block;
  margin: 10px 0;
}
button {
  margin: 10px;
}
</style>
