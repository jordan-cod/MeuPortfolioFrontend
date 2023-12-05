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
                </ul>
            </nav>
        </div>
        <img src="../assets/HeaderSVG.svg" class="headerSVG">
    </header>
</template>

<style>
    header{
        width: 100%;
        height: 60px;
        background: #23272A;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header .headerSVG{
        position: absolute;
        top: 60px;
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
    }
    header nav a {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        margin-left: 30px;
        padding: 16px 0px;
    }
    header nav a:hover{
        color: #0015FF;
    }
    header nav a.router-link-exact-active {
    color: #0015FF;
    }
    header nav a.router-link-exact-active {
    border-bottom: 3px solid #0015FF;
    }
</style>