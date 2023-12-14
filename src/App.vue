<template>
  <div :class="{ 'dark': this.$store.state.isDark}">
    <HeaderComponent/>
    <router-view v-slot="{ Component }">
      <Transition name="page-slide" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import '@/css/global.css'
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {HeaderComponent},
  beforeMount() {
    this.$store.commit('GetProjects')
    this.$store.commit('getTheme')
  }
}
</script>

<style>
  .page-opacity-enter-active,
  .page-opacity-leave-active{
    transition: 600ms ease all;
  }
  .page-opacity-enter-from,
  .page-opacity-leave-to{
    opacity: 0;
  }
  .page-slide-enter-active,
  .page-slide-leave-active{
    transition: 400ms ease all;
  }
  .page-slide-enter-from,
  .page-slide-leave-to{
    transform: translateY(60px)
  }
</style>
