<script setup>
import compoGameList from '../components/backlog-gamelist.vue'
</script>

<template>
  <main class="structured-board">
  <title>Obed Negrón | Backlog</title>
    <div class="board-segments">
      <compoGameList></compoGameList>
    </div>
  </main>
</template>

<style scoped>
.structured-board {
  display: flex;
  align-items: center;
  justify-content: center;
}

.board-segments {
  width: 120vh;
  height: 200vh;
  background-image: url('../assets/portfolio/background.svg');
  border: 20px solid #652f0d;
  border-radius: 2px 2px 2px 2px;
  gap: 0px;
  color: black;
  padding: 30px;
}

button {
  max-height: 10vh;
  max-width: 30vh;
}

.test1 {
  display: flex;
  justify-content: center;
}

</style>
