<template>
    <main>
        <article> 
            <div>
                <h1>I'm Obed Negrón</h1>
                <h2>Multimedia Producer. video-game developer. Front-End enthusiast.</h2>
                <p>Undergraduate student with a knowledge of  on multimedia production, software, with a bit of front-end dev. Experienced in computer's OS like Linux (Debian), hardware, video game development.</p>
            </div>
            <div class="photo-container" >
                <figure>
                <img 
                src="/picture/profile-icon-1.jpg"
                alt="A picture of Obed Negron"
                />
                </figure>
            </div>
        </article>
    </main>
</template>

<style scoped>
article {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40vh;
}

article div {
    flex: 1;
    max-width: 50%;
    width: 50%;
}

img {
    height: 22vh;
    object-fit: scale-down;
}

.photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo-container figure {
    width: auto;
    height: auto;
}



.front-signature img {
  object-fit: scale-down;
  height: auto;
  width: 99%;
}

.front-signature div {
  flex: 1;
}

.front-signature h2 {
  display: flex;
  align-items: start;
}

.front-signature-imgdiv {
  display: flex;
  height: 70%;
}

</style>