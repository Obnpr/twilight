<script setup lang="ts">
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer>
    <div>
      <a>© {{currentYear}} — Obed Negrón Bodón —&nbsp;</a>
      <a href="https://youtu.be/H7-7TXXnw8I?si=2A1U_r2i4x776n97" target="_blank">Creado en Puerto Rico 🇵🇷 ❤</a>
      <a>&nbsp;— All Rights Reserved</a>
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
