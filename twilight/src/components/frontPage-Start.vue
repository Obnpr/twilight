<template>
    <main>
        <article> 
            <div>
                <h1>I'm Obed Negrón.</h1>
                <h2>Multimedia Producer, video-game developer, Front-End enthusiast.</h2>
                <p>Undergraduate student with a knowledge of on multimedia production, PC hardware, video game development, and a bit of front-end dev. Experienced in Linux systems like Debian and Arch.</p>
            </div>
            <div class="photo-container" >
                <figure>
                    <img 
                    src="../assets/pictures/profile-icon-1.jpg"
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
    height: 50vh;
}

article div {
    flex: 1;
    max-width: 50%;
    width: 50%;
    margin-left: 3vh;
}

img {
    height: 30vh;
    object-fit: scale-down;
    border-radius: 5px 5px 5px 5px;
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

@media (max-width: 500px) {
article {
    flex-direction: column;
    height: 90vh;
}

article div {
    width: 100%;
    max-width: 100%;
    min-width: 70%;
    margin-left: 0vh;
}

h2 {
  font-size: 2.7vh;
}

p {
  font-size: 1.9vh;
}
}
</style>