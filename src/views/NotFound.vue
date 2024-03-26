<template>
    <div class="container">
        <h1>4<i class="fas fa-ban"></i>4
        </h1>
        <h2>Page not found.</h2>
        <p>The page you are looking for might have been removed <br> had its name changed or is temporaily unavaible.</p>
        <RouterLink to="/" class="link_to_home">GO TO HOMEPAGE</RouterLink>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0px;
        z-index: -1;
    }
    h1{
        font-size: 93px;
        color: var(--blue);
        margin-bottom: 10px;
    }
    i{
        font-size: 80px;
    }
    h2{
        font-size: 25px;
    }
    p{
        margin: 20px 0px;
        text-align: center;
    }
    a{
        background: var(--blue);
        color: white;
        font-weight: 500;
        padding: 20px 50px;
        border-radius: 30px;
    }
</style>