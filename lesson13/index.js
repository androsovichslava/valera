// ***** Задание под звездочкой**

// Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 

// - если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"` ;
// - в противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`;
// - в противном случае, если меньше часа, вывести `"m мин. назад"`;
// - в противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.

let tempDate = new Date('2023-05-16 11:12');
function formatDate(dateInput) {
    let now = new Date();
    let diff = now.getTime() - dateInput.getTime();

    if (diff < 1000) return "прямо сейчас";
    if (diff <= 60000) return `${Math.round(diff / 1000)} сек. назад`;
    if (diff > 60000 && diff < 3600000) return `${Math.round(diff / 60000)} мин. назад`;

    let date = ("0" + dateInput.getDate()).slice(-2); // добавить ноль перед днем и обрезать до двух цифр
    let month = ("0" + (dateInput.getMonth() + 1)).slice(-2); // добавить ноль перед месяцем и обрезать до двух цифр
    let year = dateInput.getFullYear().toString().substr(-2); // обрезать год до двух цифр
    let hours = ("0" + dateInput.getHours()).slice(-2); // добавить ноль перед часами и обрезать до двух цифр
    let minutes = ("0" + dateInput.getMinutes()).slice(-2); // добавить ноль перед минутами и обрезать до двух цифр
    let formattedDate = date + "." + month + "." + year + " " + hours + ":" + minutes; // соединить все компоненты в строку

    return formattedDate;

}

console.log(formatDate(tempDate));