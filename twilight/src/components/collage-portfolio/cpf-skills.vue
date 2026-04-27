<script setup lang="ts">
</script>

<template>
  <section id="skills" class="structured">
    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/videoeditor.webp"
          alt="Camera icon for Video Editing, Microphone for Audio Mixing, and an image for image editing."
        />
      </figure>
      <p>Video Editor</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/linuxdebian.webp"
          alt="Linux Debian Logo"
        />
      </figure>
      <p>Linux Debian</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/docker.webp"
          alt="Docker Logo"
        />
      </figure>
      <p>Docker</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/c++.webp"
          alt="C++ Logo"
        />
      </figure>
      <p>C++</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/vue.webp"
          alt="Vue Logo"
        />
      </figure>
      <p>Vue</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/godot.webp"
          alt="Godot Engine Logo"
        />
      </figure>
      <p>GDScript</p>
    </div>
  </section>

  <h2>Additional skills</h2>

  <section id="portfolio-objective" class="structured">
    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/csharp.webp"
          alt="C# Logo"
        />
      </figure>
      <p>C#</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/dotnet.webp"
          alt="dot NET Logo"
        />
      </figure>
      <p>NET</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/python.webp"
          alt="Python Logo"
        />
      </figure>
      <p>Python</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/typescript.webp"
          alt="Typescript Logo"
        />
      </figure>
      <p>Typescript</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/react.webp"
          alt="React Logo"
        />
      </figure>
      <p>React</p>
    </div>

    <div>
      <figure>
        <img
          src="/src/assets/collageProject/skills/cr-images/ubiquiti.webp"
          alt="Ubiquiti Logo"
        />
      </figure>
      <p>Ubiquiti Products</p>
    </div>
  </section>
</template>

<style scoped>
.structured {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

div figure {
  margin-bottom: 2vh;
  margin-top: 2vh;
}

figure {
  width: 100%;
  height: 7vh;
  margin: 0%;
  display: flex;
  justify-content: center;
}

img {
  width: 7vh;
  height: 7vh;
}

p {
  margin: 0%;
  text-align: center;
}

h2 {
  margin-top: 3vh;
  margin-bottom: 0%;
  text-align: center;
}
</style>
