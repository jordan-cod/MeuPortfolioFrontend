<template>
    <div class="projects-box">
        <div class="projects">
            <div class="projects-box-flex" v-if="projects.length === 0">
                <h2>Projects</h2>
                <img src="../assets/404.svg" class="NotFound">
            </div>
            <div class="projects-box-grid" v-else>
                <h2>Projects</h2>
                <ProjectCard :project="project" v-for="project in projects" :key="project.id"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .projects-box{
        padding-top: 140px;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--gray);
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
        grid-template-columns: repeat(5, 1fr);
        row-gap: 20px;
        column-gap: 20px;
    }
    .projects-box-grid h2{
        grid-column: 1/6;
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
        background: var(--blue);
        color: white;
        padding: 10px 30px;
        border-radius: 5px;
        margin-bottom: 5px;
        width: 100%;
        text-align: center;
        font-weight: 700;
    }
    .project-card .view:hover{
        background: var(--blue);
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
import ProjectCard from '../components/ProjectCardComponent.vue'
export default {
  name: 'ProjectsView',
  props: {
    projects: Array
  },
  components: {ProjectCard},
  data () {
    return {}
  }
}
</script>