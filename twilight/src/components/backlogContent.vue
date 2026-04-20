<script setup>
import { ref, onMounted } from "vue";
import compoGameList from '../components/gamelogMD/db.md'

</script>

<template>
  <div>
    <div class="loading-container">

    </div>

    <div class="content-md">
      <compoGameList></compoGameList>
    </div>

  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  width: 100%;
}

.loading-container figure {
  display: flex;
  justify-content: center;
  width: 100%;
}

.loading-container img {
  display: flex;
  height: 10vh;
}

.content-md {
  display: flex;
  justify-content: center;
  width: 100%;
}


.game-box{
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  width: 50vh;
  height: 20vh;
  margin: 2vh;
}

.game-contents {
  display: flex;
}

.game-contents img {
  height: 17vh;
  border: 3px;
}

.game-contents h2 {
  font-size: 2.8vh;
  line-height: 2vh;
}

.game-contents p {
  font-size: 1.8vh;
  line-height: 1vh;
}

</style>
