<template>
    <header v-if="this.$store.state.language">
            <nav>
                <RouterLink to="/" v-if="this.$store.state.mobile_menu"><span>G</span>abriel Jordan</RouterLink>
                <input class="checkbox" type="checkbox" name="" id="" />
                <div class="hamburger-lines" @click="this.$store.commit('ToggleMenu')">
                    <span class="line line1" :class="{ open: !this.$store.state.mobile_menu}"></span>
                    <span class="line line2" :class="{ open: !this.$store.state.mobile_menu}"></span>
                    <span class="line line3" :class="{ open: !this.$store.state.mobile_menu }"></span>
                    </div> 
                <ul :class="{ open: !this.$store.state.mobile_menu }">
                    <div>
                        <li>
                        <RouterLink to="/" @click="this.$store.commit('DisableMenu')">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/projects" @click="this.$store.commit('DisableMenu')">Projects</RouterLink>
                    </li>
                    <li @click="changeTheme" class="toggle-darkmode">
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-moon"></i>
                        <div class="ball" :class="{ active: this.$store.state.isDark }"></div>
                    </li>
                    <li @click="changeLanguage" class="toggle-language">
                        <img src="../assets/br-flag-circle.svg" alt="" class="pt-br">
                        <img src="../assets/usa-flag-circle.png" alt="" class="english">
                        <div class="ball-language" :class="{ active: this.$store.state.language }"></div>
                    </li>
                    </div>
                </ul>
            </nav>
    </header>
    <header v-else>
            <nav>
                <RouterLink to="/" v-if="this.$store.state.mobile_menu"><span>G</span>abriel Jordan</RouterLink>
                <input class="checkbox" type="checkbox" name="" id="" />
                <div class="hamburger-lines" @click="this.$store.commit('ToggleMenu')">
                    <span class="line line1" :class="{ open: !this.$store.state.mobile_menu}"></span>
                    <span class="line line2" :class="{ open: !this.$store.state.mobile_menu}"></span>
                    <span class="line line3" :class="{ open: !this.$store.state.mobile_menu }"></span>
                    </div> 
                <ul :class="{ open: !this.$store.state.mobile_menu }">
                    <div>
                        <li>
                        <RouterLink to="/" @click="this.$store.commit('DisableMenu')">Inicio</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/projects" @click="this.$store.commit('DisableMenu')">Projetos</RouterLink>
                    </li>
                    <li @click="changeTheme" class="toggle-darkmode">
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-moon"></i>
                        <div class="ball" :class="{ active: this.$store.state.isDark }"></div>
                    </li>
                    <li @click="changeLanguage" class="toggle-language">
                        <img src="../assets/br-flag-circle.svg" alt="" class="pt-br">
                        <img src="../assets/usa-flag-circle.png" alt="" class="english">
                        <div class="ball-language" :class="{ active: this.$store.state.language }"></div>
                    </li>
                    </div>
                </ul>
            </nav>
    </header>
</template>

<style scoped>
    .hamburger-lines{
        height: 26px;
        width: 32px;
        position: absolute;
        top: 17px;
        right: 20px;
        z-index: 2;
        display: none;
        flex-direction: column;
        justify-content: space-between;
    }
    .hamburger-lines .line{
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #ffffff;
    }
    .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
    }

    .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
    }

    .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
    }
    .hamburger-lines .line1.open {
    transform: rotate(45deg);
    }

    .hamburger-lines .line2.open {
    transform: scaleY(0);
    }

    .hamburger-lines .line3.open {
    transform: rotate(-45deg);
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
    header nav{
        max-width: 1180px;
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
    }
    header nav a{
        font-size: 20px;
        font-weight: 700;
        color: var(--white);
    }
    header nav a span{
        color: vaR(--orange);
        font-size: 25px;
    }
    header nav ul, header nav ul div {
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 30px;
    }
    header nav ul .toggle-language{
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
    header nav ul .toggle-language .pt-br, header nav ul .toggle-language .english{
        width: 15px;
        height: 15px;
        border-radius: 50px;
    }
    .ball-language {
    width: 22px;
    height: 22px;
    background: rgb(31, 31, 31);
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 22px;
    transition: transform 0.2s linear;
    }
    header nav ul .toggle-darkmode{
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
    .checkbox {
    position: absolute;
    display: none;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
    }
    header nav ul li a {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        padding: 16px 0px;
    }
    header nav ul li a:hover{
        color: var(--orange);
    }
    header nav ul li a.router-link-exact-active {
    color: var(--orange);
    border-bottom: 3px solid var(--orange);
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
    @media screen and (max-width: 768px){
        .hamburger-lines{
            display: flex;
        }
        header nav ul{
            display: none;
        }
        header nav ul div{
            flex-direction: row-reverse;
            justify-content: left;
            column-gap: 10px;
        }
        header nav ul.open{
            display: flex;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                open: true
            }
        },
        methods: {
            changeTheme(){
                this.$store.commit('ToggleTheme')
            },
            changeLanguage(){
                this.$store.commit('ToggleLanguage')
                console.log(this.$store.state.language)
            }
        }
    }
</script>