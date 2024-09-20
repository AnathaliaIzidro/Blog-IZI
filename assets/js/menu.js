const menuToggle = document.getElementById('menu-toggle');
const menuOptions = document.getElementById('menu-options');

menuToggle.addEventListener('click', () => {
    if (menuOptions.classList.contains('hidden')) {
        menuOptions.classList.remove('hidden');
    } else {
        menuOptions.classList.add('hidden');
    }
});
