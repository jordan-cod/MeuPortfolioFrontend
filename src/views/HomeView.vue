<template>
    <div class="container" v-if="this.$store.state.language">
    <section class="about">
      <div class="ME">
        <div>
          <h1>Hello, my name is Gabriel Jordan.</h1>
          <h2>A fullStack developer.</h2>
        </div>
        <div class="links">
          <a href="https://github.com/jordan-cod" target="_blank">
            <i class="fa-brands fa-github fa-2xl" style="color: #000000;"></i>
          </a>
          <a href="https://www.linkedin.com/in/gabrieljordandev/" target="_blank">
            <i class="fa-brands fa-linkedin-in fa-2xl" style="color: #337eff;"></i>
          </a>
          <a href="/files/Gabrie_Jordan_resume.pdf" class="CVDownload" target="_blank">
            Curriculum
          </a>
        </div>
      </div>
      <div class="ME-2">
        <p>I am a full stack developer with experience in developing web applications using <b>VueJS</b>, <b>Node</b> and <b>mySQL.</b></p>
        <p>In the last year, i've been developing websites in some projects with the objetive of learning and understanding all the processes that i can use to solve any problem.</p>
      </div>
      <div class="languages">
        <h3>Languages</h3>
        <div class="languages-box">
          <div class="pt-br">
            <img src="../assets/ptbr.svg">
            <div>
              <p>Portuguese</p>
              <p>Native</p>
            </div>
          </div>
          <div class="english">
            <img src="../assets/english.svg">
            <div>
              <p>English</p>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skills">
        <h2>Skills</h2>
        <div class="skills-box">
          <skillComponent :skill="skill" v-for="(skill, index) in GetterSkills" :key="index"/>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="projects-box-flex" v-if="GetterProject.length == 0">
        <h2>Projects</h2>
        <img src="../assets/404.svg" class="NotFound">
      </div>
      <div class="projects-box" v-else>
        <h2>Projects</h2>
        <ProjectCard :project="project" v-for="project in GetterProject.slice(0,4)" :key="project.id"></ProjectCard>
      </div>
      <RouterLink to="/projects" class="viewMore">View More</RouterLink>
    </section>
  </div>
  <div class="container" v-else>
    <section class="about">
      <div class="ME">
        <div>
          <h1>Olá, meu nome é Gabriel Jordan.</h1>
          <h2>Um desenvolvedor FullStack.</h2>
        </div>
        <div class="links">
          <a href="https://github.com/jordan-cod" target="_blank">
            <i class="fa-brands fa-github fa-2xl" style="color: #000000;"></i>
          </a>
          <a href="https://www.linkedin.com/in/gabrieljordandev/" target="_blank">
            <i class="fa-brands fa-linkedin-in fa-2xl" style="color: #337eff;"></i>
          </a>
          <a href="/files/cv.pdf" class="CVDownload" download="">
            <i class="fa-solid fa-file-arrow-down fa-xl"></i>CV
          </a>
        </div>
      </div>
      <div class="ME-2">
        <p>Sou um desenvolvedor FullStack com expêriencia em desenvolvimento de aplicações web utilizando <b>VueJS</b>, <b>Node</b> e <b>mySQL.</b></p>
        <p>No último ano desenvolvi projetos com o objetivo de aprender e entender os processos que posso usar para resolver os possiveis imprevistos em produção.</p>
      </div>
      <div class="languages">
        <h3>Idiomas</h3>
        <div class="languages-box">
          <div class="pt-br">
            <img src="../assets/ptbr.svg">
            <div>
              <p>Português</p>
              <p>Nativo</p>
            </div>
          </div>
          <div class="english">
            <img src="../assets/english.svg">
            <div>
              <p>Inglês</p>
              <p>Intermediário</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skills">
        <h2>Tecnologias</h2>
        <div class="skills-box">
          <skillComponent :skill="skill" v-for="(skill, index) in GetterSkills" :key="index"/>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="projects-box-flex" v-if="GetterProject.length == 0">
        <h2>Projetos</h2>
        <img src="../assets/404.svg" class="NotFound">
      </div>
      <div class="projects-box" v-else>
        <h2>Projetos</h2>
        <ProjectCard :project="project" v-for="project in GetterProject.slice(0,4)" :key="project.id"></ProjectCard>
      </div>
      <RouterLink to="/projects" class="viewMore">Ver mais</RouterLink>
    </section>
  </div>
</template>

