<template>
  <div class="container is-max-desktop">
    <section class="section">
      <section class="notification is-primary is-medium">
        <div class="hero-body">
          <p class="title">Login</p>
        </div>
      </section>

      <section class="box">
        <b-field label="E-mail">
          <b-input type="email"></b-input>
        </b-field>

        <b-field label="Senha">
          <b-input type="password"> </b-input>
        </b-field>

        <b-field>
            <b-button tag="router-link" :to="{path:'/'}" type="is-primary">Entrar</b-button>
        </b-field>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  layout: "clean",
};
</script>