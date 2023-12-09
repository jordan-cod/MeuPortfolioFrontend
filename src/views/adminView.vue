<template>
    <div class="admin">
        <form class="login" @click.prevent>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div>
                <div>
                    <input type="text" name="email" required>
                    <span class="formLabel">Email</span>
                </div>
                <div>
                    <input type="password" name="password" required>
                    <span class="formLabel">Password</span>
                </div>
                <div>
                    <button class="login-btn">Login</button>
                </div>
            </div>
        </form>
        <div class="login">
            <img src="@/assets/login.svg" class="img-locker">
        </div>
    </div>
</template>

<style scoped>
    .admin{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: var(--gray);
        color: var(--blue);
        position: absolute;
        top: 0;
    }
    h1{
        margin-bottom: 30px;
    }
    .img-locker{
        width: 250px;
        position: relative;
        top: 0px;
        margin-bottom: 50px;
    }
    .login{
        width: 350px;
        height: 500px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: var(--white);
        border: 2px solid var(--orange);
    }
    .login:last-child{
        border-left: 0px;
        border-radius: 0px 5px 5px 0px;
        background-color: var(--orange);
    }
    .login:first-child{
        border-radius: 5px 0px 0px 5px;
    }
    .login div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .formLabel{
        position: relative;
        top: -27px;
        left: 15px;
        color: var(--blue);
        font-size: 14px;
        transition: 0.2s linear;
        align-self: flex-start;
        background: var(--white);
        padding: 0 10px;
    }
    input{
        width: 200px;
        padding: 10px 15px 10px 15px;
        outline: none;
        border: 2px solid var(--blue);
        border-radius: 5px;
        transition: border 0.2s linear;
        background: transparent;
        z-index: 5;
        color: var(--blue);
    }
    input:focus,
    input:valid{
        border: 2px solid var(--orange);
    }
    input:focus + .formLabel,
    input:valid + .formLabel{
        transform: translate(-13px, -20px) scale(0.88);
        color: var(--orange);
        z-index: 6;
    }
    .login-btn{
        width: 200px;
        height: 35px;
        background: var(--orange);
        border: 2px solid transparent;
        border-radius: 5px;
        font-weight: 700;
        color: white;
        font-size: 17px;
        cursor: pointer;
    }
</style>

<script>
    export default{
        props: {
            projects: Array
        },
        data() {
            return {}
        },
        methods: {},
        beforeMount(){}
    }
</script>