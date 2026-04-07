<script setup>
import compoGameList from '../components/backlog-gamelist.vue'
import compoBacklogLogin from '../components/backlog-Login.vue'
</script>

<template>
  <main>
  <title>Obed Negrón | Backlog</title>
    <div class="board-segment">
      <compoGameList></compoGameList>
    </div>
    <div class="board-segment-shalk">
    <compoBacklogLogin></compoBacklogLogin>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.structured-board {
  display: flex;
  align-items: center;
  justify-content: center;
}

.board-segment {
  width: 120vh;
  min-height: 80vh;
  background-image: url('../assets/portfolio/background.svg');
  background-size: cover;
  background-position: center;
  border-radius: 2px 2px 2px 2px;
  gap: 0px;
  color: black;
  padding: 30px;
}

.board-segment-shalk {
  width: 120vh;
  min-height: 10vh;
  background-image: url('../assets/portfolio/background.svg');
  background-size: cover;
  background-position: center;
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
