document.body.addEventListener('click', function (e) {
    e.stopPropagation()
})
const menu = document.getElementById('menu');
function hiddenMenuNavbar() {
    menu.style.visibility = 'hidden';
}
function showMenuNavbar() {
    menu.style.visibility = 'visible';
}