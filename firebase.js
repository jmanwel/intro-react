import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-intro-blog-ec6c2.firebaseapp.com",
  projectId: "react-intro-blog-ec6c2",
  storageBucket: "react-intro-blog-ec6c2.appspot.com",
  messagingSenderId: "623003065095",
  appId: "1:623003065095:web:1276b008aae30791b283a2"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;