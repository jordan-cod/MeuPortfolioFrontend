<template>
    <div class="container">
        <form class="login" @click.prevent>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <div>
                    <input type="text" name="email" v-model='data.email' required>
                    <span class="formLabel">Email</span>
                </div>
                <div>
                    <input type="text" name="username" v-model='data.username' required>
                    <span class="formLabel">Username</span>
                </div>
                <div>
                    <input type="password" name="password" v-model='data.password' required>
                    <span class="formLabel">Password</span>
                </div>
                <div>
                    <button class="login-btn" @click="login">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: var(--gray);
        color: var(--blue);
        position: absolute;
        top: 0;
        z-index: 10;
    }
    a{
        color: var(--blue);
    }
    h1{
        margin-bottom: 30px;
    }
    .backHome{
        font-size: 25px;
        position: relative;
        top: -120px;
        left: -150px;
        cursor: pointer;
    }
    .login{
        width: 350px;
        height: 400px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: var(--white);
        border: 2px solid var(--orange);
        border-radius: 5px;
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
    @media screen and (max-width: 325px){
        .login{
            width: 310px;
        }
    }
</style>

<script>
import axios from 'axios'

    export default{
        data() {
            return {
                data: {
                    email: '',
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            isTokenValid(expiration) {
                if (!expiration) {
                    return false;
                }
                const expirationDate = new Date(expiration);
                const currentDate = new Date();
                return currentDate < expirationDate;
            },
            async login() {
                try {
                    const response = await axios.post('/login', this.data)
                    localStorage.setItem('username', response.data.user);
                    localStorage.setItem('accessToken', response.data.access_token);
                    localStorage.setItem('token_expiration', response.data.expiration)

                    this.isTokenValid(response.data.expiration)
                    this.$router.push('/admin/dashboard');
                    this.$toast.info(`Logado com sucesso!`);
                } catch (error) {
                    console.error('Erro ao fazer login:', error);
                    this.$toast.error(error);
                }
            }
        }
    }
</script>