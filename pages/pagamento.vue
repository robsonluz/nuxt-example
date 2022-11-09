<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">Pedido nº {{pedido.id}}</p>
            </div>
        </section>
        <section class="section" v-if="pedido.finalizado">
            <strong>Valor total: </strong> {{pedido.valorTotal | f-currency}}
            <hr>
            <a :href="pedido.urlPagamento" class="button is-primary" v-if="pedido.urlPagamento">Realizar pagamento</a>
        </section>
        <section class="section" v-else>
            <article class="message is-danger">
                <div class="message-body">
                    Este pedido não está finalizado
                </div>
            </article>
        </section>        
        
    </div>
</template>
<script>
export default {
  async asyncData({ $axios, query }) {
    const pedido = await $axios.$get("pedidos/" + query.pedido + "/");
    return { pedido };
  }
};
</script>