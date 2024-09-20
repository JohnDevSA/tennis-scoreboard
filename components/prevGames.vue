
<template>
  <div class="completed-games">
    <h2>Completed Games</h2>
    <ul>
      <li v-for="(game, index) in games" :key="index">
        {{ game.date }}: {{ game.player1Name }} vs {{ game.player2Name }} - {{ game.player1Score }}-{{ game.player2Score }}-{{ game.gameComplete ? 'Completed': 'In Progress' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    games: Array,
  },
};
</script>

<style scoped>
.completed-games {
  margin-top: 20px;
  width: 100%;
}
.completed-games ul {
  list-style-type: none;
  padding: 0;
}
.completed-games li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
