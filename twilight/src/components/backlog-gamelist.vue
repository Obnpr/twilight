<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { backlogDB } from "/firebase-auth.ts";

const games = ref([]);
const loading = ref(true);

onMounted(async () => {
  const snapshot = await getDocs(collection(backlogDB, "backlog-data"));
  games.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  loading.value = false;
});
</script>

<template>
  <div>
    {/*v-if="loading"*/}
    <div class="loading-container">
      <figure>
        <img src="../assets/page-elements/loading-icon.gif">
      </figure>
    </div>

    <div class="backlog-showcase">
      <div class="game-box" v-for="game in games" :key="game.id">
        <div class="game-contents">
          <figure>
            <img :src="game.image" alt=""/>
          </figure>
          <div>
            <h2>{{ game.name }}</h2>
            <p>Platform: {{ game.platform }}</p>
            <p>Status: {{ game.status }}</p>
            <p v-if="game.finalRating">Rating: {{ game.finalRating }}</p>
            <p v-if="game.finalThoughts">Final Thoughts:{{ game.
  finalThoughts }}</p>
          </div>
        </div>
      </div>

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

.backlog-showcase {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.game-box{
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
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
