<template>
  <div>

    <h1 class="title">Lista de cidades</h1>

    <div class="box" v-for="cidade in cidades" :key="cidade.id">
      {{cidade.nome}}
    </div>
   
    
  </div>
</template>
<script>
export default {
  
  async asyncData({ $axios }) {
    const cidades = await $axios.$get('/api/cidades/')
    return { cidades }
  }
  
}
</script>