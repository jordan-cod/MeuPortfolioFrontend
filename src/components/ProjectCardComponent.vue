<template>
    <RouterLink :to="{path: `/project/${project.id}`}">
              
              <article  class="project-card">
                <div class="project-img">
                  <img :src="project.img">
                </div>
                <div class="project-text">
                  <h3>{{ project.title }}</h3>
                  <p>{{project.descript}}</p>
                </div> 
              </article>
    </RouterLink>
</template>

<style scoped   >
      .project-card{
        width: 300px;
        height: 405px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--white);
        border-radius: 5px;
        margin-bottom: 20px;
        transition: transform 0.1s linear;
        color: var(--font-black);

        font-family: 'Public Sans';
    }
    .project-card img{
        width: 300px;
        height: 250px;
    }
    .project-card h3{
        margin-bottom: 15px;
        font-weight: 500;
    }
    .project-card p{
        margin-bottom: 15px;
        color: #494949;
        font-weight: 500;
    }
    .project-text{
      padding: 20px 20px;
    }
    .project-card:hover{
      transform: scale(1.1);
      box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
      -webkit-box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
      -moz-box-shadow: 1px 1px 28px -6px rgba(0,0,0,0.397);

    }
    .project-card .view:hover{
        background: var(--blue);

    }
</style>

<script>
export default {
    props: {
        project: Object
    },
    data() {
        return {

        }
    }
}
</script>