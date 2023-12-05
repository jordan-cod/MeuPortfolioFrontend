<template>
  <div class="home">
    <div class="about">
      <div class="ME">
        <div>
          <h1>Hello, my name is Gabriel Jordan.</h1>
          <h2>A fullStack developer.</h2>
        </div>
        <div>
          <a href="https://github.com/jordan-cod" target="_blank">
            <img src="../assets/github.png">
          </a>
          <a href="https://www.linkedin.com/in/gabrieljordandev/" target="_blank">
            <img src="../assets/linkendin.png">
          </a>
          <a href="../../public/files/cv.pdf" class="CVDownload">
            <img src="../assets/archive.png">Curriculum
          </a>
        </div>
      </div>
      <div class="ME-2">
        <p>I'm 20 years old and based in Minas Gerais, Brazil.</p>
        <p>No último ano estive desenvolvendo websites em projetos pessoais no intuito de compreender todos<br>
          os processos que posso enfrentar em um projeto real. Atualmente meu principal projeto é este portfólio<br>
          que foi desenvolvido utilizando tecnologias web como : VueJS, Node e MySql.
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
          <img src="../assets/skills/html.svg">
          HTML
        </div>
        <div class="css skill">
          <img src="../assets/skills/css.svg">
          CSS
        </div>
        <div class="js skill">
          <img src="../assets/skills/js.svg">
          JavaScript
        </div>
        <div class="vuejs skill">
          <img src="../assets/skills/vuejs.svg">
          VueJS
        </div>
        <div class="nodejs skill">
          <img src="../assets/skills/nodejs.svg">
          NodeJS
        </div>
        <div class="mysql skill">
          <img src="../assets/skills/mysql.svg">
          MySQL
        </div>
        <div class="git skill">
          <img src="../assets/skills/git.svg">
          Git/GitHub
        </div>
        <div class="vba skill">
          <img src="../assets/skills/vba.svg">
          VBA
        </div>
        <div class="powerbi skill">
          <img src="../assets/skills/powerbi.svg">
          PowerBI
        </div>
        <div class="figma skill">
          <img src="../assets/skills/figma.svg">
          UI/UX
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    display: flex;
    justify-content: center;

    margin-top: 150px;
  }
  .home .about{
    width: 80%;
    max-width: 1180px;
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
  .CVDownload img{
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
  .skill img{
    margin-right: 5px;
    max-width: 25px;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
