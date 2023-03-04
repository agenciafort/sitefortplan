const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    const btnmobile1 = document.getElementById('btn-mobile');
    nav.classList.toggle('active');
    btnmobile1.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);