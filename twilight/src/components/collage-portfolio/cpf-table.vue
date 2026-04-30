<template>
  <section>
    <div class="ribbon">Table of Contents</div>
    <div class="tableView">
      <ul>
        <h2>Front page</h2>
        <li>
        <a href="#frontpage" >Front page</a>
        </li>
        <li>
        <a href="#objective" >Portfolio objective</a>
        </li>
        <li>
        <a href="#frontpage" >Links</a>
        </li>
        <h2>Biography</h2>
        <li>
        <a href="#frontpage" >Front page</a>
        </li>
        <li>
        <a href="#biography" >Biography</a>
        </li>
        <li>
        <a href="#skills" >Skills</a>
        </li>
        <h2>Internship</h2>
        <li>
        <a href="#internship" >Internship</a>
        </li>
        <h2>Reflection</h2>
        <li>
        <a href="#ethics" >Ethics</a>
        </li>
        <h2>Projects</h2>
        <li>
        <a href="#favprojects" >Favorite projects</a>
        </li>
        <li>
        <a href="#c++projects" >C++ projects</a>
        </li>
        <li>
        <a href="#webprojects" >Web projects</a>
        </li>
        <h2>Conclusion</h2>
        <li>
        <a href="#conclusion" >Conclusion</a>
        </li>
        <li>
          <a href="#references" >References</a>
        </li>
        </ul>
    </div>


  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 81vh;
}

ul {
  padding: 0%;
  list-style: none;
  height: inherit;
}

h2 {
  width: 24vh;
  display: inline-block flow-root;
  background: #7b5749;
  color: white;
  padding: 7px 0px 7px 15px;
  position: relative;
  clip-path: polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%);
}

li {
  padding: 0.5vh;
  font-size: 2vh;
  width: 18vh;
  text-decoration: underline;
}

.tableView {
  height: 100%;
}

.tableView ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 80%;
}

.ribbon {
  display: inline-block flow-root;
  background: #3c2823;
  color: white;
  padding: 20px 0px 20px 0px;
  position: relative;
  font-size: 4.0vh;
  text-align: center;
  clip-path: polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%);
}

@media (max-width: 880px) {
section {
  height: 100%;
}

li {
  padding: 0.5vh;
  font-size: 2.6vh;
  width: 25vh;
  text-decoration: underline;
}

h2 {
  width: 80%;
  font-size: 4vh;
  background: #7b5749;
}

.ribbon {
  padding: 20px 30px 20px 0px;
}
}

</style>

