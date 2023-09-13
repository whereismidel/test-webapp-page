
//initialize the "save" button
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "Save Preferences";
mainButton.enable();
mainButton.show();
// and make it send the "foods" object (as JSON string) back to the backend
mainButton.onClick(function(){
    console.log("hi");
    window.Telegram.WebApp.sendData("Hi");
})