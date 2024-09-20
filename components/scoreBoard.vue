<template>
  <div class="scoreboard">
    <h2>Current Score</h2>
    <p>{{ game.scoreboard() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<style scoped>
.scoreboard {
  border: 1px solid #ddd;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
}
</style>
