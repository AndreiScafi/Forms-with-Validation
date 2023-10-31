const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.signup-btn');
const signInBtn = document.querySelector('.signin-btn');

signUpBtn.addEventListener('click', () => {
    container.classList.add('change');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('change');
})