const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.signup-btn');
const signInBtn = document.querySelector('.signin-btn');
const headingSpan2 = document.querySelector('.heading-span-2');

signUpBtn.addEventListener('click', () => {
    container.classList.add('change');
    setTimeout(() => {
        headingSpan2.textContent = "Up";
    }, 200);

});

signInBtn.addEventListener('click', () => {
    container.classList.remove('change');
    setTimeout(() => {
        headingSpan2.textContent = "In";
    }, 200);

})
