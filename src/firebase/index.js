import firebase from 'firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBASNeqei8cBwRWrStAI3HUL2dyQE7Lzs",
    authDomain: "compu-shopping.firebaseapp.com",
    projectId: "compu-shopping",
    storageBucket: "compu-shopping.appspot.com",
    messagingSenderId: "713932760000",
    appId: "1:713932760000:web:21426f5e80d4d195571e25"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}