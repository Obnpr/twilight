<script setup lang="ts">
import compoGameList from '/src/components/gamelog/gamelog.md';
import compoGameReview from '/src/components/gamelog/gamereview.md';
</script>

<template>
  <div>
    <div class="content-md">
      <div class="segments-container">
        <h1>Segments</h1>
        <div class="segments-button-alignment">
          <a href="#reviews" class="segments-button">Reviews</a>
          <a href="#gamelog" class="segments-button">Gamelog</a>
        </div>
      </div>
      <div>
        <h1 id="reviews">Reviews</h1>
        <compoGameReview/>
        <hr>
        <h1 id="gamelog">Gamelog</h1>
        <compoGameList></compoGameList>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-md {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.segments-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1vh;
  margin-bottom: 5vh;
}

.segments-button-alignment {
  display: flex;
  flex-direction: row;
  gap: 1.5vh;
}

.segments-button {
  width: 10vh;
  min-height: 5.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  font-size: 2.5vh;
  gap: 1.5vh;
  border-radius: 7px 7px 7px 7px;
  padding: 0.4rem;
}

.segments-button:hover {
  filter: brightness(0.9);
}

.markdown-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
}
.markdown-body :deep(th),
.markdown-body :deep(td) {
  border: 1.5px solid black;
  padding: 0.5rem 1rem;
  text-align: left;
}
.markdown-body :deep(th) {
  background-color: #eff0d1;
  font-weight: bold;
}
.markdown-body :deep(tr:nth-child(even)) {
  background-color: #eff0d1;
}

</style>
