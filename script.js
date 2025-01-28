<!-- script.js -->
// Dark mode toggle functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.style.backgroundColor = body.style.backgroundColor === 'rgb(18, 18, 18)' ? '#ffffff' : '#121212';
    body.style.color = body.style.color === 'rgb(255, 255, 255)' ? '#333333' : '#ffffff';
    darkModeToggle.textContent = body.style.backgroundColor === 'rgb(18, 18, 18)' ? '☀️' : '🌙';
});
