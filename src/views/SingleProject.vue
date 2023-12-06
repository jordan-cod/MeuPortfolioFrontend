<template>
    <div class="project">
        <p>{{ this.project.title }}</p>
        <p>{{ this.project.description }}</p>
        <p>{{ this.project.url }}</p>
        <p>{{ this.project.download }}</p>
    </div>
</template>

<style scoped>
  div{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 150px;
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
            axios.get(`http://localhost:3000/api/project/${this.id}`)
                .then(response=>{
                    this.project = response.data.result
                    console.log(response.data.result)
                })
            }
    },
    beforeMount () {
        this.fetchProject();
    }
}
</script>