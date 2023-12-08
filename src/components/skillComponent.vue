<template>
        <div :class="skill.class">
            <i :class="skill.iClass"></i>
          {{ skill.name }}
        </div>
</template>

<style scoped>
  .skill{
    background: var(--blue);
    width: 100px;
    height: 40px;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }
  .skill i{
    margin-right: 5px;
  }
</style>

<script>
export default{
    props: {
        skill: {
          name: String,
          iClass: String,
          class: String
        }
    },
    data(){
      return{}
    }
}
</script>