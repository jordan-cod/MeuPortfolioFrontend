<template>
  <div class="home">
    <section class="about">
      <div class="ME">
        <div>
          <h1>Hello, my name is Gabriel Jordan.</h1>
          <h2>A fullStack developer.</h2>
        </div>
        <div>
          <a href="https://github.com/jordan-cod" target="_blank">
            <i class="fa-brands fa-github fa-2xl" style="color: #000000;"></i>
          </a>
          <a href="https://www.linkedin.com/in/gabrieljordandev/" target="_blank">
            <i class="fa-brands fa-linkedin fa-2xl" style="color: #337eff;"></i>
          </a>
          <a href="../../public/files/cv.pdf" class="CVDownload">
            <i class="fa-solid fa-file-arrow-down fa-xl"></i>Curriculum
          </a>
        </div>
      </div>
      <div class="ME-2">
        <p>I'm 20 years old and based in Minas Gerais, Brazil.</p>
        <p>In the last year, i've been developing websites in some personal projects with the objetive being leaning and understanding all the processes that i can use to beat any problem i see in real projects.
            By now, my main project is this portfolio that i've developed using web technologies like: VueJS, Node, MySql and more.
        </p>
      </div>
      <div class="languages">
        <h3>Languages</h3>
        <div class="languages-box">
          <div class="pt-br">
            <img src="../assets/ptbr.svg">
            <div>
              <p>Portuguese</p>
              <p>Fluent</p>
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
          <div class="html skill">
            <i class="fa-brands fa-html5 fa-2xl"></i>
          HTML
        </div>
        <div class="css skill">
          <i class="fa-brands fa-css3-alt fa-2xl"></i>
          CSS
        </div>
        <div class="js skill">
          <i class="fa-brands fa-js fa-xl"></i>
          JavaScript
        </div>
        <div class="vuejs skill">
          <i class="fa-brands fa-vuejs fa-2xl"></i>
          VueJS
        </div>
        <div class="nodejs skill">
          <i class="fa-brands fa-node-js fa-2xl"></i>
          NodeJS
        </div>
        <div class="mysql skill">
          <i class="fa-solid fa-database fa-2xl"></i>
          MySQL
        </div>
        <div class="git skill">
          <i class="fa-brands fa-git-alt fa-xl"></i>
          Git/GitHub
        </div>
        <div class="vba skill">
          <i class="fa-solid fa-laptop-code fa-2xl"></i>
          VBA
        </div>
        <div class="powerbi skill">
          <i class="fa-solid fa-chart-simple fa-2xl"></i>
          PowerBI
        </div>
        <div class="figma skill">
          <i class="fa-brands fa-figma fa-2xl"></i>
          UI/UX
        </div>
        </div>
      </div>
      <img src="../assets/bg.svg" class="bg">
    </section>
    <section class="projects">
      <div class="projects-box-flex" v-if="projects.length == 0">
        <h2>Projects</h2>
        <img src="../assets/404.svg" class="NotFound">
      </div>
      <div class="projects-box" v-else>
        <h2>Projects</h2>
        <RouterLink v-for="project in projects" :key="project.id" :to="{path: `/project/${project.id}`}">
          <article>
            <div class="article-img">
              <img :src="project.img"> 
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{project.description}}</p>
          </article>
        </RouterLink>
      </div>
      <RouterLink to="" class="viewMore">View More</RouterLink>
    </section>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 150px;
  }
  .home .about{
    width: 80%;
    max-width: 1180px;
    margin-bottom: 50px;
  }
  .home .about .ME h1{
    font-size: 24px;
    color: black;
  }
  .home .about .ME h2{
    font-size: 18px;
    font-weight: 700;
    color: #3A3A3A;
  }
  .home .about .ME{
    display: flex;
    justify-content: space-between;
  }
  .home .about .ME div:last-child{
    display: flex;
    align-items: center;
  }
  .home .about .ME div:last-child a{
    margin-right: 10px;
  }
  .home .about .ME-2{
    max-width: 780px;
  }
  .home .about .ME-2 p{
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
    width: 143px;
    height: 43px;
    background-color: #0015FF;
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
  .skill{
    background: #003CD7;
    width: 100px;
    height: 40px;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }
  .skill i{
    margin-right: 5px;
  }
  .bg{
    position:relative;
    right: -750px;
    top: -310px;
    z-index: -1;

    max-width: 500px;
  }
  .projects{
    background: #DDDDDD;
    width: 100%;
    background-image: url(../assets/projectsBG.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 50px;
  }
  .projects-box{
    margin-bottom: 80px;
    width: 80%;
    max-width: 1180px;
    display: grid;
    column-gap: 50px;
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
  }
  .projects-box article{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    max-height: 450px;
  }
  .projects-box article h3{
    margin-bottom: 10px;
    max-width: 200px;
  }
  .projects-box article p{
    max-width: 200px;
  }
  .article-img{
    height: 200px;
    min-width: 200px;
    width: 100%;
    max-width: 100%;
    background: red;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .viewMore {
    padding: 15px 25px;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    background: #0015FF;
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
  }
  @media screen and (max-width: 1080px){
    .projects-box{
      grid-template-columns: repeat(3, 1fr);
    }
    .projects-box p{
      margin-bottom: 50px;
    }
    .projects-box h2{
    margin-bottom: 50px;
    grid-column: 1/4;
  }
  }
  @media screen and (max-width: 980px){
    .skills-box{
    grid-template-columns: repeat(7, 1fr);
  }
  .projects-box{
      grid-template-columns: repeat(2, 1fr);
    }
    .projects-box h2{
    margin-bottom: 50px;
    grid-column: 1/3;
  }
  }
  @media screen and (max-width: 850px){
    .skills-box{
    grid-template-columns: repeat(6, 1fr);
  }
    .home .about .ME{
      flex-direction: column;
      row-gap: 20px;
    }
  }
  @media screen and (max-width: 750px){
    .skills-box{
    grid-template-columns: repeat(5, 1fr);
  }
  }
  @media screen and (max-width: 600px){
    .projects-box{
      grid-template-columns: repeat(1, 1fr);
    }
    .projects-box h2{
    margin-bottom: 50px;
    grid-column: 1/2;
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
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {},
  methods: {
    searchAll(){
      axios.get('https://apigabrieljordan.onrender.com/api/projects')
        .then(response =>{
          this.projects = response.data.result
        })
    }
  },
  data () {
    return {
      projects: [],
      ClickedProject: {}
    }
  },
  beforeMount(){
    this.searchAll()
  }
}
</script>
