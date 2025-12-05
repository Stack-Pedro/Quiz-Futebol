// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Suas credenciais (que você me mandou)
const firebaseConfig = {
  apiKey: "AIzaSyCd3_9F77yzI0Er1yymESIdOp8JHdWJxq0",
  authDomain: "quiz-futebol-7e31b.firebaseapp.com",
  databaseURL: "https://quiz-futebol-7e31b-default-rtdb.firebaseio.com",
  projectId: "quiz-futebol-7e31b",
  storageBucket: "quiz-futebol-7e31b.firebasestorage.app",
  messagingSenderId: "382152200924",
  appId: "1:382152200924:web:949a42075c224f94801a19",
  measurementId: "G-S15EFQPKV6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Cria o banco de dados Firestore
const db = getFirestore(app);

// Exporta pra usar em outros arquivos
export { db, collection, addDoc, getDocs, deleteDoc, doc };