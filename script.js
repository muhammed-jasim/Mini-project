let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.nav-items');
// let navdiv = document.querySelector('.navbars');


menu.addEventListener('click',function(){
    menu.classList.toggle('bi-x')
    navbar.classList.toggle('navbar-active')

})
navbar.addEventListener('click',function(){
    menu.classList.remove('bi-x')
    navbar.classList.remove('navbar-active')

})