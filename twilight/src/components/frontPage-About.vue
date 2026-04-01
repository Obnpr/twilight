<template>
  <article>
      <h1>About Me</h1>
      <div class="about-row">
        <div>
            <p>I am an Computer Science graduate, throughout my collage time my passion for technology has only deepened. Currently living in my hometown of Juana Diaz, Puerto Rico, I got my weak and old 2011 HP work desktop, it wasn’t powerful, but it slowly introduced me into a whole world later in my years.</p>
            <p>Over the years, I’ve explored different areas of computer science, and creating not-so-useful applications for my own amusement. Recently, with interest in game development and web design. But always open to learn new programs and languages.</p>
        </div>
        <div class="about-photo-container">
            <figure>
                <img 
                src="../assets/pictures/profile-icon-2.png"
                alt="A picture of Obed Negron"
                />
            </figure>
        </div>
    </div>
  </article>
</template>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div {
    flex: 1;
    width: 100%;
    margin-left: 2vh;
}

img {
    height: 30vh;
    object-fit: scale-down;
    border-radius: 5px 5px 5px 5px;
}

h1 {
  width: 100%;
  display: flex;
  justify-content: center;
}

.about-row { 
  display: flex;
  flex-direction: row;
}

.about-photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-photo-container figure {
    width: auto;
    height: auto;
}

@media (max-width: 500px) {
article {
    flex-direction: column;
    height: 100vh;
}

article div {
    width: 100%;
    max-width: 100%;
    min-width: 70%;
    margin-left: 0vh;
}

.about-row { 
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 2.7vh;
}

p {
  font-size: 1.9vh;
}
}
</style>
