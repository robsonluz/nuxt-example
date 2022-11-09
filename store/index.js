export const state = () => ({
  currentUser: {}
})

export const getters = {
  getCurrentUser(state) {
    return state.currentUser
  }
}

export const mutations = {
  currentUser(state, value) {
    state.currentUser = value
  },

  setCurrentUser(state, value) {
    state.currentUser = value
  },  

  cleanCurrentUser(state) {
    state.currentUser = null;
  },
}

export const actions = {
  cleanCurrentUser({ commit }) {
    commit('cleanCurrentUser');
  },
  setCurrentUser({ commit }, user) {
    commit('setCurrentUser', user);
  },
  /*
  async fetchCurrentUser({ state }) {
      console.log('chegou aqui');
      const currentUser = await $axios.$get('currentusuario')
      state.currentUser = currentUser;
      return currentUser;
  },    
  async nuxtServerInit({ commit }, { $axios }) {
      console.log('buscando currentUser');
      try {
          const currentUser = await $axios.$get('currentusuario')
          console.log('current user');
          console.log(currentUser);
          if ( currentUser != null && currentUser.id != null) {
              commit('currentUser', currentUser)
          }

      }catch(e) {
         console.log(e);
      }
      
  }
  */
}
