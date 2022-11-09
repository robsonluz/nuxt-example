<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">Meus pedidos</p>
            </div>
        </section>
        <section class="section">

            <b-collapse
                class="card"
                animation="slide"
                v-for="(pedido, index) of pedidos"
                :key="index"
                :open="isOpen == index"
                @open="isOpen = index"
                :aria-id="'contentIdForA11y5-' + index">
                <template #trigger="props">
                    <div
                        class="card-header"
                        role="button"
                        :aria-controls="'contentIdForA11y5-' + index"
                        :aria-expanded="props.open"
                    >
                        <p class="card-header-title">
                            Pedido nº {{pedido.id}}
                        </p>
                        <a class="card-header-icon">
                            <b-icon
                                :icon="props.open ? 'menu-down' : 'menu-up'">
                            </b-icon>
                        </a>
                    </div>
                </template>
                <div class="card-content">
                    <div class="content">
                        <table class="table is-hoverable is-fullwidth">
                            <thead>
                            <tr>
                                <th>Filme</th>
                                <th>Valor</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in pedido.itens" :key="item.id">
                                <td>{{ item.filme.titulo }}</td>
                                <td>{{ item.valor | f-currency }}</td>
                            </tr>
                            </tbody>
                        </table>                        
                        Valor total: {{pedido.valorTotal | f-currency}}<br>
                        <div v-if="pedido.pago">
                            Pagamento realizado
                        </div>
                        <div v-else>
                            <b-button tag="router-link" :to="{ path: '/pagamento', query: {pedido: pedido.id} }" type="is-primary">Pagamento</b-button>
                        </div>
                    </div>
                </div>
            </b-collapse>


        </section>
    </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const pedidos = await $axios.$get("pedidos/");
    return { pedidos };
  },
};
</script>