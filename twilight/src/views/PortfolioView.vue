<script setup lang="ts">
  import compoPartTitle from '../components/portfolio-part-title.vue'
  import compoPartContent from '../components/portfolio-part-content.vue'
</script>

<template>
  <title>Obed Negrón | Portfolio</title>
    <main class="structured-board">
      <div class="board-segments">
        <compoPartTitle></compoPartTitle>
        <compoPartContent></compoPartContent>
      </div>
    </main>
</template>

<style scoped>
.structured-board {
  display: flex;
  align-items: center;
  justify-content: center;
}

.structured-board div {
  min-width: 130vh;
  max-width: 150vh;
  min-height: 100vh;
  background-color: #297350;
  border: 20px solid #652f0d;
  border-radius: 0px 0px 2px 2px;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
}

</style>
