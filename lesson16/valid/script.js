const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

formInput.addEventListener('input', function (evt) {
    // выведите validity в консоль. Напоминаем, что этот элемент хранится в свойстве объекта evt — evt.target.
    console.log(evt.target.validity)
});

