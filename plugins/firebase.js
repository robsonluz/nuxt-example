import { initializeApp } from "firebase/app";

class FirebaseConnection {
	initialize() {
        console.log('INICIANDO FIREBASE');
        initializeApp({
            apiKey: "AIzaSyDmaBBq7nVXrQbmkQaqVDapMBZoJ3niuVg",
            authDomain: "ndi-teste.firebaseapp.com",
            projectId: "ndi-teste",
            storageBucket: "ndi-teste.appspot.com",
            messagingSenderId: "327911452595",
            appId: "1:327911452595:web:7d6feaa3e05b52f5d0a5c6"
        });
	}
}

// Registro dos services
export default ({ }, inject) => {
    let firebaseConnection = new FirebaseConnection();
    firebaseConnection.initialize();
	inject('firebaseConnetion', firebaseConnection);
}