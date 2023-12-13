<template>
    <div class="logged">
        <header>
            <nav>
                <p>Logged as: Jordan</p>
                <RouterLink to="/">Portfolio</RouterLink>
            </nav>
        </header>
        <main class="content">
            <div class="content-title">
                <h1>Projects</h1>
                <button class="btnAdd" @click="InsertProject()">New</button>
            </div>
                <TransitionGroup name="list" tag="ul" class="projects-list">
                <li v-for="(project, index) in GetterProject" :key="index" class="project-grid">
                        <img :src="project.img">
                        <p>{{ project.title }}</p>
                        <p>{{ project.descript }}</p>
                        <div class="btns">
                            {{ project.id }}
                            <i class="fa-solid fa-pencil btn"></i>
                            <i class="fa-solid fa-trash btn" @click="DeleteProject(project.id, index)"></i>
                        </div>
                </li>
                </TransitionGroup>
        </main>
    </div>
</template>

<script>
export default {
  name: 'dashBoard',
  components: [],
  data () {
    return {
        newProjects: [],
        newProject: {
            img: 'teste',
            title: 'teste',
            descript: 'teste',
            url: 'teste',
            download: 'teste'
        }
    }
  },
  methods: {
    DeleteProject(id, index) {
        this.$store.commit('DeleteProject', {
            project_id : id,
            project_index : index
        })
    },
    InsertProject(){
        const body = {img: this.newProject.img, title: this.newProject.title, descript: this.newProject.descript, url: this.newProject.url, download: this.newProject.download}
        this.$store.commit('InsertProject', body)

    }
  },
  computed: {
    GetterProject () {
    return this.$store.state.projects
  }
  }
}
</script>

<style scoped>
    .logged{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--gray);
        color: var(--blue);
        position: absolute;
        top: 0;
    }
    .logged a{
        color: var(--font-white);
        text-transform: uppercase;
        font-weight: 700;
    }
    .logged a:hover{
        color: var(--orange);
        text-transform: uppercase;
        font-weight: 700;
    }
    .logged a.router-link-exact-active {
    color: var(--orange);
    border-bottom: 3px solid var(--orange);
    }
    header{
        width:100%;
        background: var(--blue);
        height:60px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    header nav{
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1366px;
    }
    .content{
        padding-top: 80px;
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: center;
    }
    .content-title{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .content h1{
        margin-bottom: 80px;
        align-self:left;
    }
    .content .btnAdd{
        width: 100px;
        height: 40px;
        background: var(--blue);
        color: var(--font-white);
        font-weight: 700;
        border: 2px solid transparent;
        border-radius: 5px;
        cursor: pointer;
    }
    .content .btnAdd:hover{
        border: 2px solid var(--orange);
    }
    .projects-list{
        display: flex;
        flex-direction: column;
        width: 100%;
        row-gap: 10px;
        border-radius: 5px;
    }
    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
    .projects-list li{
        background: var(--white);
        display: grid;
        grid-template-columns: 72px 100px 1fr 30px 30px;
        column-gap: 20px;
        height: 60px;
        border-radius: 5px;
        align-items: center;
        transition: 0.2s ease;


    }
    .projects-list li:hover{
        transform: scale(1.008);
        box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
      -webkit-box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
      -moz-box-shadow: 1px 1px 28px -6px rgba(0,0,0,0.397);
    }
    .projects-list li div{
        display: flex;
        align-items: center;
    }
    .projects-list li img{
        width: 72px;
        border-radius: 5px 0px 0px 5px;
    }
    .project-info p{
        padding: 5px;
    }
    .project-opt{
        display: flex;
        column-gap: 5px;
        width: 100px;
    }
    .btns{
        display: flex;
        column-gap: 20px;
    }
    .btn{
        color: var(--blue);
        transition: 0.2s ease;
    }
    .btn:hover{
        color: var(--orange);
        cursor: pointer;
    }
    @media screen and (max-width: 1105px){
        .projects-list li{
            height: 80px;
        }
    }
    @media screen and (max-width: 805px){
        .projects-list li{
            height: 120px;
        }
    }
    @media screen and (max-width: 688px){
        .projects-list{
            width: 100%;
            align-items: center;
            margin-bottom: 20px;
        }
        .projects-list li{
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 550px;
        }
        .projects-list li img{
            width: 100%;
            max-width: 500px;   
        }
        .projects-list li p:nth-child(2){
            font-weight: 700;
            font-size: 24px;
            margin-top: 30px;
        }
        .projects-list li p:nth-child(3){
            height: 150px;
            margin-bottom: 20px;
        }
        .projects-list li p:nth-child(3){
            padding: 15px;
        }
        .btns{
            font-size: 50px;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            position: relative;
            bottom: 0px;
        }
    }
</style>