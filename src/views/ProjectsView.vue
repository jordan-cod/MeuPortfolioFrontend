<template>
    <div class="projects-box">
        <div class="projects">
            <div class="projects-box-flex" v-if="projects.length == 0">
                <h2>Projects</h2>
                <img src="../assets/404.svg" class="NotFound">
            </div>
            <div class="projects-box-grid" v-else>
                <h2>Projects</h2>
                <RouterLink v-for="project in projects" :key="project.id" to="" class="project-card">
                <article>
                    <div class="article-img"></div>
                    <h3>{{ project.title }}</h3>
                    <p>{{project.description}}</p>
                </article>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style>
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
        grid-template-columns: repeat(4, 1fr);
        row-gap: 20px;
        column-gap: 20px;
    }
    .projects-box-grid h2{
        grid-column: 1/5;
        margin-bottom: 50px;
    }
    .project-card{
        min-width: 300px;
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
    }
    .project-card{
        text-decoration: none;
        color: black;
        border: 1px solid black;
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
    @media screen and (max-width: 1024px){
        .projects-box-grid{
        grid-template-columns: repeat(2, 1fr);
        }
        .projects-box-grid h2{
        grid-column: 1/3;
        margin-bottom: 50px;
        }
    }
    @media screen and (max-width: 1024px){
        .projects-box-grid{
        grid-template-columns: repeat(1, 1fr);
        }
        .projects-box-grid h2{
        grid-column: 1/2;
        margin-bottom: 50px;
        }
    }
    @media screen and (max-width: 350px){
        .project-card{
        min-width: 250px;
        width: 100%;
        height: 350px;
        }
    }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'ProjectsView',
  components: {},
  data () {
    return {
      projects: [ {title: "21312"},{title: "231"},{title: "31213"},{title: "3123123"},{title: "2131"},{title: "12313"},{title: "12313"},{title: "12313"},{title: "12313"},{title: "12313"}
        
      ]
    }
  }
}
</script>