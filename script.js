const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.signup-btn');
const signInBtn = document.querySelector('.signin-btn');
const headingSpan2 = document.querySelector('.heading-span-2');

signUpBtn.addEventListener('click', () => {
    container.classList.add('change');
    headingSpan2.textContent = "Up";
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('change');
    headingSpan2.textContent = "In";
})
