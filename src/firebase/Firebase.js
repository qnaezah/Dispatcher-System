import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATxJvTnNraopz4DkCwe8sB6IB7T4oxcFQ",
    authDomain: "dispatcher-system.firebaseapp.com",
    databaseURL: "https://dispatcher-system-default-rtdb.firebaseio.com",
    projectId: "dispatcher-system",
    storageBucket: "dispatcher-system.appspot.com",
    messagingSenderId: "856750962514",
    appId: "1:856750962514:web:855050d0da89ecdc49ac8b",
    measurementId: "G-LC2K00767M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


