function clickkk(button) {
    console.log("hi");
    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
    
    const token = '1543386607:AAFEvknNWJaL2Psno3GwuglS8QlHI9D_WNw'; // Замените на токен вашего бота
    const chatId = '787943933'; 

    const message = JSON.stringify(tg.initDataUnsafe);; // Замените на текст сообщения

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

    // Отправляем POST-запрос к Telegram API
    fetch(url, {
    method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Выводим ответ от Telegram API
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}