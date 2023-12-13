<template>
    <header>
        <div>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/projects">Projects</RouterLink>
                    </li>
                    <div @click="changeTheme" class="themeChanger">
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-moon"></i>
                        <div class="ball" :class="{ active: this.$store.state.isDark }"></div>
                    </div>
                </ul>
            </nav>
        </div>

    </header>
</template>

<style scoped>
.themeChanger {
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 50px;
  height: 26px;
  width: 50px;
  position: relative;
  cursor: pointer;
}
.fa-moon {
  color: #2e2e2e;
}
.fa-sun {
  color: #f39c12;
}
.ball {
  width: 22px;
  height: 22px;
  background: rgb(31, 31, 31);
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 22px;
  transition: transform 0.2s linear;
}
.active {
  transform: translateX(24px);
}
    header{
        width: 100%;
        height: 60px;
        background: var(--blue);
        color: rgb(0, 0, 0);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
      -webkit-box-shadow: 1px 1px 28px -6px rgba(0, 0, 0, 0.397);
      -moz-box-shadow: 1px 1px 28px -6px rgba(0,0,0,0.397);
    }
    header div{
        width: 80%;
        max-width: 1366px;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
    header div nav{
        height: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    header ul {
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 30px;
    }
    header nav a {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        padding: 16px 0px;
    }
    header nav a:hover{
        color: var(--orange);
    }
    header nav a.router-link-exact-active {
    color: var(--orange);
    border-bottom: 3px solid var(--orange);
    }

</style>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            changeTheme(){
                this.$store.commit('ToggleTheme')
                console.log(this.$store.state.isDark)
            }
        }
    }
</script>