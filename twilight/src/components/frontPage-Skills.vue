<template>
    <h2 id="skills">Skills</h2>
    <article className="pf-aboutme-main-content-skills">
    <div className="pf-aboutme-content-skills-table">
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
                src="../assets/logo/Debian.webp"
                alt="Debian Logo"
            />
            </figure>
            <p>Debian</p>
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
    <article className="pf-aboutme-main-content-skills">
    <h2>Additional skills</h2>
    <ul className="pf-aboutme-content-skills-table">
        <li>
            <figure>
            <img
                src="../assets/logo/CSharp.webp"
                alt="C# Logo"
            />
            </figure>
            <p>C#</p>
        </li>
        <li>
            <figure>
            <img
                src="../assets/logo/DotNet.webp"
                alt="Dot Net Logo"
            />
            </figure>
            <p>.NET</p>
        </li>
        <li>
            <figure>
            <img
                src="../assets/logo/Python.webp"
                alt="Python Logo"
            />
            </figure>
            <p>Python</p>
        </li>
        <li>
            <figure>
            <img
                src="../assets/logo/React.webp"
                alt="React Logo"
            />
            </figure>
            <p>React</p>
        </li>
        <li>
            <figure>
            <img
                src="../assets/logo/Javascript.webp"
                alt="Javascript Logo"
            />
            </figure>
            <p>Javascript</p>
        </li>
        <li>
            <figure>
            <img
                src="../assets/logo/Ubiquiti.webp"
                alt="Ubiquiti Logo"
            />
            </figure>
            <p>Ubiquiti Products</p>
        </li>
    </ul>
    </article>
</template>

<style scoped>
.pf-aboutme-content-skills-table {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}

.pf-aboutme-content-skills-table div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.pf-aboutme-main-content-skills {
    max-width: 100%;
}


.pf-aboutme-content-skills-table li {
  display: flex;
  flex-direction: row;
  align-items: left;
}

.pf-aboutme-content-skills-table p {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 0.8rem;
  height: 100%;
}

.pf-aboutme-content-skills-table figure {
  margin: 0%;
}

.pf-aboutme-content-skills-table img {
  object-fit: contain;
  max-height: 5vh;
}
</style>