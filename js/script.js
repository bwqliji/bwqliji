document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰ Меню';
    document.querySelector('header .container').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });

    // Версия для слабовидящих
    document.getElementById('for-blind').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('high-contrast');
        
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrast', 'enabled');
            alert('Режим для слабовидящих включен');
        } else {
            localStorage.removeItem('highContrast');
            alert('Режим для слабовидящих выключен');
        }
    });

    // Восстановление состояния высокой контрастности
    if (localStorage.getItem('highContrast') === 'enabled') {
        document.body.classList.add('high-contrast');
    }

    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Открытие PDF в новой вкладке
    document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

