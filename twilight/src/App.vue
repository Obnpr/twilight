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
            <RouterLink to="/contactme">Contact</RouterLink>
            <RouterLink to="/collageportfolio">Collage Portfolio</RouterLink>
            <RouterLink to="/portfolio" v-if="!unfinishedhidea">Portfolio</RouterLink>
            <RouterLink to="/backlog">Gamelog</RouterLink>
            <a>Theme</a>
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

# AVOID USING STYLE w/o SCOPED, IF POSSIBLE
<style>
/* Mouse Related */
html, body {
  cursor:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.5)"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="white"/></svg>')
      12 12,
    auto !important;
}
</style>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5vh;
  height: 25vh;
  min-height: 20vh;
  max-height: 25vh;
  width: 100%;
  min-width: 80%;
  max-width: 100%;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.634));
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

.header-sort {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  flex-direction: column;
  min-width: 80%;
}

.header-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.header-nav nav {
  display: flex;
  justify-content: center;
  width: 95vh;
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

.content-container-mother {
  min-width: 100%;
  display: flex;
  flex-direction: column;
}

.content-container-child {
  /* #fcf79b more yellow */
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

@media (max-width: 500px) {
header {
  height: 30vh;
  min-height: 15vh;
  max-height: 30vh;
  width: 100%;
  min-width: 100%;
}

.header-nav {
  min-height: 8.7vh;
  font-size: 1.6rem;

}

.header-nav nav {

  width: 40vh;
  flex-wrap: wrap;
  font-size: 2rem;
}

.header-nav a {
  display: flex;
  align-items: center;
  max-width: 26vh;
  min-height: 5.5vh;
}

}
</style>
