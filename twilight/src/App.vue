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
html,
body {
  cursor:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.5)"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="white"/></svg>')
      12 12,
    auto !important;
}

hr {
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>

<style scoped>
/* Mouse Related */

header {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
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

/*
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/
</style>
