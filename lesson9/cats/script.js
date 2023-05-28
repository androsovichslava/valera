// Найди карточку Стёпы в коде и запиши пол Стёпы в переменную 
// Измени пол Стёпы на мужской используя метод textContent

let card_title_list = document.querySelectorAll(".card__title");
let stepa_card;
for (let card of card_title_list) {
    if (card.innerHTML === "Стёпа") {
        stepa_card = card;
        // console.log(stepa_card);
        break;
    }
}

let card_text = stepa_card.nextElementSibling; // находим следующий элемент-сосед
card_text.firstElementChild.textContent = "мальчик";
// console.log(card_text.firstElementChild);