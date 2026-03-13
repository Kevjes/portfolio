// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5CAKLdJhjLKYJRZD44t40E4rujoibnHo",
  authDomain: "kevin-portfolio-ff759.firebaseapp.com",
  projectId: "kevin-portfolio-ff759",
  storageBucket: "kevin-portfolio-ff759.firebasestorage.app",
  messagingSenderId: "375485286350",
  appId: "1:375485286350:web:1d05bfb69f7975e985cd9f",
  measurementId: "G-TX04ZCSQ3G"
};

// Initialize Firebase (avoid re-initialization)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Check authentication state
function checkAuth() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        if (!window.location.pathname.includes('login.html')) {
          window.location.href = 'login.html';
        }
        resolve(null);
      }
    });
  });
}

// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = 'login.html';
  }).catch((error) => {
    console.error('Error signing out:', error);
  });
}
