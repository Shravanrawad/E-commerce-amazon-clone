import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1b_o92u41mVs5JOjXpb7P6HN68LL2sGY",
  authDomain: "ecommerce-98f00.firebaseapp.com",
  projectId: "ecommerce-98f00",
  storageBucket: "ecommerce-98f00.appspot.com",
  messagingSenderId: "992706204347",
  appId: "1:992706204347:web:10ecf211203bca2260cf9e",
  measurementId: "G-7E32F8E9SG"
};

export const app = initializeApp(firebaseConfig);
export default firebaseConfig
