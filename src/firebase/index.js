// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeXmXXaQGCgMY_i11YvHjXXeZTl5W7qJ4",
  authDomain: "my-project-cf86e.firebaseapp.com",
  projectId: "my-project-cf86e",
  storageBucket: "my-project-cf86e.appspot.com",
  messagingSenderId: "230275221815",
  appId: "1:230275221815:web:7925962075444ec62e32b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }

