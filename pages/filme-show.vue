<template>
  <div>

    <h1 class="title">Filme</h1>

    <div class="box" v-if="filme">
      Título: {{filme.titulo}} <br> 
      Descrição: {{filme.descricao}} <br>
      Sinopse: {{filme.sinopse}} <br>
  
    </div>
    
  </div>
</template>
<script>
export default {
  
  async asyncData({ $axios, query }) {
    const filme = await $axios.$get('filmes/' + query.id + '/')
    return { filme }
  }
  
}
</script>