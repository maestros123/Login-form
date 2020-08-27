"use strict";

const singInBtn = document.querySelector('#sign-in-btn'),
    singUpBtn = document.querySelector('#sign-up-btn'),
    container = document.querySelector('.container');

singUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

singInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});