<template>
    <div class="projects-box">
        <div class="projects">
            <div class="projects-box-flex" v-if="projects.length === 0">
                <h2>Projects</h2>
                <img src="../assets/404.svg" class="NotFound">
            </div>
            <div class="projects-box-grid" v-else>
                <h2>Projects</h2>
                <article v-for="project in projects" :key="project.id" class="project-card">
                    <img :src="project.img" class="article-img"/>
                    <h3>{{ project.title }}</h3>
                    <p>{{project.descript}}</p>
                    <RouterLink :to="{path: `/project/${project.id}`}" class="view">View</RouterLink>
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .projects-box{
        margin-top: 140px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .projects{
        width: 80%;
    }
    .projects-box-flex{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .projects-box-flex h2{
        align-self: self-start;
        margin-bottom: 100px;
    }
    .projects-box-grid{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 20px;
        column-gap: 20px;
    }
    .projects-box-grid h2{
        grid-column: 1/5;
        margin-bottom: 50px;
    }
    .project-card{
        width: 300px;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: 1px solid black;
        padding: 5px 15px;
        border-radius: 5px;
    }
    .project-card img{
        width: 290px;
        height: 250px;
        margin-bottom: 15px;
    }
    .project-card h3{
        margin-bottom: 15px;
    }
    .project-card p{
        margin-bottom: 15px;
    }
    .project-card .view{
        background: #0015FF;
        color: white;
        padding: 10px 30px;
        border-radius: 5px;
        margin-bottom: 5px;
        width: 100%;
        text-align: center;
        font-weight: 700;
    }
    .project-card .view:hover{
        background: #000b81;
    }
    .NotFound{
        width: 350px;
        max-width: 100%;
    }
    @media screen and (max-width: 1400px){
        .projects-box-grid{
        grid-template-columns: repeat(3, 1fr);
        }
        .projects-box-grid h2{
        grid-column: 1/4;
        margin-bottom: 50px;
        }
    }
    @media screen and (max-width: 1150px){
        .projects-box-grid{
        grid-template-columns: repeat(2, 1fr);
        }
        .projects-box-grid h2{
        grid-column: 1/3;
        margin-bottom: 50px;
        }
    }
    @media screen and (max-width: 750px){
        .projects-box-grid{
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .projects-box-grid h2{
        margin-bottom: 50px;
        }
    }
</style>

<script>
import axios from 'axios'

export default {
  name: 'ProjectsView',
  components: {},
  data () {
    return {
      projects: []
    }
  },
  methods: {
    searchAllPage(){
      axios.get('https://apigabrieljordan.onrender.com/api/projects')
        .then(response =>{
          this.projects = response.data.result
        })
    }
  },
  beforeMount(){
    this.searchAllPage()
  }
}
</script>