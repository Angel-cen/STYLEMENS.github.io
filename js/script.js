const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full');
});

closeMenu.addEventListener('click', () => {
    menu.classList.add('-translate-x-full');
});



loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

closeLogin.addEventListener('click', () => {
    loginModal.classList.add('hidden');
});



document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('-translate-x-full');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('menu').classList.add('-translate-x-full');
});
