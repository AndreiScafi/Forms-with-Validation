/* Buttons */
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

/* End of Buttons */

/* Input Validation */

const form = document.querySelector('.form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const error = (input, message) => {
    const inputWrapper = input.parentElement;

    inputWrapper.className = "form-input-wrapper error";
    inputWrapper.querySelector('.message').textContent = message;
}

const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            // Error
            error(input, `${input.id} is required`);
        } else {
            //Success
        }
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submited');
    checkRequiredFields([username, email, password, password2]);
})

/* End of Input Validation */
