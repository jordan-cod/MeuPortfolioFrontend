<template>
    <div class="modal">
        <form @click.prevent>
            <div class="circle-menu">
                <div :class="[{ circle_active: fieldset.card_1}, 'circle']"></div>
                <div :class="[{ circle_active: fieldset.card_2}, 'circle']"></div>
                <div :class="[{ circle_active: fieldset.card_3}, 'circle']"></div>
            </div>
            <fieldset class="project-section project-details" v-show="fieldset.card_2 !== true && fieldset.card_3 !== true">
                <legend>Detalhes do projeto:</legend>
                <div>
                    <input type="text" v-model="newProject.title" required>
                    <span class="formLabel">Título</span>
                </div>

                <div>
                    <input type="text" v-model="newProject.descript_ptbr" required>
                    <span class="formLabel">Descrição PT-BR</span>
                </div>

                <div>
                    <input type="text" v-model="newProject.descript" required>
                    <span class="formLabel">Descrição Us-En</span>
                </div>

                <select class="project-select" v-model="newProject.category">
                    <option disabled selected>Categoria</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="FrontEnd, BackEnd">FrontEnd, BackEnd</option>
                </select>

                <div>
                    <input type="text" required v-model="newProject.tecnologies">
                    <span class="formLabel">Tecnologias</span>
                </div>
                <button class="project-save" @click="nextCard">Próximo</button>
            </fieldset>

            <fieldset class="project-section project-images" v-show="fieldset.card_1 !== true && fieldset.card_3 !== true">
                <legend>Imagens do projeto:</legend>
                <div>
                    <input type="text" required v-model="newProject.img">
                    <span class="formLabel">Imagem do cartão</span>
                </div>

                <div>
                    <input type="text" required v-model="newProject.laptop_img">
                    <span class="formLabel">Imagem laptop</span>
                </div>

                <div>
                    <input type="text" required v-model="newProject.mobile_img">
                    <span class="formLabel">Imagem mobile</span>
                </div>

                <div>
                    <p>Para gerar as imagens acesse o site:</p>
                    <a href="https://websitemockupgenerator.com/" target="_blank">Mockup Generator</a>
                </div>
                <button class="project-save" @click="nextCard">Próximo</button>
            </fieldset>

            <fieldset class="project-section project-urls" v-show="fieldset.card_1 !== true && fieldset.card_2 !== true">
                <legend>Urls do projeto:</legend>
                <div>
                    <input type="text" required v-model="newProject.url">
                    <span class="formLabel">Projeto URL</span>
                </div>

                <div>
                    <input type="text" required v-model="newProject.live_url">
                    <span class="formLabel">Live Url</span>
                </div>

                <div>
                    <input type="text" required v-model="newProject.download">
                    <span class="formLabel">Download Url</span>
                </div>
                <button class="project-save" @click="InsertProject">Salvar</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>
        .modal{
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.199);
            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 11;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    .modal form{
        background: var(--white);
        height: 400px;
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 10px;
        row-gap: 5px;
        padding: 15px 0px;
    }
    .project-select{
        margin-bottom: 15px;
    }
    .project-section{
        border: 2px solid var(--gray);
        border-radius: 10px;
        width: 450px;
        padding: 5px 20px;
        display: flex;
        flex-direction: column;
    }
    .project-save{
        background: var(--blue);
        color: var(--white);
        font-weight: 500;
        font-size: 22px;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        cursor: pointer;
        border: 2px solid var(--blue);
        align-self: center
    }
    .project-save:hover{
        border: 2px solid var(--orange);
    }
    .formLabel{
        position: relative;
        top: -27px;
        left: 5px;
        color: var(--blue);
        font-size: 14px;
        transition: 0.2s linear;
        background: var(--white);
        padding: 0px 5px;
        width: 130px;
    }
    .circle-menu{
        display: flex;
        column-gap: 5px;
        position: relative;
        top: -8px;
    }
    .circle{
        width: 15px;
        height: 15px;
        background: var(--gray);
        border-radius: 50%;
    }
    .circle_active{
        background: var(--blue);
        width: 16px;
        height: 16px;
    }
    fieldset div{
        display: flex;
        flex-direction: column;
    }
    input{
        width: 100%;
        padding: 8px 15px;
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
        transform: translate(0px, -15px) scale(0.88);
        color: var(--orange);
        z-index: 6;
    }
    @media screen and (max-width: 660px){
        .modal form{
        width: 90%;
        }
        .project-section{
        width: 90%;
        }
        }
</style>

<script>
    export default{
        data() {
            return {
                fieldset: {
                    card_1: true,
                    card_2: false,
                    card_3: false
                },
                newProject: {
                    img: '',
                    title: '',
                    descript: '',
                    descript_ptbr: '',
                    category: '',
                    tecnologies: '',
                    live_url: '',
                    url: '',
                    download: '',
                    laptop_img: '',
                    mobile_img: ''
                }
            }
        },
        methods: {
            isTokenValid(expiration) {
                if (!expiration) {
                    return false
                }

                const expirationDate = new Date(expiration)
                const currentDate = new Date()

                if (currentDate < expirationDate) {
                    return true
                } else {
                    return false
                }
            },
            nextCard(){
                if (this.fieldset.card_1 == true) {
                    this.fieldset.card_1 = false
                    this.fieldset.card_2 = true
                    return null
                }
                if (this.fieldset.card_2 == true) {
                    this.fieldset.card_2 = false
                    this.fieldset.card_3 = true
                    return null
                }
            },
            async InsertProject(){
                const isTokenValid = this.isTokenValid(localStorage.getItem('token_expiration'))
                if (isTokenValid == true) {
                    const body = {
                    img: this.newProject.img,
                    title: this.newProject.title,
                    descript: this.newProject.descript,
                    descript_ptbr: this.newProject.descript_ptbr,
                    category: this.newProject.category,
                    tecnologies: this.newProject.tecnologies,
                    live_url: this.newProject.live_url,
                    url: this.newProject.url,
                    download: this.newProject.download,
                    laptop_img: this.newProject.laptop_img,
                    mobile_img: this.newProject.mobile_img
                }
                const response = await this.$store.dispatch('InsertProject', body)
                    if (response.success === true) {
                        
                        this.newProject.img= '',
                        this.newProject.title= '',
                        this.newProject.descript= '',
                        this.newProject.descript_ptbr= '',
                        this.newProject.category= '',
                        this.newProject.tecnologies= '',
                        this.newProject.live_url= '',
                        this.newProject.url= '',
                        this.newProject.download= '',
                        this.newProject.laptop_img= '',
                        this.newProject.mobile_img= ''

                        this.fieldset.card_1 = true
                        this.fieldset.card_2 = false
                        this.fieldset.card_3 = false


                        this.$store.state.isProjectOpen = false
                        this.$toast.success(response.message);
                    }else{
                        this.$toast.error(response.message);
                    }
                }else {
                    localStorage.removeItem('accessToken');
                    this.$router.push('/admin');
                }
            }
        }
    }
</script>