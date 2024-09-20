<template>
  <div class="controls">
    <button @click="$emit('updateScore', 'player1')">Add Point to {{ game.getPlayer1Name() }}</button>
    <button @click="$emit('updateScore', 'player2')">Add Point to {{ game.getPlayer2Name() }}</button>
    <button @click="editGame">Edit Game</button>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
  methods: {
    editGame() {
      this.$emit('editGame');
    }
  }
};
</script>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
}
button {
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
