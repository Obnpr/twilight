<script setup lang="ts">
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import viewHeader from './views/HeaderView.vue'
  import viewFooter from './views/FooterView.vue'
  const isMenuVisible = ref(true)
  const unfinishedhide = ref(true)

</script>

<template>
  <header>
    <div class="header-sort">
      <div class="header-logo"><viewHeader></viewHeader></div>
        <div v-if="isMenuVisible" class="header-nav">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/aboutme">About</RouterLink>
            <RouterLink to="/now">Now</RouterLink>
            <RouterLink to="/contactme" v-if="!unfinishedhide">Contact</RouterLink>
            <RouterLink to="/collageportfolio">Collage Portfolio</RouterLink>
            <RouterLink to="/portfolio" v-if="!unfinishedhide">Portfolio</RouterLink>
            <RouterLink to="/gamelog">Gamelog</RouterLink>
            <a v-if="!unfinishedhide">Theme</a>
          </nav>
        </div>
    </div>
  </header>
  <div class="content-container-mother">
    <RouterView />
  </div>
  <footer>
    <viewFooter></viewFooter>
  </footer>
</template>

<style scoped>
header {
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.634));
}

.header-sort {
  height: 100%;
  width: 100%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header-nav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1vh;
}

.header-nav nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  height: 5.5vh;
  gap: 1vh;
}

.header-nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: underline;
  border-radius: 7px 7px 7px 7px;
  padding: 0.4rem;
  font-size: 1.8rem;
}

footer {
  display: flex;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.634));
  text-align: center;
  height: 25vh;
  min-height: 20vh;
  max-height: 25vh;
  width: 100%;
  min-width: 80%;
  max-width: 100%;
  color: white;
}

.content-container-mother {
  display: flex;
  flex-direction: column;
}

.content-container-child {  /* not being used, ATM */
  /* #fcf79b more yellow */
  width: 100%;
  background-color: #eff0d1;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
}

@media (hover: hover) {
a:hover {
    filter: brightness(0.8);
}
}

@media (max-width: 1420px) {
header {
  height: 30vh;
}
}

@media (max-width: 880px) {
header {
  height: 35vh;
}
}

@media (max-width: 580px) {
header {
  height: 40vh;
}
}

@media (max-width: 500px) {
header {
  height: 30vh;
  width: 100%;
}

.header-sort {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header-logo {
  height: 10vh;
  width: 100%;
}

.header-nav {
  height: 100%;

}

.header-nav nav {
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 2rem;
  gap: 0px;
}

.header-nav a {
  display: flex;
  width: 11vh;
  height: auto;
  font-size: 1.2rem;
  text-align: center;
}

}
</style>
