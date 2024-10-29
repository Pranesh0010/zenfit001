// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjGIuez_1ea5gt7o-XgWkcxyM0fqr79pE",
  authDomain: "zenfit-3284a.firebaseapp.com",
  projectId: "zenfit-3284a",
  storageBucket: "zenfit-3284a.appspot.com",
  messagingSenderId: "999536980774",
  appId: "1:999536980774:web:8153297a729d5f282bc7e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register (Sign Up) Function
document.getElementById("Register").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#register .input-field[placeholder='Email']").value;
    const password = document.querySelector("#register .input-field[placeholder='Password']").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registration successful!");
            // Clear form fields
            document.querySelector("#register .input-field[placeholder='Email']").value = "";
            document.querySelector("#register .input-field[placeholder='Password']").value = "";
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});

// Login (Sign In) Function
document.getElementById("Sign In").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#login .input-field[placeholder='Username or Email']").value;
    const password = document.querySelector("#login .input-field[placeholder='Password']").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            // Redirect to a new page or perform any other action
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});
