export default async ({ $axios, redirect, store }) => {
    console.log('verificando login');


    if (process.server) {
        try {
            const currentUser = await $axios.$get('currentusuario')
            console.log('current user');
            console.log(currentUser);
            if ( currentUser != null && currentUser.id != null) {
                store.commit('currentUser', currentUser)
            }
    
        }catch(e) {
            console.log('usuário não logado');
            //console.log(e);
            store.commit('currentUser', null)
        }

        //var logged = await $authenticationService.checkLoggedIn();
        //if (!logged) {
        //    return redirect(`/login`);
        //}
    }
}