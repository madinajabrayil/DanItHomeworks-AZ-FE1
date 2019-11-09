let passwordInput = document.querySelector('.password');
let confirmPassInput = document.querySelector('.confirmPassword');

let visibleIcon = document.querySelector('.fa-eye');
let hiddenIcon = document.querySelector('.fa-eye-slash');

let submitButton = document.querySelector('.btn')
let errorSpan = document.querySelector('span')

visibleIcon.addEventListener('click', () => {

    if (passwordInput.type == "text") {
        passwordInput.type = "password";
        visibleIcon.classList.add("fa-eye-slash");
        visibleIcon.classList.remove("fa-eye");

    } else {
        passwordInput.type = "text";
        visibleIcon.classList.remove("fa-eye-slash");
        visibleIcon.classList.add("fa-eye");

    }


})


hiddenIcon.addEventListener('click', () => {

    if (confirmPassInput.type == "text") {
        confirmPassInput.type = "password"
        hiddenIcon.classList.add("fa-eye-slash");
        hiddenIcon.classList.remove("fa-eye");

    } else {
        confirmPassInput.type = "text";
        hiddenIcon.classList.remove("fa-eye-slash");
        hiddenIcon.classList.add("fa-eye");

    }

})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (passwordInput.value == confirmPassInput.value) {
        alert('You are welcome');
    } else {
    
        errorSpan.innerText = 'You need to enter the identical values';
    }
})






