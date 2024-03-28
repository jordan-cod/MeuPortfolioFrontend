<template>
  <article class="project-card">
    <div class="project-img">
      <RouterLink :to="{ path: `/project/${project.id}` }">
        <img :src="project.img">
      </RouterLink>
    </div>
    <div class="project-text">
      <RouterLink :to="{ path: `/project/${project.id}` }">
        <h3>{{ project.title }}</h3>
      </RouterLink>
      <p class="description" v-if="this.$store.state.language">{{ project.descript }}</p>
      <p class="description" v-else>{{ project.descript_ptbr }}</p>
      <div class="button_link_container">
        <p class="category">{{ project.category }}</p>
        <div>
          <a :href="project.url" class="button_Link">
            <i class="fa-solid fa-code"></i>
          </a>
          <a :href="project.live_url" class="button_Link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  width: 300px;
  height: 500px;
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

.project-card img {
  width: 300px;
  height: 250px;
  border-radius: 5px;
}

.project-card h3 {
  margin-bottom: 15px;
  font-weight: 500;
}

.project-card p {
  margin-bottom: 15px;
  color: #494949;
  font-weight: 500;
}

.project-text {
  padding: 20px 20px;
  width: 100%;
}

.project-card:hover {
  box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
  -webkit-box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
  -moz-box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
}

.project-card .view:hover {
  background: var(--blue);
}

.description {
  height: 100px;
}

.button_link_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.button_link_container div{
  display: flex;
  column-gap: 5px;
}
.button_link_container .category {
  margin: 0;
}
.button_Link {
  border-radius: 10px;
  height: 30px;
  width: 30px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_Link i {
  font-size: 20px;
}
</style>

<script>
export default {
  props: {
    project: Object
  },
  data() {
    return {}
  }
}
</script>