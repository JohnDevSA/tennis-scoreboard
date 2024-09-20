<template>
  <v-app class="mx-auto mt-5 ml-5 pt-5 pl-5  app-container bg-lime-400">
    <header>
      <h1 class="text-lg font-semibold">Tennis Scoring System</h1>
    </header>

    <v-main no-gutters justify="center" class="mx-auto mt-5 pt-5">
      <slot />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
</script>
<style>
.app-container {
  max-width: 100%;
  margin: auto;
  padding: 20px;
}
header {
  text-align: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>