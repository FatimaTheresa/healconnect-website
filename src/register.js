
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRINc0ICYWEg2kJGPOmXwbXjsoJBoyFJg",
    authDomain: "healconnectdb.firebaseapp.com",
    projectId: "healconnectdb",
    storageBucket: "healconnectdb.firebasestorage.app",
    messagingSenderId: "523550594292",
    appId: "1:523550594292:web:77c85d87a046cfc844baa1",
    measurementId: "G-7DH2SHXF7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//inputs
const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const dob = document.getElementById('dob').value;
const gender = document.getElementById('gender').value;
const address = document.getElementById('address').value;
const file = document.getElementById('file').value;

const submit = document.getElementById('submit').value;
submit.addEventListener("click", function (event) {
    event.preventDefault()
    alert(5)
})

