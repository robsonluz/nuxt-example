<template>
  <div>

    <h1 class="title">Lista de filmes</h1>

    <div class="box" v-for="filme in filmes" :key="filme.id">
      Título: {{filme.titulo}} <br> 
      Descrição: {{filme.descricao}} <br>
      Sinopse: {{filme.sinopse}} <br>

      <div v-for="ator in filme.atores" :key="ator.id">
        {{ator.nome}}        
      </div>
      
    </div>
   
    
  </div>
</template>
<script>
export default {
  
  async asyncData({ $axios }) {
    const filmes = await $axios.$get('/api/filmes/')
    return { filmes }
  }
  
}
</script>