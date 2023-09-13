function highlightButton(button) {
    // Отримуємо батьківський контейнер для кнопки
    const container = button.closest('.chooseContainer');
  
    // Отримуємо бокс выделения
    const highlightBox = container.querySelector('.highlightBox');
  
    // Розраховуємо позицію бокса відносно обраної кнопки
    const buttonArray = Array.from(container.querySelectorAll('.chooseItem'));
    const buttonIndex = buttonArray.indexOf(button);
    const buttonWidth = button.offsetWidth;
    let translateX = button.getBoundingClientRect().left - buttonArray[0].getBoundingClientRect().left;
        
    // Задаємо нове значення transform для анімації
    highlightBox.style.transformOrigin = buttonIndex === 0 ? 'left center' : 'right center'; // Определяем направление анимации
    highlightBox.style.transform = `translateX(${translateX}px) scaleX(1)`;
    
    // Знімаємо виділення з усіх кнопок в межах цього контейнера
    const buttonsInContainer = container.querySelectorAll('.chooseItem');
    buttonsInContainer.forEach(btn => btn.classList.remove('active'));
  
    // Встановлюємо виділення для обраної кнопки
    button.classList.add('active');

    setTimeout(function() {
        highlightBox.style.width = `${buttonWidth}px`;
    }, 100);
}



// Обработчик события изменения размера страницы
window.addEventListener('resize', function () {
    const activeButtons = document.querySelectorAll('.chooseItem.active');
    activeButtons.forEach(activeButton => {
        highlightButton(activeButton);
    });
});
  
// Вызов функции перерасчета CSS при загрузке страницы (если нужно)
window.addEventListener('load', function () {
    const activeButtons = document.querySelectorAll('.chooseItem.active');
    activeButtons.forEach(activeButton => {
        highlightButton(activeButton);
    });
});