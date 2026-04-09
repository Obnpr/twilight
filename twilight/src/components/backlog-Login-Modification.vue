<script setup lang="ts">
import { user, login, logout } from "~/firebase-auth.ts";
</script>

<template>
  <main class="bothSideContainer">
    <div v-if="user" class="leftSelectionButtons">
      <a class="logged-add-game-button" @click="logout">Add New Game</a>
      <a class="logged-add-game-button" @click="logout">Modify Existing Game</a>
      <a class="logged-add-game-button" @click="logout">Add New Game</a>
    </div>

    <div v-if="user" class="rightSideContentContainer">
      <h2>New Game Entry</h2>

      <div class="lineRow">
        <p>Name: </p>
        <input v-model="username" placeholder="Enter the game's name">
      </div>
      <div class="lineRow">
        <p>Status: </p>
        <select v-model="selectedJob">
          <option disabled value="">Select a status</option>
          <option>Played</option>
          <option>Ongoing</option>
          <option>Dropped, Don't Like</option>
          <option>Dropped, Will Resume</option>
          <option>Wanna Replay It</option>
          <option>Can't Play / Unreleased</option>
        </select>
      </div>

    </div>
  </main>
</template>

<style scoped>
.bothSideContainer {
  display: flex;
  flex-direction: row;
  min-width: 100%;
}

.leftSelectionButtons {
  display: flex;
  flex-direction: column;
  min-width: 30%;
  gap: 3vh;
}

.leftSelectionButtons a:hover {
  filter: brightness(0.8);
}

.logged-add-game-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 20vh;
  background: #eff0d1;
  border-radius: 4px 4px 4px 4px;
  font-size: 2vh;
}

.rightSideContentContainer {
  display: flex;
  flex-direction: column;
  min-width: 70%;
}

.lineRow {
  display: flex;
  flex-direction: row;
  height: 5vh;
  min-width: 100%;
}

</style>
