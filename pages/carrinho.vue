<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Carrinho de compras</p>
      </div>
    </section>

    <hr />

    <div v-for="pedido in pedidos" :key="pedido.id">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Filme</th>
            <th>Valor</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pedido.itens" :key="item.id">
            <td><img :src="item.filme.fotoCapa" style="width: 100px" /></td>
            <td>{{ item.filme.titulo }}</td>
            <td>{{ item.valor | f-currency }}</td>
            <td>
              <b-button type="is-secondary" @click="removerCarrinho(item)">Remover</b-button>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <strong>Valor total: {{ pedido.valorTotal | f-currency }}</strong>
      <hr />
      
      <b-button type="is-primary" @click="finalizarPedido(pedido)" >Finalizar compra</b-button>

      <hr />
    </div>

    <div v-if="!pedidos || !pedidos.length">
        <article class="message is-warning">
        <div class="message-body">
            Carrinho vazio
        </div>
        </article>
    </div>

    <hr>
    <b-button tag="router-link" :to="{ path: '/filmes' }" type="is-primary">Continuar comprando</b-button>    
    
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const pedidos = await $axios.$get("carrinho/");
    return { pedidos };
  },

  methods: {
    finalizarPedido(pedido) {
      var self = this;
      //Chama a api para finalizar o pedido
      this.$axios.post("pedido-finalizar/", pedido).then((response) => {
        self.$router.push({ path: "/pagamento", query: {pedido: pedido.id}, force: true });
      });        
    },
    removerCarrinho(item) {
      var self = this;
      //Chama a api remover o item
      this.$axios.delete(`item-pedido-create/${item.id}`, item).then(() => {
        self.$buefy.dialog.alert("Filme removido com sucesso!");
        self.$nuxt.refresh();
      });
    },
  },
};
</script>