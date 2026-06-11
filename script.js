document.addEventListener('DOMContentLoaded', () => {
    
    // Логика переключения вкладок (Tabs) в разделе "Помощь студентам"
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabItems = document.querySelectorAll('.tab-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс со всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Удаляем активный класс со всех блоков контента
            tabItems.forEach(item => item.classList.remove('active'));

            // Добавляем класс текущей кнопке
            button.classList.add('active');
            
            // Находим нужный контент по data-атрибуту и показываем его
            const tabId = button.getAttribute('data-tab');
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // Плавная анимация при скролле к разделам (для старых браузеров)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
