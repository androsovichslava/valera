// при клике по кнопке скрипт запустит код
button.onclick = function () {
    // напишите условие при котором будет переключаться класс white у кнопки (класс переключает цвет бэкграунда)
    button.classList.toggle("white");
    console.log(button.classList)
}