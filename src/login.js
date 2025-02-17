'use strict';

import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import loginImage from '/src/assets/loginpic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';

// This is temporary so I can login to homepage without username or password
document.getElementById('loginButton').addEventListener('click', function () {
  window.location.href = 'homepage.html';
});

// I had to do this so I don't have FOUC
document.querySelector('img').src = loginImage;
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.display = 'block';
});
