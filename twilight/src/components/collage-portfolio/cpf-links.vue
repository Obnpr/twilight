<template>
  <section>
    <div class="showcaseRow">
      <div class="contentContainer">
          <figure>
            <a href="https://github.com/Obnpr" target="_blank">
              <input type="image" src="/src/assets/collageProject/links/github.webp" alt="GitHub Logo" />
            </a>
          </figure>
          <p>GitHub</p>
      </div>
      <div class="contentContainer">
          <figure>
            <a href="/src/assets/collageProject/links/pdf/assistancepaper.pdf" target="_blank">
              <input type="image" src="/src/assets/collageProject/links/assistancepapers.webp" alt="Sheet of paper icon, with a clock" />
            </a>
          </figure>
          <p>Asssitance Paper</p>
      </div>
      <div class="contentContainer">
          <figure>
            <a href="/src/assets/collageProject/links/pdf/work1.pdf" target="_blank">
              <input type="image" src="/src/assets/collageProject/links/work1.webp" alt="Sheet of paper icon, with a #1" />
            </a>
          </figure>
          <p>HW - Infografía</p>
      </div>
      <div class="contentContainer">
          <figure>
            <a href="/src/assets/collageProject/links/pdf/work2.pdf" target="_blank">
              <input type="image" src="/src/assets/collageProject/links/work2.webp" alt="Sheet of paper icon, with a #2" />
            </a>
          </figure>
          <p>HW - Estudio de Caso</p>
      </div>
      <div class="contentContainer">
          <figure>
            <a href="/src/assets/collageProject/links/pdf/work3.pdf" target="_blank">
              <input type="image" src="/src/assets/collageProject/links/work3.webp" alt="Sheet of paper icon, with a #3" />
            </a>
          </figure>
          <p>HW - Investigación</p>
      </div>
      <div class="contentContainer">
          <figure>
            <a href="/src/assets/collageProject/links/pdf/work4.pdf" target="_blank">
              <input type="image" src="/src/assets/collageProject/links/work4.webp" alt="Sheet of paper icon, with a #4" />
            </a>
          </figure>
          <p>HW - Ensayo</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.showcaseRow {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5vh;
}

.contentContainer {
  height: 100%;
  width: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  min-height: 20vh;
}

figure {
  width: 10vh;
  height: 10vh;
  margin: 0%;
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
}

a {
  padding: 0%;
}

input {
  width: 100%;
  height: 100%%;
}

p {
  text-align: center;
  font-size: 2vh;
  margin: 0%;
  margin-top: 1.5vh;
  width: 100%;
  height: 5vh;
}

</style>
