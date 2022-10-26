<template>
  <div>

    <h1 class="title">Lista de filmes</h1>

    <div class="box" v-for="filme in filmes" :key="filme.id">
      Título: 
      <router-link :to="{ path: '/filme-show', query: {id: filme.id} }">
        {{filme.titulo}} 
      </router-link>
      <br> 
      Descrição: {{filme.descricao}} <br>
      Sinopse: {{filme.sinopse}} <br>
  
      <div v-for="ator in filme.atores" :key="ator.id">
        {{ator.nome}}        
      </div>

      <img :src="filme.fotoCapa" >
      
      
    </div>
   
    
  </div>
</template>
<script>
export default {
  
  async asyncData({ $axios }) {
    const filmes = await $axios.$get('filmes/')
    return { filmes }
  }
  
}
</script>