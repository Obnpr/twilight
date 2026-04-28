<script setup>
import compoGameList from '../components/backlogContent.vue'
</script>

<template>
  <main>
  <title>Obed Negrón | Backlog</title>
  <div class="notebook-loops">
      <img
      src="../assets/backlog/topLoops.png"
      alt="A flip notebook's metal loops."
      />
  </div>
    <div class="notebook-content">
      <compoGameList></compoGameList>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0%;
}

.notebook-loops {
  width: 50%;
  height: 10vh;
}

.notebook-loops img {
  width: 100%;
  height: 100%;
}

.notebook-content {
  width: 50%;
  background-color: #fef4ea;
  background-size: cover;
  background-position: center;
  border-radius: 2px 2px 2px 2px;
  gap: 0px;
  color: black;
  padding: 30px;
}

</style>
