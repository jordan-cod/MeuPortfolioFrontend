<template>
    <div class="project">
       <div class="project-box">
            <div>
                <h1>{{ project.title }}</h1>
            </div>
            <div class="carrousel">
                <div class="display">
                    <div class="display-back">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div class="display-next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div class="display-images-mobile">
                    <div class="display-mobile"></div>
                    <div class="display-mobile"></div>
                    <div class="display-mobile"></div>
                </div>
                <div class="circles">
                    <span class="circle"></span>
                    <span class="circle circle-selected"></span>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="project-about">
                <p>{{ this.project.descript }}</p>
                <div class="btns">
                    <a :href="this.project.url" target="_blank" class="btn">GitHub</a>
                    <a :href="this.project.download" class="btn">Download</a>
                </div>
            </div>
       </div>
    </div>
</template>

<style scoped>
  .project{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 120px 0px;
  }
  .project-box{
    width: 80%;
    max-width: 1200px;
  }
  .project-box div:first-child h1{
    margin-bottom: 20px;
  }
  .display{
    width: 100%;
    height: 400px;
    background: rgb(59, 59, 59);
    margin-bottom: 5px;

    display: flex;
    justify-content: space-between;
  }
  .display-back, .display-next{
    width: 50px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.247);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .display-back:hover, .display-next:hover{
    background-color: rgba(0, 0, 0, 0.397);
    cursor: pointer;
  }
  .fa-chevron-left, .fa-chevron-right{
    font-size: 30px;
  }
  .circles{
    display: flex;
    column-gap: 5px;
    cursor: pointer;
    align-items: center;
  }
  .circle{
    width: 10px;
    height: 10px;
    background: blue;
    display: block;
    border-radius: 50%;
  }
  .circle-selected {
    width: 15px;
    height: 15px;
  }
  .carrousel{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    background-color: blue;
    color: white;
    font-weight: 700;
    padding: 10px;
    border-radius: 10px;
    width: 100px;
    text-align: center;
  }
  .btn:hover{
    background-color: rgb(1, 1, 133);
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
    .display{
        display: none;
    }
    .circles{
        display: none;
    }
    .display-images-mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        row-gap: 15px;
    }
    .display-mobile{
        width: 300px;
        height: 300px;
        background: gray;
    }
    .btns{
        justify-content: center;
        flex-direction: row;
    }
        
  }
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            project: [],
            id: this.$route.params.id
            
        }
    },
    methods: {

        fetchProject(){
            axios.get(`https://apigabrieljordan.onrender.com/api/project/${this.id}`)
                .then(response=>{
                    this.project = response.data.result
                })
            }
    },
    beforeMount () {
        this.fetchProject();
    }
}
</script>