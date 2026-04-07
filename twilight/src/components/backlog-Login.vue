<script setup lang="ts">
import { user, login, logout } from "~/firebase-auth.ts";
</script>

<template>
  <main>
    <hr>
    <div class="login-notlogged">
      <a class="login-notlogged-button" v-if="!user" @click="login">Admin Log-In</a>
    </div>
    <div v-if="user" >
      <h2>Welcome {{ user.displayName }}!</h2>
      <a class="login-logged-button" @click="logout">Sign out</a>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

main div {
  min-width: 100%;
}

hr {
  border-top: 0.5vh dashed white;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

h2 {

}

.login-notlogged {
  display: flex;
  justify-content: center;
  gap: 3vh;
  width: 100%;
}

.login-notlogged-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 15vh;
  background: #eff0d1;
  border-radius: 4px 4px 4px 4px;
  font-size: 2vh;

}

.login-notlogged-button a:hover {
  filter: brightness(0.8);
}

.login-logged-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 25vh;
  background: #eff0d1;
  border-radius: 4px 4px 4px 4px;
  font-size: 2vh;

}

.login-logged-button:hover {
  filter: brightness(0.8);
}

</style>
