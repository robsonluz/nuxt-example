<template>
  <div>
    
    <!-- carousel com imagens -->
    <b-carousel>
      <b-carousel-item>
        <b-image class="image" src="https://picsum.photos/id/431/1230/300"></b-image>
      </b-carousel-item>
      <b-carousel-item>
        <b-image class="image" src="https://picsum.photos/id/432/1230/300"></b-image>
      </b-carousel-item>      
      <b-carousel-item>
        <b-image class="image" src="https://picsum.photos/id/433/1230/300"></b-image>
      </b-carousel-item>            
    </b-carousel>

    <div class="columns mt-5">
      <div class="column is-6">
        <article class="notification is-primary">
          <p class="title">Título</p>
          <p class="subtitle">Subtítulo</p>
          <router-link :to="{ path: '/imagens' }">Exemplo de link</router-link>
        </article>
      </div>
      <div class="column is-6">
        <article class="notification is-info">
          <p class="title">Título</p>
          <p class="subtitle">Subtítulo</p>
          <router-link :to="{ path: '/imagens' }">Exemplo de link</router-link>
        </article>
      </div>      
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <article class="notification is-primary has-text-centered">
          <p class="title">Título</p>
          <p class="subtitle">Subtítulo</p>
        </article>
      </div>
      <div class="column is-4">
        <article class="notification is-info has-text-centered">
          <p class="title">Título</p>
          <p class="subtitle">Subtítulo</p>
        </article>
      </div>
      <div class="column is-4">
        <article class="notification is-primary has-text-centered">
          <p class="title">Título</p>
          <p class="subtitle">Subtítulo</p>
        </article>
      </div>            
    </div>    



  </div>
</template>
