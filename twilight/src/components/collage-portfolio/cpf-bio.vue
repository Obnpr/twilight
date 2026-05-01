<template>
  <section id="biography" class="structured">
    <div>
      <h3><strong>Obed Negrón Bodón - 24y/o - He/Him</strong></h3>
      <p><i>"I’ve been an undergraduate Computer Science student for 6 (six) years now, and throughout that time my passion for technology has only deepened. Currently residing and working in Juana Diaz, Puerto Rico. My first was an old HP Mini 210 HD Netbook back in 2011, it wasn’t powerful at all, but it slowly introduced me into a whole world of computers and software later in my years. Over the years, I’ve explored different areas of creation and computer science, from simple editing videos or simple text to speech programs, to full production videos for Youtube, or website development... I also created not-so-useful applications for my niche use. With recently, taking the mantle of game development, which led me to experimenting with GDScript. These experiences have shaped not just my academic formation, but also blending my  creativity with technical skills; All that motivates me to keep on pushing throughout the future years."</i></p>
    </div>
    <div class="photos">
      <figure>
        <img
          src="/src/assets/pictures/photo2.jpeg"
          alt="A picture of me, Obed Negron"
        />
      </figure>
      <figure>
        <img
          src="/src/assets/pictures/photo1.jpg"
          alt="A picture of me, Obed Negron"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
strong {
  font-weight: bold;
}

p {
  font-size: 1.7vh;
}

figure {
  width: 100%;
  height: 30vh;
  margin: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 25vh;
  border-radius: 5px 5px 5px 5px;
}

.structured {
  display: flex;
  flex-direction: row;
  padding: 5vh;
}

.structured div {
  width: 100%;
}

@media (max-width: 800px) {
.structured {
  flex-direction: column;
  padding: 0.5vh;
}

.photos {
  width: 100%;
}

}

</style>
