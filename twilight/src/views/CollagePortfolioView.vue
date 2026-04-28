<script setup lang="ts">
import compoStart from '../components/collage-portfolio/cpf-start.vue'
import compoObjective from '../components/collage-portfolio/cpf-objective.vue'
import compoBio from '../components/collage-portfolio/cpf-bio.vue'
import compoSkills from '../components/collage-portfolio/cpf-skills.vue'
import compoInternship from '../components/collage-portfolio/cpf-internship.vue'
import compoEthics from '../components/collage-portfolio/cpf-ethics.vue'
import compoProjects from '../components/collage-portfolio/cpf-projects.vue'
import compoConclusion from '../components/collage-portfolio/cpf-conclusion.vue'
import compoLinks from '../components/collage-portfolio/cpf-links.vue'
import compoReference from '../components/collage-portfolio/cpf-reference.vue'
</script>

<template>
  <title>Obed Negrón | Collage Portfolio</title>
  <div class="structured-notepad" >
    <div class="structured-notepad-top"><h1>Made In Puerto Rico</h1></div>
    <main>
      <div class="structured-notepad-bottom">
        <h1 id="start">Portfolio for class COMP 4910</h1>
        <compoStart></compoStart>
        <div className="portfoliocollage-flight-ticket">
          <img
            src="/src/assets/collageProject/start/prFlighttTicket.webp"
            alt="Puerto Rico flight itelirary"
        />
        </div>
        <hr>
        <h1 id="conclusion">Portfolio Objectives</h1>
        <compoObjective></compoObjective>
        <hr>
        <h1 id="biography">Biography (About Me)</h1>
        <compoBio></compoBio>
        <hr>
        <h1 id="skills">Skills</h1>
        <compoSkills></compoSkills>
        <hr>
        <h1 id="internship">Internship Projects</h1>
        <compoInternship></compoInternship>
        <hr>
        <h1 id="ethics">Ethics in the workspace</h1>
        <compoEthics></compoEthics>
        <hr>
        <h1 id="projects">Projects</h1>
        <compoProjects></compoProjects>
        <hr>
        <h1 id="conclusion">Conclusion</h1>
        <compoConclusion></compoConclusion>
        <hr>
        <h1 id="links">Links</h1>
        <compoLinks></compoLinks>
        <hr>
        <h1 id="references">References</h1>
        <compoReference></compoReference>
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
  min-width: 40vh;
  max-width: 150vh;
  background: linear-gradient(to bottom, #7b5749 10%, #3c2823 100%);
  border-radius: 16px 16px 0px 0px;
  color: #b17b66;
  font-family: 'Courier New', Courier, monospace;
}

.structured-notepad-top h1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
}

.structured-notepad-top h1 {
  font-size: 1.5rem;
}

.structured-notepad-bottom {
  width: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eff0d1;
  border-radius: 0px 0px 2px 2px;
  grid-template-columns: 1fr;
  gap: 0px;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  list-style-type: none;
}

hr {
  width: 90%;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

h1 {
  display: flex;
  justify-content: center;
  font-size: 4.0vh;
  margin-bottom: 3vh;
}


@media (max-width: 500px) {
.structured-notepad-top {
  min-width: 30vh;
  max-width: 40vh;
}

.structured-notepad-top h1 {
  font-size: 1rem;
}

.structured-notepad-bottom div {
  width: 40vh;
  min-width: 30vh;
  max-width: 40vh;
}

.structured-notepad-bottom {
  min-width: 30vh;
  max-width: 40vh;
}

}
</style>
