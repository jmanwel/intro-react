import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfEEH4uRNj1PwT7MOhOZi4eAKp8_vgUAs",
  authDomain: "react-intro-blog-ec6c2.firebaseapp.com",
  projectId: "react-intro-blog-ec6c2",
  storageBucket: "react-intro-blog-ec6c2.appspot.com",
  messagingSenderId: "623003065095",
  appId: "1:623003065095:web:1276b008aae30791b283a2"
};

const db = initializeApp(firebaseConfig);
export default db;