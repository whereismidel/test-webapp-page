function highlightButton(button) {
    // Отримуємо батьківський контейнер для кнопки
    const container = button.closest('.chooseContainer');

    // Знімаємо виділення з усіх кнопок в межах цього контейнера
    const buttonsInContainer = container.querySelectorAll('.chooseItem');
    buttonsInContainer.forEach(btn => btn.classList.remove('active'));

    // Встановлюємо виділення для обраної кнопки
    button.classList.add('active');
}