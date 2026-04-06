<script setup>
import { ref, computed } from 'vue'
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.js";

const currentYear = computed(() => new Date().getFullYear())
const user = ref(null);

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

async function login() {
  const result = await signInWithPopup(auth, googleProvider);
  const loggedInUser = result.user;

  if (loggedInUser.email !== "obednegronpr@gmail.com") {
    await signOut(auth);
    alert("Log-In only works for me, Obed!");
    return;
  }
  console.log("Welcome!");
}

async function logout() {
  await signOut(auth);
}
</script>

<template>
  <footer>
    <div>
      <a>© {{currentYear}} — Obed Negrón Bodón —&nbsp;</a>
      <a href="https://youtu.be/H7-7TXXnw8I?si=2A1U_r2i4x776n97" target="_blank">Creado en Puerto Rico 🇵🇷 ❤</a>
      <a>&nbsp;— All Rights Reserved —&nbsp;</a>
      <a v-if="!user" @click="login">Admin Log-In</a>
      <a v-if="user">Welcome {{ user.displayName }}!&nbsp;—&nbsp;</a>
      <a v-if="user" @click="logout">Sign out</a>
    </div>
  </footer>
</template>


<style scoped>
  div {
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    width: 100%;
  }

  div a {
    color: inherit;
    text-decoration: none;
    font-size: 1.8vh;
  }

@media (max-width: 500px) {
div {
  flex-direction: column;
  width: 100%;
}

div a {
  color: inherit;
  text-decoration: none;
  font-size: 1.8vh;
}
}
</style>
