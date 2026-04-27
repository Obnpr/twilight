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

    </div>
  </section>
</template>

<style scoped>
.showcaseRow {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.contentContainer {
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  min-height: 17vh;
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
  font-size: 3vh;
  margin: 0%;
  margin-top: 1.5vh;
  width: 10vh;
  height: 2vh;
}

</style>
