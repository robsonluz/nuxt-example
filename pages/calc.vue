<template>
    <div>
        <h1 class="title">
            {{mensagem}}
        </h1>
        <b-button type="is-primary" @click="teste()">
            Clique aqui
        </b-button>

        <b-field label="Mensagem">
            <b-input v-model="mensagem"></b-input>
        </b-field>        

    </div>
</template>

<script>
export default {
    data() {
        return {
            mensagem: "Olá mundo",
            numero1: 0,
            numero2: 0,
            resultado: 0
        }
    },
    methods: {
        teste() {
            this.mensagem = "Nova mensagem";
        },
    }
}
</script>