<style scoped>
  .container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;

  }
  .container .about{
    width: 80%;
    max-width: 1180px;
    margin-bottom: 50px;
    height: 450px;
  }
  .container .about .ME h1{
    font-size: 24px;
    color: black;
  }
  .container .about .ME h2{
    font-size: 18px;
    font-weight: 700;
    color: #3A3A3A;
  }
  .container .about .ME{
    display: flex;
    justify-content: space-between;
  }
  .container .about .ME div:last-child{
    display: flex;
    align-items: center;
  }
  .container .about .ME div:last-child a{
    margin-right: 10px;
  }
  .container .about .ME-2{
    max-width: 780px;
  }
  .container .about .ME-2 p{
    margin-top: 20px;
  }
  .languages{
    padding-bottom: 15px ;
    border-bottom: 1px solid black;
    max-width: 800px;
  }
  .languages h3{
    margin: 20px 0px;
  }
  .languages-box, .pt-br, .english{
    display: flex;
    align-items: center;
  }
  .pt-br{
    margin-right: 25px;
  }
  .pt-br img, .english img{
    margin-right: 10px;
  }
  .pt-br p:first-child, .english p:first-child{
    font-weight: 700;
  }
  .pt-br p:last-child, .english p:last-child{
    font-weight: 700;
    color: #4F4F4F;
  }
  .CVDownload{
    width: 119px;
    height: 39px;
    background-color: var(--blue);
    border-radius: 15px;

    color: white;
    font-weight: 700;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .CVDownload i{
    margin-right: 10px;
  }
  .fa-linkedin-in,.fa-github{
    font-size: 40px;
  }
  .links{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .skills{
    margin-top: 20px;
    max-width: 800px;
  }
  .skills h2{
    margin-bottom: 20px;
    font-size: 24px;
  }
  .skills-box{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    row-gap: 10px;
    column-gap: 10px;
  }
  .bg{
    position:relative;
    right: -750px;
    top: -310px;
    z-index: -1;

    max-width: 500px;
  }
  .projects{
    width: 100%;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 50px;
    padding-top: 100px;
  }
  .projects-box{
    margin-bottom: 80px;
    width: 85%;
    max-width: 1200px;
    display: grid;
    justify-items: center;
    column-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
  }
  .projects-box a{
    text-decoration: none;
    color: black;
  }
  .projects-box h2{
    margin-bottom: 50px;
    grid-column: 1/5;
    justify-self: left;
  }
  .viewMore {
    padding: 15px 25px;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    background: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .viewMore:hover{
    transform: scale(1.1);
  }
  .projects-box-flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 130px;
    margin-bottom: 80px;
    width: 80%;
    max-width: 1180px;
  }
  .projects-box-flex h2{
    align-self: flex-start;
    margin-bottom: 50px;
  }
  .NotFound{
    width: 350px;
    max-width: 100%;
  }
  @media screen and (max-width: 1400px){
    .bg{
      display: none;
    }
    .container .about{
      height: auto;
    }
    .projects-box{
    margin-bottom: 80px;
    width: 100%;
    max-width: 1280px;
  }
  }
  @media screen and (max-width: 1300px){
    .projects-box{
      grid-template-columns: repeat(3, 1fr);
      width: 85%;
    }
    .projects-box h2{
    margin-bottom: 50px;
    grid-column: 1/4;
    }
    .projects-box p{
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width: 980px){
    .skills-box{
    grid-template-columns: repeat(7, 1fr);
  }
  .projects-box{
      grid-template-columns: repeat(2, 1fr);
      width: 80%;
    }
    .projects-box h2{
    margin-bottom: 50px;
    grid-column: 1/3;
  }
  }
  @media screen and (max-width: 850px){
    .skills{
      margin-top: 50px;
    }
    .skills-box{
    grid-template-columns: repeat(6, 1fr);
  }
    .container .about .ME{
      flex-direction: column;
      row-gap: 20px;
    }
  }
  @media screen and (max-width: 750px){
    .links{
      width: 100%;
      justify-content: space-evenly;
    }
    .skills-box{
    grid-template-columns: repeat(5, 1fr);
  }
  }
  @media screen and (max-width: 675px){
    .container .about, .projects-box{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container .about .ME, .container .about .skills{
      width: 100%;
      align-items: center;
    }
    .container .about .languages{
      width: 100%;
    }
    .container .about .skills .skills-box{
      justify-items: center;
    }
    .projects-box h2{
    margin-bottom: 50px;
    width: 100%;
    }
    .skill{
      width: 85px;
      font-size: 10px;
    }
    .skills-box{
    grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 330px){
      .container .about{
        width: 90%;
      }
      .skill img{
      margin-right: 5px;
      max-width: 15px;
    }
    .languages-box, .pt-br, .english{
      font-size: 14px;
    }
  }
</style>

<script>
import ProjectCard from '../components/ProjectCardComponent.vue'
import skillComponent from '@/components/skillComponent.vue';
export default {
  name: 'containerView',
  components: {ProjectCard, skillComponent},
  data () {
    return {}
  },
  computed: {
    GetterProject () {
    return this.$store.state.projects
  },
    GetterSkills(){
      return this.$store.state.skills
    }
  },
  methods: {
            getLanguage(){
                this.$store.commit('getLanguage')
            }
        }
}
</script>
