<template>
  <div class="home">
    <div class="about">
      <div class="ME">
        <div>
          <p><b>Hello, my name is Gabriel Jordan.</b></p>
          <p>A fullStack developer.</p>
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
  .home .about .ME b{
    font-size: 24px;
    color: black;
  }
  .home .about .ME p{
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
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
