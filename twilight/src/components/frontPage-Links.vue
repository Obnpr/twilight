<template>
    <h1>Links</h1>
    <div class="container-mother">
        <div class="container-child">
            <figure>
                <a href="/pdf/Resume-ObedNegron.pdf" target="_blank">
                <img type="image" src="../assets/logo/resume.webp" alt="Resume Icon" />
                </a>
            </figure>
            <figure>
                <a href="https://github.com/Obnpr" target="_blank">
                <img type="image" src="../assets/logo/github.webp" alt="GitHub Icon" />
                </a>
            </figure>
        </div>
        <div class="container-child">
            <h2>Resume</h2>
            <h2>Github</h2>
        </div>
    </div>
</template>

<style scoped>
.container-mother {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container-mother div {
    display: flex;
    flex-direction: row;
    width: 30vh;
}

.container-child figure, h2 {
    display: flex;
    flex: 1;
    min-width: 4vh;
    justify-content: center;
    align-items: center;
}

.container-child h2 {
    max-height: 0vh;
}

.container-child img {
    min-width: 100%;
    max-height: 10vh;
}

a:hover {
  transform: scale(1.06);
}

h1 {
    display: flex;
    justify-content: center;
    
}

</style>