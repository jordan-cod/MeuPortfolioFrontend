<template>
  <div :class="{ 'dark': this.$store.state.isDark}">
    <HeaderComponent/>
    <router-view v-slot="{ Component }">
      <Transition name="page-slide" mode="out-in">
        <component :is="Component"/>
      </Transition>
      <div v-show="this.scroll" class="scrollUp" @click="scrollUp">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </router-view>
  </div>
</template>

<script>
import '@/css/global.css'
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  data (){
    return {
      scroll : false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 250){
        this.scroll = true
      }
      else {
        this.scroll = false
      }
    },
    scrollUp(){
      window.scrollTo(0, top);
    }
  },
  components: {HeaderComponent},
  beforeMount() {
    this.$store.commit('GetProjects')
    this.$store.commit('getTheme')
    this.$store.commit('getLanguage')
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
  .scrollUp {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background:var(--blue);
    z-index: 10;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scrollUp i{
    font-size: 25px;
    color: var(--white);
  }
</style>
