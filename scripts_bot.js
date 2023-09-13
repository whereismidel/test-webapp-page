let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно

let btn = document.getElementById("btn"); //получаем кнопку активировать/деактивировать

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	tg.sendData("some string that we need to send"); 
});