<template>
    <div class="project">
       <div class="project-box">
          <div class="title-box">
            <div>
                <h1 class="project-title">{{ project.title }}</h1>
            </div>
            <div>
              <ul class="tecnologies">
                <li class="tecnologie" v-for="(tecnologie, index) in tecnologies" :key="index">{{ tecnologie }}</li>
              </ul>
            </div>
          </div>
            <div class="carrousel">
                  <img class='teste' :src="project.laptop_img">
                  <img class='teste mobile' :src="project.mobile_img" v-if="project.mobile_img">
            </div>
            <div class="project-about">
                <p v-if="this.$store.state.language">{{project.descript}}</p>
                <p v-else>{{project.descript_ptbr}}</p>
                <div class="btns">
                    <a :href="this.project.url" target="_blank" class="btn">GitHub</a>
                    <a :href="this.project.download" class="btn">Download</a>
                    <a :href="this.project.live_url" class="btn live" target="_blank">Live project</a>
                </div>
            </div>
       </div>
    </div>
</template>

<style scoped>
  .project{
    width: 100%;
    display: flex;
    min-height: 94vh;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
  }
  .project-title{
    color: var(--blue);
  }
  .project-box{
    width: 80%;
    max-width: 1200px;
  }
  .title-box{
    display: flex;
    align-items: center;
    width: 100%;
    column-gap: 20px;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .tecnologies{
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    column-gap: 10px;
    flex-wrap: wrap;
  }
  .tecnologies li{
    background: var(--blue);
    width: 100px;
    height: 40px;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carrousel{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--orange);
    margin-top: 20px;
    column-gap: 50px;
    width: 100%;
  }
  .carrousel img{
    max-width: 80%;
  }
  .carrousel .mobile{
    height: 450px;
  }
  .project-about{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 10px;
  }
  .btn{
    background-color: var(--blue);
    color: white;
    font-weight: 700;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    display: flex;  
    align-items: center;
    justify-content: center;
  }
  .btn:hover{
    background-color: var(--blue);
  }
  .live{
    font-size: 14px;
  }
  @media screen and (max-width: 1050px){
    .title-box{
      flex-direction: column;
    }
    .project-title{
    margin-bottom: 20px;
  }
  .project-about p{
    margin-bottom: 50px;
  }
  }
  @media screen and (max-width: 815px){
    .carrousel{
      flex-direction: column;
    }
    .carrousel .mobile{
      height: 300px;
      margin: 20px 0px;
    }
    .title-box{
      width: 100%;
      justify-content: center;
    }
    .title-box div:last-child{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tecnologies{
      width: 80%;
    }
    .display{
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px){
    .project-about{
        flex-direction: column-reverse;
    }
    .btns{
        flex-direction: row-reverse;
        column-gap: 20px;
        margin-bottom: 50px;
    }
    .title-box{
      margin-bottom: 10px ;
    }
    .tecnologies{
      font-size: 13px;
      width: 100%;
    }
    .btns{
        justify-content: center;
        flex-direction: row;
        margin-bottom: 50px;
    }
    @media screen and (max-width: 450px){
      .project-box{
        width: 90%;
      }
      .live{
        font-size: 12px;
      }
    }  
  }
  @media screen and (max-width: 360px){
    .tecnologies{
      justify-content: space-evenly;
    }
  }
</style>

<script>
import axios from 'axios';
export default {
    name: 'singleProject',
    data() {
        return {
            project: [],
            id: this.$route.params.id,
            tecnologies: []            
        }
    },
    methods: {
        fetchProject(){
            axios.get(`/projects/${this.id}`)
                .then(response=>{
                    this.project = response.data
                    this.tecnologies = this.project.tecnologies.split(',')
                })
            }
    },
    beforeMount () {
        this.fetchProject();
    },
    computed: {
      GetterSkills() {
        return this.$store.state.skills
    },
      GetterSkillsFiltered(){
        return this.$store.state.skills.filter((skill)=>{return skill.name.toLowerCase().match(this.skill.name.toLowerCase())})
      }
    }
}
</script>