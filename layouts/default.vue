<template>
  <div class="container is-fluid">

    <b-navbar style="height: 80px">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img style="max-height: 70px"
                    :src="require('@/assets/logo.jpg')"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/cidades' }">
                Cidades
            </b-navbar-item>  
            <b-navbar-item tag="router-link" :to="{ path: '/filmes' }">
                Filmes
            </b-navbar-item>            
            <b-navbar-item tag="router-link" :to="{ path: '/imagens' }">
                Imagens
            </b-navbar-item>     
            <b-navbar-dropdown label="Layouts">
                <b-navbar-item tag="router-link" :to="{ path: '/layout-hero' }">
                    Hero
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/layout-section' }">
                    Section
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/layout-media-object' }">
                    Media Object
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/elements-block' }">
                    Blocos
                </b-navbar-item>                                
            </b-navbar-dropdown>                   
            <b-navbar-item tag="router-link" :to="{ path: '/tabs' }">
                Tabs
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/icones' }">
                Ícones
            </b-navbar-item> 
            <b-navbar-item tag="router-link" :to="{ path: '/form' }">
                Formulário
            </b-navbar-item>    
            <b-navbar-item tag="router-link" :to="{ path: '/contato' }">
                Contato
            </b-navbar-item>            
        </template>

        <template #end>
            <template v-if="currentUser">
                <b-navbar-item tag="div">
                    {{currentUser.username}}
                </b-navbar-item>  
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button" @click="sair()">
                            <strong>Sair</strong>
                        </a>
                    </div>
                </b-navbar-item>                                        
            </template>
            <template v-else>            
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary" @click="entrarCadastrar()">
                            <strong>Entrar/Cadastrar</strong>
                        </a>
                    </div>
                </b-navbar-item>
            </template>    
        </template>
    </b-navbar>

    <Nuxt/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Nuxt exemplo</strong> by Robson Luz. 
          <a target="_blank" href="https://fae.edu">FAE Centro Universitário</a>
        </p>
      </div>
    </footer>      
    
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },
    methods: {
      posLogin(response) {
        var self = this;
        console.log('resposta do login');
        console.log('logado', response);
        var data = response.data;
        if(data && data.id) {
          self.$store.dispatch('setCurrentUser', data);
          self.$axios.get('currentusuario/').then((responseUsuario) => {
            console.log('usuario logado');
            console.log(responseUsuario.data);
            //Coloque aqui a rota para quem já está cadastrado
            self.$router.push({ name: 'Home', force:true, reload:true });
          }).catch(function (error) {
            console.log('nao existe usuario cadastrado', error)
            //Coloque aqui a sua rota de cadastro
            self.$router.push({ path: 'cadastro', force:true, reload:true });
          })
        }
      },
      entrarCadastrar() {
        var provider = new GoogleAuthProvider();
        var self = this;
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            var pass = result.user.uid;
            var email = result.user.email;
            console.log(email, pass);
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', pass);
            
            self.$axios.post('login/', formData).then((response) => {
              self.posLogin(response);
            }).catch(function (error) {
              console.log('error', error);
              if (error.response && error.response.data) {
                var user = {
                  username: email,
                  password: pass
                };
                self.$axios.post('user-registration/', user).then((responseUr) => {
                  console.log(responseUr);
                  self.$axios.post('login/', formData).then((responseLogin) => {
                    self.posLogin(responseLogin);
                  });
                });
              }
              
            });
        }).catch((error) => {
            console.log(error);
        });
      },
      sair() {      
        var self = this;
        this.$axios.get('logout/').then((responseLogout) => {
          console.log('logout', responseLogout);
          self.$store.dispatch('setCurrentUser', null);
          self.$router.push({ name: 'Home', force:true, reload:true });
        });
      }
    }    
}
</script>