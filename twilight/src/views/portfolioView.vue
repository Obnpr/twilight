<script setup lang="ts">
  import compoPartTitle from '../components/portfolio-Title.vue'
  import compoPartPersonalContent from '../components/portfolio-PersonalContent.vue'
  import compoPartProfessionalContent from '../components/portfolio-ProfessionalContent.vue'
</script>

<template>
  <title>Obed Negrón | Portfolio</title>
    <main class="structured-board">
      <div class="board-segments">
        <compoPartTitle></compoPartTitle>
        <compoPartPersonalContent></compoPartPersonalContent>
        <compoPartProfessionalContent></compoPartProfessionalContent>
      </div>
    </main>
</template>

<style scoped>
.structured-board {
  display: flex;
  align-items: center;
  justify-content: center;
}

.structured-board div {
  width: 80%;
  background-color: #297350;
  border: 20px solid #652f0d;
  border-radius: 0px 0px 2px 2px;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  box-sizing: border-box;
  list-style-type: none;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
}

@media (max-width: 880px) {
.structured-board div {
  border: 10px solid #652f0d;
  width: 90%;
  padding: 50px;
  padding-left: 10px;
  padding-right: 5px;
}
}

@media (max-width: 500px) {
.structured-board div {
  border: 10px solid #652f0d;
  width: 90%;
  padding: 50px;
  padding-left: 10px;
  padding-right: 5px;
}

}

</style>
