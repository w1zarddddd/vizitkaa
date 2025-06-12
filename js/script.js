document.addEventListener('DOMContentLoaded', function() {
    // Автоматическое выделение активной страницы
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Закрытие мобильного меню после клика
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

    loadTheme(); // Load theme on page load

    const themeSwitcherButton = document.getElementById('theme-switcher');
    if (themeSwitcherButton) {
        themeSwitcherButton.addEventListener('click', toggleTheme);
    }
});

function setTheme(themeName) {
    document.body.className = ''; // Clear existing theme classes
    document.body.classList.add(themeName);
    localStorage.setItem('theme', themeName);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

function loadTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        setTheme('light-theme'); // Default to light-theme
    }
}