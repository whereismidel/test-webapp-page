function clickkk(button) {
    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

    const token = '1543386607:AAFEvknNWJaL2Psno3GwuglS8QlHI9D_WNw'; // Замените на токен вашего бота
    const chatId = '787943933'; 

    const message = JSON.stringify(tg);; // Замените на текст сообщения

    sendLongMessage(token, chatId, message);

    function sendLongMessage(token, chatId, message){
        const maxLength = 4096; // Максимальная длина сообщения в Telegram

        if (message.length <= maxLength) {
            sendMessage(token, chatId, message);
        } else {
            // Разбиваем длинное сообщение на части и отправляем их поочередно
            const chunks = message.match(new RegExp(`.{1,${maxLength}}`, 'g'));
            chunks.forEach(chunk => {
                sendMessage(token, chatId, chunk);
            });
        }
    }

    function sendMessage(token, chatId, message){
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
}