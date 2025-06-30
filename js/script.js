// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить интерактивность, например:
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Можно добавить загрузку новостей из JSON файла
    // fetch('news.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Обработка данных и отображение новостей
    //     });
    
    console.log('Сайт скаутов загружен!');
});