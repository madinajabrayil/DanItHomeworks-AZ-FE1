var burgerBtn = document.querySelector('.header-burger')
var menuNav = document.querySelector('.menu-nav')

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    menuNav.classList.toggle('active');
})