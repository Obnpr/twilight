<script setup lang="ts">
import { user, login, logout } from "~/firebase-auth.ts";
</script>

<template>
  <main class="bothSideContainer">
    <div v-if="user" class="leftSideContentContainer">
      <div class="leftSideContentContainerContentBG">
        <div>
          <h2>Admin Panel</h2>
        </div>
        <div>
          <a class="logged-add-game-button" @click="logout">Add New Game</a>
        </div>
        <div>
          <a class="logged-add-game-button" @click="logout">Modify Existing Game</a>
        </div>
        <div>
          <a class="logged-add-game-button" @click="logout">Add New Game</a>
        </div>
      </div>
    </div>

  <div v-if="user" class="rightSideContentContainer">
    <div class="rightSideContentContainer">
        <div class="rightSideContentContainerContentBG">
          <h2>New Game Entry</h2>

          <div class="lineRow">
            <div class="rightSideTextAlign">
              <p>Name: </p>
            </div>
            <div class="rightSideElementsAlign">
              <input v-model="username" placeholder="Enter the game's name">
            </div>
          </div>

          <div class="lineRow">
            <div class="rightSideTextAlign">
              <p>Platform: </p>
            </div>
            <div class="rightSideElementsAlign">
              <select v-model="selectedJob">
                <option value="">Select a status</option>
                <option>Desktop PC</option>
                <option>Steamdeck PC</option>
                <option>Switch 2</option>
                <option>Switch</option>
                <option>PS5</option>
                <option>Switch (Emulation)</option>
                <option>Wii U (Emulation)</option>
                <option>Wii (Emulation)</option>
                <option>Gamecube (Emulation)</option>
                <option>GBA/GB (Emulation)</option>
                <option>NES (Emulation)</option>
                <option>SNES (Emulation)</option>
                <option>N64 (Emulation)</option>
              </select>
            </div>
          </div>

          <div class="lineRow">
            <div class="rightSideTextAlign">
              <p>Status: </p>
            </div>
            <div class="rightSideElementsAlign">
              <select v-model="selectedJob">
                <option disabled value="">Select a status</option>
                <option>Finished</option>
                <option>Ongoing</option>
                <option>Dropped, Don't Like</option>
                <option>Dropped, Will Resume</option>
                <option>Wanna Replay It</option>
                <option>Can't Play / Unreleased</option>
              </select>
            </div>
          </div>

          <div class="lineRow">
            <div class="rightSideTextAlign">
              <p>Rating: </p>
            </div>
            <div class="rightSideElementsAlign">
              <input v-model="username" placeholder="Game's rating (if finished)">
            </div>
          </div>

          <div class="lineRow">
            <div class="rightSideTextAlign">
              <p>Final Thoughts: </p>
            </div>
          </div>

          <div class="lineRowFinalThoughts">
            <div class="rightSideElementsAlignFinalThoughts">
              <textarea id="myTextarea" rows="5" placeholder="Enter text here..."></textarea>
            </div>
          </div>

          <div class="lineRowFinalThoughts">
            <div class="rightSideElementsAlignFinalThoughts">
              <button onclick="saveText()" class="logged-add-game-button">Save Game</button>
            </div>
          </div>

        </div>
    </div>

    <div v-if="user" class="rightSideContentContainer">
      <div class="rightSideContentContainerContentBGExistGame">
        <h2>What Game ID to modify?</h2>

        <div class="contentPositioningExistGame">
          <div class="rightSideElementsAlignExistGame">
            <input placeholder="Enter the game's ID">
          </div>
          <div class="rightSideElementsAlignButtonExistGame">
            <button onclick="saveText()" class="logged-add-game-button">Load Data</button>
          </div>
        </div>

      </div>
    </div>
  </div>

  </main>
</template>

<style scoped>
.bothSideContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 100%;
  margin-top: 5vh;
}

/* Left Side Container */
.leftSideContentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30vh;
  gap: 3vh;
}

.leftSideContentContainer a:hover {
  filter: brightness(0.8);
}

.leftSideContentContainerContentBG {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #dbdcc0;
  width: 100%;
  height: 50vh;
  border-radius: 4px 4px 4px 4px;
 }

.leftSideContentContainerContentBG div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
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

/* Right Side Container - New Game, locate existing game, and delete game form */
/* New Game Form */
.rightSideContentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50vh;
}

.rightSideContentContainerContentBG {
  background-color: #dbdcc0;
  width: 40vh;
  height: 60vh;
  border-radius: 4px 4px 4px 4px;
 }

.rightSideContentContainerContentBG div,h2 {
  display: flex;
  justify-content: center;
  align-items: center;
 }

.lineRow {
  display: flex;
  flex-direction: row;
  height: 5vh;
  min-width: 100%;
}

.lineRow p {
  text-align: start;
}

.rightSideTextAlign {
  height: 5vh;
}

.rightSideTextAlign p {
  min-width: 8vh;
}


.rightSideElementsAlign {
  justify-content: start;
  height: 5vh;
  min-width: 50%;
}

.rightSideElementsAlign input,select {
  min-width: 100%;
}

.lineRowFinalThoughts {
  display: flex;
  flex-direction: row;
  height: 10vh;
  min-width: 10vh;
}

.rightSideElementsAlignFinalThoughts {
  min-width: 100%;
}

.rightSideElementsAlignFinalThoughts textarea {
  justify-content: start;
  height: 8vh;
  min-width: 70%;
}

/* Modify Existing Game Form */
.rightSideContentContainerContentBGExistGame {
  background-color: #dbdcc0;
  width: 40vh;
  height: 28vh;
  border-radius: 4px 4px 4px 4px;
 }

.rightSideContentContainerContentBGExistGame div,h2 {
  display: flex;
  justify-content: center;
  align-items: center;
 }

.contentPositioningExistGame {
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  max-height: 15vh;
  min-width: 100%;
  gap: 4vh;
}

.contentPositioningExistGame div {
  min-width: 100%;
}

.contentPositioningExistGame input {
  max-width: 50%;
  min-height: 4vh;
}

.rightSideElementsAlignFinalThoughtsExistGame {
  min-width: 100%;
}

.rightSideElementsAlignFinalThoughtsExistGame textarea {
  justify-content: start;
  height: 8vh;
  min-width: 70%;
}


</style>
