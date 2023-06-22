import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHZA_J3z5Ed8a7_PXiDwhlRhY2N9d_M6c",
  authDomain: "ifichas.firebaseapp.com",
  projectId: "ifichas",
  storageBucket: "ifichas.appspot.com",
  messagingSenderId: "582032557674",
  appId: "1:582032557674:web:d329918e1ea88ad2332c13",
  measurementId: "G-Q29VQ35X14"
};

export const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);