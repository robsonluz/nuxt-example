<template>
  <div>
    <h1 class="title">Lista de filmes</h1>

    <div class="box" v-for="filme in filmes" :key="filme.id">
      Título:
      <router-link :to="{ path: '/filme-show', query: { id: filme.id } }">
        {{ filme.titulo }}
      </router-link>
      <br />
      Descrição: {{ filme.descricao }} <br />
      Sinopse: {{ filme.sinopse }} <br />

      <div v-for="ator in filme.atores" :key="ator.id">
        {{ ator.nome }}
      </div>

      <img :src="filme.fotoCapa" style="width: 200px" />

      <br> 

      <b-button
        v-if="currentUser"
        type="is-primary"
        @click="adicionarCarrinho(filme)"
        >Adicionar ao carrinho</b-button
      >

      <hr>
      <h1>Atores</h1>
      <div class="box" v-for="ator in atores" :key="ator.id">
          <router-link :to="{ path: '/', query: { ator: ator.id } }">
            {{ator.nome}}
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, query }) {
    var q = "?";
    
    if (query.ator) {
      q += "ator=" + query.ator;
    }
    
    const filmes = await $axios.$get("filmes/" + q);
    const atores = await $axios.$get("atores/");
    
    return { filmes, atores };
  },

  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },

  methods: {
    adicionarCarrinho(filme) {
      var self = this;

      var item = {
        filme: filme.id,
      };

      //Chama a api para adicionar ao carrinho
      this.$axios.post("item-pedido-create/", item).then((response) => {
        console.log(response);
        //Mostra a mensagem de sucesso
        self.$buefy.dialog.alert("Filme adicionado com sucesso!");
        //Navega para o MeusPedidos
        self.$router.push({ path: "/carrinho", force: true });
      });
    },
  },
};
</script>