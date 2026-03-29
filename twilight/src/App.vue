<script setup lang="ts">
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import viewHeader from './views/HeaderView.vue'
  import viewFooter from './views/FooterView.vue'
  const disabledMenu = ref(false)
  /*const isMenuOpen = ref(false)*/
</script>

<template>
  <header>
    <div class="header-sort">
      <div class="header-logo"><viewHeader></viewHeader></div>
        <div v-if="disabledMenu" class="header-nav">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
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

.header-logo div {
  width: 50vh;
}

.header-nav {
  font-size: 2rem;
}

.header-nav a {
  background: #eff0d1;
  border-radius: 10px 10px 10px 10px;
  margin-right: 1.5rem;
  display: blow;
  padding: 0.4rem;
  border: 2px solid black;
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
    filter: brightness(0.7);
  }
}

@media (max-width: 500px) {
  header {
    height: 15vh;
    min-height: 15vh;
    max-height: 15vh;
    width: 100%;
    min-width: 100%;
  }
}
</style>
