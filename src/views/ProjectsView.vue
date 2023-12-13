<template>
    <div class="projects-box">
        <div class="projects">
            <h2>Projects</h2>
            <div class="search-box">
                <div class="search-bar">
                    <input type="text" v-model="filter.search" class="search" placeholder="Search a project">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <button class="selectBox" @click="clearSearch">Clear</button>
            </div>
            <div class="projects-box-flex" v-if="filteredProjects.length === 0">
                <img src="../assets/404.svg" class="NotFound">
            </div>
            <TransitionGroup tag="div" name="list" class="projects-box-grid" v-else>
                <ProjectCard :project="project" v-for="project in filteredProjects" :key="project.id"></ProjectCard>
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
    .list-move, /* apply transition to moving elements */
    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
    .projects-box{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
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
    .search-box{
        margin: 10px 0px 30px 0px;
        display: flex;
        justify-content: center;
    }
    .search-bar{
        width: 100%;
    }
    .fa-magnifying-glass{
        font-size: 25px;
        position: relative;
        top: -31px;
        left: 10px;
        color: gray;
    }
    .search{
        grid-column: 1/6;
        width: 100%;
        padding: 10px 15px 10px 45px;
        outline: none;
        border: 2px solid var(--black);
        transition: border 0.2s linear;
    }
    .search:focus{
        border: 2px solid var(--orange);
    }
    .selectBox{
        height: 39px;
        border: 2px solid var(--black);
        margin-left: 5px;
        padding: 0px 10px;
        color: var(--blue);
        background: var(--white);
    }
    .selectBox:hover{
        border: 2px solid var(--orange);
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
    @media screen and (max-width: 1800px){
        .projects-box-grid{
        grid-template-columns: repeat(4, 1fr);
        }
        .projects-box-grid h2{
        grid-column: 1/5;
        margin-bottom: 50px;
        }
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
  components: {ProjectCard},
  data () {
    return {
        filter: {
            search: '',
            selected: ''
        }
    }
  },
  methods: {
    clearSearch(){
        this.filter.search = ""
    }
  },
  computed: {
    filteredProjects: function(){
        return this.GetterProject.filter((project) => {
            return project.title.toLowerCase().match(this.filter.search.toLowerCase())
        })
    },
    GetterProject () {
        return this.$store.state.projects
    }
  }
}
</script>