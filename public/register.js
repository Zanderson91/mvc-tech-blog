const signupFormHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#name-register').value.trim();
const email = document.querySelector('#email-register').value.trim();
const password = document.querySelector('#password-register').value.trim();