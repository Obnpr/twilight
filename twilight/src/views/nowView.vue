<script setup lang="ts">

</script>

<template>
  <title>Obed Negrón | Now</title>
  <div class="structureRow">
      <div class="structureLeft">

      </div>
      <div class="structureMiddle">
        <h1>Made In Puerto Rico</h1>
      </div>
      <main class="structureRight">

      </main>
  </div>
</template>

<style scoped>
.structureRow {
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.structureLeft {
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
  border: 20px solid transparent;
  border-radius: 5px 0px 5px 0px;
  background:
    linear-gradient(#eff0d1, #eff0d1) padding-box,
    linear-gradient(to bottom, #7b5749, #3c2823) border-box;
}

.structureMiddle {
  width: 5%;
  height: 100%;
  background: linear-gradient(to bottom, #7b5749 10%, #3c2823 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.structureMiddle h1 {
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: #7b5749;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg); /* flips it to read top-to-bottom */
}

.structureRight {
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
  border: 20px solid transparent;
  border-radius: 0px 5px 0px 5px;
  background:
    linear-gradient(#eff0d1, #eff0d1) padding-box,
    linear-gradient(to bottom, #7b5749, #3c2823) border-box;
}


</style>
