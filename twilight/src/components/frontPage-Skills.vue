<script setup lang="ts">
    import { ref } from 'vue'
    import buttonSrcDefault from '../assets/page-elements/moreButton.webp'
    import buttonSrcOpen from '../assets/page-elements/lessButton.webp'

    const isMoreSkillsOpen = ref(false)
    const moreButtonSrc = ref(buttonSrcDefault)
    const moreButtonText = ref('View More')

    function toggleMenu() {
    isMoreSkillsOpen.value = !isMoreSkillsOpen.value
    moreButtonSrc.value = isMoreSkillsOpen.value ? buttonSrcOpen : buttonSrcDefault
    moreButtonText.value = isMoreSkillsOpen.value ? 'View Less' : 'View More'
    }
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
                <p>Multimedia Producer</p>
            </div>
            <div>
                <figure>
                    <img
                        src="../assets/logo/C++.webp"
                        alt="C++ Logo"
                    />
                </figure>
                <p>Programmer</p>
            </div>
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
                        src="../assets/logo/processor.webp"
                        alt="Icon of a Processor"
                    />
                </figure>
                <p>PC Hardware</p>
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
        </div>
    </article>
    <div>
        <a class="more-button" @click="toggleMenu">
            <img class="more-button" type="image" :src="moreButtonSrc" alt="Expand button for more Skills" />
            <p class="more-button">{{ moreButtonText }}</p>
        </a>
    </div>
    <Transition name="slide">
    <h2 v-if="isMoreSkillsOpen">Skills</h2>
    </Transition>
    <Transition name="slide">
    <article v-if="isMoreSkillsOpen">
        <div>
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
                    src="../assets/logo/Godot.webp"
                    alt="Godot Engine Logo"
                />
                </figure>
                <p>GDScript</p>
            </div>
            <div>
                <figure>
                <img
                    src="../assets/logo/vue.webp"
                    alt="Vue Logo"
                />
                </figure>
                <p>Vue</p>
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
                    src="../assets/logo/dockercompose.webp"
                    alt="Docker Compose Logo"
                />
                </figure>
                <p>Docker Compose</p>
            </div>
        </div>
    </article>
    </Transition>
    <Transition name="slide">
        <h2 v-if="isMoreSkillsOpen">Additional skills</h2>    
    </Transition>
    <Transition name="slide">
        <article v-if="isMoreSkillsOpen">
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
                    <p>Ubiquiti Products</p>
                </div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/HTML5.webp"
                        alt="HTML5 Logo"
                    />
                    </figure>
                    <p>HTML</p>
                </div>
                <div>
                    <figure>
                    <img
                        src="../assets/logo/CSS3.webp"
                        alt="CSS3 Logo"
                    />
                    </figure>
                    <p>CSS</p>
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
    </Transition>
    <Transition name="slide">
    <h2 v-if="isMoreSkillsOpen">Personal toolkit</h2>
    </Transition>
    <Transition name="slide">
        <article v-if="isMoreSkillsOpen">
            <div>
                <div>
                    <figure>
                        <img
                            src="../assets/logo/shotcut.webp"
                            alt="Shotcut Logo"
                        />
                    </figure>
                    <p>Shotcut</p>
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
    </Transition>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2vh;
  margin-left: 3vh;
  margin-right: 3vh;
  margin-top: 1.5vh;
}

article {
    max-width: 100%;
    margin-bottom: 3vh;
}

img {
  object-fit: contain;
  max-height: 8vh;
}

h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 5vh;
}

h2 {
    display: flex;
    justify-content: center;
}

p {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-left: 0.8rem;
  height: 100%;
}

figure {
  margin: 0%;
}

.more-button {
    margin-top: 3vh;
    margin-bottom: 1.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
}

.more-button img {
    height: 7vh;
}

.more-button p {
    margin-top: 0.8rem;
    margin-left: 0rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

</style>