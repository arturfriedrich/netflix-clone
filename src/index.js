import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from "./global-styles"
import { App } from './app';
import { FirebaseContext } from './context/firebase'
import { initializeApp } from "firebase/app"

const config = {
    apiKey: "AIzaSyBJ7mTpUYwAexaiGA5ipf34qUJK9cBeBbo",
    authDomain: "netflix-clone-65dfc.firebaseapp.com",
    projectId: "netflix-clone-65dfc",
    storageBucket: "netflix-clone-65dfc.appspot.com",
    messagingSenderId: "667932565119",
    appId: "1:667932565119:web:e140a0a3b97e5c2285694a"
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
