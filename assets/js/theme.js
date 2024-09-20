const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggle.textContent = '🌞';
    }
});
