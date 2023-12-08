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

    </header>
</template>

<style scoped>
    header{
        width: 100%;
        height: 60px;
        background: var(--blue);
        color: rgb(0, 0, 0);
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
        color: var(--orange);
    }
    header nav a.router-link-exact-active {
    color: var(--orange);
    border-bottom: 3px solid var(--orange);
    }

</style>