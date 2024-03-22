<template>
    <div class="container" v-if="this.$store.state.language">
        <div class="projects">
            <h2>Projects</h2>
            <div class="search-box">
                <div class="search-bar">
                    <input type="text" v-model="filter.search" class="search" placeholder="Search a project">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i v-show="filter.search !== ''" class="fa-solid fa-xmark" @click="filter.search = ''"></i>
                </div>
                <div class="wrapper">
                    <p class="select-box" @click="filter.active = !filter.active" v-if="filter.selected== ''" :class="{'borderSelected': filter.selected !== ''}">Filter</p>
                    <p class="select-box"  @click="filter.active = !filter.active" v-else :class="{'borderSelected': filter.selected !== ''}">{{filter.selected}}</p>
                    <i v-show="filter.selected !== ''" class="fa-solid fa-xmark" @click="filter.selected = ''"></i>
                    <ul class="listbox" v-show="filter.active">
                        <li v-for="category in this.categories" v-bind:key="category.name" @click="filter.selected = category.name; filter.active = false">{{ category.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="projects-box-flex" v-if="filteredProjects.length === 0">
                <img src="../assets/404.svg" class="NotFound">
            </div>
            <TransitionGroup tag="div" name="list" class="projects-box-grid" v-else>
                <ProjectCard :project="project" v-for="project in filteredProjects" :key="project.id"></ProjectCard>
            </TransitionGroup>
        </div>
    </div>
    <div class="container" v-else>
        <div class="projects">
            <h2>Projetos</h2>
            <div class="search-box">
                <div class="search-bar">
                    <input type="text" v-model="filter.search" class="search" placeholder="Pesquisar projeto">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i v-show="filter.search !== ''" class="fa-solid fa-xmark" @click="filter.search = ''"></i>
                </div>
                <div class="wrapper">
                    <p class="select-box" @click="filter.active = !filter.active" v-if="filter.selected== ''" :class="{'borderSelected': filter.selected !== ''}">Filtro</p>
                    <p class="select-box"  @click="filter.active = !filter.active" v-else :class="{'borderSelected': filter.selected !== ''}">{{filter.selected}}</p>
                    <i v-show="filter.selected !== ''" class="fa-solid fa-xmark" @click="filter.selected = ''"></i>
                    <ul class="listbox" v-show="filter.active">
                        <li v-for="category in this.categories" v-bind:key="category.name" @click="filter.selected = category.name; filter.active = false">{{ category.name }}</li>
                    </ul>
                </div>
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
/* apply transition to moving elements */
    .list-move, 
    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
    /* ------------------------------- */
    .container{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
    }
    .projects{
        width: 85%;
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
        margin-right: 5px
    }
    .search-bar .fa-xmark{
        position: relative;
        right: -94%;
        top: -34px;
        z-index: 10;
        color: grey;
    }
    .select-box{
        height: 39px;
        width: 150px;
        min-width: 120px;
        padding: 0px 5px;
        border: 2px solid var(--black);
        background: var(--white);
        display: flex;
        align-items: center;
        cursor:default;
    }
    .select-box:hover{
        border: 2px solid var(--orange);
    }
    .borderSelected{
        border: 2px solid var(--orange);
    }
    .listbox{
        background: var(--white);
        position: absolute;
        row-gap: 5px;
        top:225px;
        width: 150px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.459);
        -moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.459);
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.459);
        z-index: 15;
    }
    .listbox li{
        padding: 5px 5px;
    }
    .listbox li:first-child{
        border-radius: 5px 5px 0px 0px;
    }
    .listbox li:last-child{
        border-radius: 0px 0px 5px 5px
    }
    .listbox li:hover{
        background-color: rgba(67, 67, 236, 0.452);
        cursor: default;
    }
    .fa-magnifying-glass{
        font-size: 25px;
        position: relative;
        top: -31px;
        left: 10px;
        color: gray;
    }
    .wrapper .fa-xmark{
        position: relative;
        right:-127px;
        top: -28px;
        z-index: 10;
        color: grey;
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
            active: false,
            search: '',
            selected: ''
        },
        categories:[
            {'name':'FrontEnd'}, {'name':'BackEnd'}, {'name': 'FrontEnd, BackEnd'}
        ]
    }
  },
  methods: {
    clear(){
        this.filter.search = ''
        this.filter.selected = ''
    },
  },
  computed: {
    filteredProjects: function(){
        let filtered = this.GetterProject

        if(this.filter.search !== ''){
            const searchRegex = new RegExp(this.filter.search, 'i')
            filtered = filtered.filter(project => searchRegex.test(project.title))
        }
        if(this.filter.selected !== ''){
            filtered = filtered.filter(project => project.category == this.filter.selected);
        }
        return filtered;

    },
    GetterProject () {
        return this.$store.state.projects
    }
  }
}
</script>