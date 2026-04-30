<script setup lang="ts">
    import { ref } from 'vue'
    import buttonSrcDefault from '../assets/page-elements/moreButton.webp'
    import buttonSrcOpen from '../assets/page-elements/lessButton.webp'
</script>

<template>
    <h1>Skill Overview</h1>
    <article>
        <div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/multimediaProducer.webp"
                      alt="Film icon for Video Editing."
                  />
              </figure>
              <p>Video Editor</p>
          </div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/linuxtux.webp"
                      alt="Linux Tux"
                  />
              </figure>
              <p>Linux</p>
          </div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/personal/programing.webp"
                      alt="Average Linux terminal default ' >_ '"
                  />
              </figure>
              <p>Programer</p>
          </div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/processor.webp"
                      alt="Icon of a Processor"
                  />
              </figure>
              <p>PC <br>Hardware</p>
          </div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/Docker.webp"
                      alt="Docker Container Logo"
                  />
              </figure>
              <p>Docker</p>
          </div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/personal/network.webp"
                      alt="Docker Container Logo"
                  />
              </figure>
              <p>Network</p>
          </div>
        </div>
    </article>
    <article  class="containerFormating">
        <div>
          <div>
              <figure>
                  <img
                      src="../assets/logo/debianlinux.webp"
                      alt="Debian Linux Logo"
                  />
              </figure>
              <p>Debian</p>
          </div>
            <div>
                <figure>
                <img
                    src="../assets/logo/C++.webp"
                    alt="C++ Logo"
                />
                </figure>
                <p>C++</p>
            </div>
            <div>
                <figure>
                <img
                    src="../assets/logo/vue.webp"
                    alt="Vue Logo"
                />
                </figure>
                <p>VueJS</p>
            </div>
            <div>
                <figure>
                <img
                    src="../assets/logo/dockercompose.webp"
                    alt="Docker Compose Logo"
                />
                </figure>
                <p>Docker <br>Compose</p>
            </div>
            <div>
                <figure>
                <img
                    src="../assets/logo/typescript.webp"
                    alt="Typescript Logo"
                />
                </figure>
                <p>TypeScript</p>
            </div>
            <div>
                <figure>
                <img
                    src="../assets/logo/Godot.webp"
                    alt="Godot Engine Logo"
                />
                </figure>
                <p>GDScript</p>
            </div>
        </div>
    </article>
        <h2 >Additional skills</h2>
        <article class="containerFormating"  >
            <div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/Python.webp"
                        alt="Python Logo"
                    />
                    </figure>
                    <p>Python</p>
                </div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/archlinux.webp"
                        alt="Arch Linux Logo"
                    />
                    </figure>
                    <p>Arch</p>
                </div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/Ubiquiti.webp"
                        alt="Ubiquiti Logo"
                    />
                    </figure>
                    <p>Ubiquiti</p>
                </div>
                <div>
                    <figure>
                        <img
                            src="../assets/logo/CSharp.webp"
                            alt="C# Logo"
                        />
                    </figure>
                    <p>C#</p>
                </div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/DotNet.webp"
                        alt="Dot Net Logo"
                    />
                    </figure>
                    <p>.NET</p>
                </div>
            </div>
        </article>
    <h2>Software toolkit</h2>
        <article class="containerFormating" >
            <div>
                <div>
                    <figure>
                        <img
                            src="../assets/logo/davinciresolve.webp"
                            alt="Davinci Resolve logo"
                        />
                    </figure>
                    <p>Davinci<br>Resolve</p>
                </div>
                <div>
                    <figure>
                        <img
                            src="../assets/logo/audacity.webp"
                            alt="Audacity Logo"
                        />
                    </figure>
                    <p>Audacity</p>
                </div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/krita.webp"
                        alt="Krita Logo"
                    />
                    </figure>
                    <p>Krita</p>
                </div>
            </div>
        </article>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1vh;
  padding: 1.5vh;
}

article {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
}

img {
  object-fit: contain;
  height: 8vh;
}

h1 {
    display: flex;
    justify-content: center;
}

h2 {
    display: flex;
    justify-content: center;
}

p {
  font-size: 2.6vh;
  margin-left: 1.5vh;
  margin: 0%;
  width: 10vh;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

figure {
  margin: 0%;
  width: 10vh;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-formating {
  width: 50vh;
}

@media (max-width: 500px) {
div {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 1vh;
    height: 100%;
    width: 100%;
}

article {
    width: 100%;
    margin-bottom: 0vh;
}

img {
  height: 100%;
  width: 100%;
}

h1 {
    display: flex;
    justify-content: center;
}

h2 {
    display: flex;
    justify-content: center;
}

p {
  display: flex;
  text-align: end;
  font-size: 2.3vh;
  margin: 0%;
  width: 40%;
}

figure {
  margin-right: 2vh;
}

.containerFormating {
  width: 100%;
}

}
</style>
