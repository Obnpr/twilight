<template>
  <section className="item-alignment">
    <div>
      <li>
        <h1>Obed Negrón Bodón</h1>
        <h2>P00589029</h2>
        <h3>COMP4910 PRACTICUM & PROF ETHICS</h3>
        <h4>Prof. Raquel Lugo Vecchini</h4>
      </li>
    <hr></hr>
      <li>
        <div className="portfoliocollage-dateformat">
        <p>Creation Date: 30/8/2025</p>
        </div>
        <p>Last Modified: 26/4/2026</p>
        <em><p>date/month/year</p></em>
      </li>
    </div>

    <div>
      <figure>
          <img
            src="/src/assets/collageProject/start/prPostage.webp"
            alt="Puerto Rico postage stamp"
          />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.item-alignment {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 8vh;
  margin-bottom: 8vh;
}

div {
  width: 100%;
}

h1 {
  font-size: 3.5vh;
  margin: 0%;
}

h2, h3, h4, p {
  font-size: 2.5vh;
  margin: 0vh;
  margin-bottom: 20px;
}

hr {
  width: 100%;
}

em p {
  font-size: 2.1vh;
}

figure {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0%;
  padding-left: 20px;
}

img {
  height: 15vh;
}

@media (max-width: 800px) {
figure {
  padding-left: 0%;
  padding: 5vh;
}

hr {
  width: 90%;
}

.item-alignment {
  flex-direction: column;
}
}
</style>

