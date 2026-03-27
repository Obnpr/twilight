<script setup lang="ts">
  import compoStart from '../components/frontPage-Start.vue'
  import compoLinks from '../components/frontPage-Links.vue'
  import compoSkills from '../components/frontPage-Skills.vue'

</script>

<template>
  <title>Obed Negrón | Portfolio</title>
  <div class="structured-notepad" >
    <div class="structured-notepad-top"><h1>Made In Puerto Rico</h1></div>
    <main class="structured-notepad-bottom" >
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
  height: 10vh;
  width: 100vh;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.structured-notepad-bottom div {
  width: 100vh;
  background-color: #eff0d1;
  border-radius: 0px 0px 2px 2px;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
}

</style>
