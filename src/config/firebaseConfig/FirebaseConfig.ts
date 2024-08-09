import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBkOEpOqzsdpnr7jGoPqktUG6tMdWFjBb0",
  authDomain: "hackathon-a4e65.firebaseapp.com",
  databaseURL: "https://hackathon-a4e65-default-rtdb.firebaseio.com",
  projectId: "hackathon-a4e65",
  storageBucket: "hackathon-a4e65.appspot.com",
  messagingSenderId: "392831917752",
  appId: "1:392831917752:web:548b00af0053dddf705e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;