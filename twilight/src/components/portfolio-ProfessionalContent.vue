<template>
    <main>
      <div class="board-content-title">
        <h1>Professional Projects</h1>
        <p>All content showned are altered re-creations of the original project, due to NDA contracts</p>
      </div>
      <div>
        <div class="board-content-row">
          <div class="board-content-row-media">
            <div>
              <figure>
                <img
                src="../assets/portfolio/example-image.webp"
                alt="A picture of Obed Negron"
                />
              </figure>
            </div>
          </div>
          <div class="board-content-row-text">
            <h1>Introduction to lense manufacturing</h1>
            <p>Information:</p>
            <p>Client: N/A</p>
            <p>Year: 2026</p>
            <p>Role: Producer, Video Editor, Subtitle Editor, Audio Editor</p>
            <p>Description: An interactive ~10 minute video explaining their lens creation.</p>
          </div>
        </div>
      </div>

    </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  flex: 1;
}

figure {
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0%;
}

p, h1, h2, h3 {
  color: #f5f0c0;
}

iframe {
  height: 100%;
  width: 90%;
}

.board-content-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.board-content-title h1 {
  font-size: 5vh;
}

.board-content-title p {
  margin-bottom: 5vh;
  font-style: italic;
}

.board-content-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.board-content-row div {
  display: flex;
  justify-content: center;
  height: 35vh;
}

.board-content-row-media div {
  width: 70vh;
}

.board-content-row-text {
  flex-direction: column;
  width: 150vh;
}

.board-content-row-text p {
  margin: 0%;
}

</style>
