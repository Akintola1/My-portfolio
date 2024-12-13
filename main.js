let sideNav = document.querySelector('.menu');
document.querySelector('.side-nav-toggler').addEventListener('click', () => {
    sideNav.classList.add('active')
});
let clearMenu = document.querySelector('.cancel').addEventListener('click', () => {
    sideNav.classList.remove('active')
})