<script setup lang="ts">
  import compoStart from '../components/frontPage-Start.vue'
  import compoLinks from '../components/frontPage-Links.vue'
  import compoSkills from '../components/frontPage-Skills.vue'
</script>

<template>
  <title>Obed Negrón | Home</title>
  <div class="structured-notepad">
    <div class="structured-notepad-top"><h1>Made In Puerto Rico</h1></div>
    <main class="structured-notepad-bottom">
      <div>
        <compoStart></compoStart>
        <hr>
        <compoLinks></compoLinks>
        <hr>
        <compoSkills></compoSkills>
      </div>
    </main>
  </div>
</template>

<style scoped>
.structured-notepad {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.structured-notepad-top {
  height: 8vh;
  width: 53%;
  background: linear-gradient(to bottom, #7b5749 10%, #3c2823 100%);
  border-radius: 16px 16px 0px 0px;
  color: #b17b66;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
}

.structured-notepad-top h1 {
  font-size: 1.5rem;
}

.structured-notepad-bottom {
  height: auto;
  width: 53%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff0d1;
  border-radius: 0px 0px 2px 2px;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
}

.structured-notepad-bottom div {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  list-style-type: none;
}

@media (max-width: 1420px) {
.structured-notepad-top {
  width: 80%;
}
.structured-notepad-bottom {
  width: 80%;
  height: auto;
  padding: 25px;
}
}

@media (max-width: 880px) {
.structured-notepad-top {
  width: 90%;
}
.structured-notepad-bottom {
  width: 90%;
  height: auto;
}
}

@media (max-width: 500px) {
.structured-notepad-top {
  width: 90%;
}

.structured-notepad-top h1 {
  font-size: 100%;
}

.structured-notepad-bottom {
  width: 90%;
}

}

</style>
