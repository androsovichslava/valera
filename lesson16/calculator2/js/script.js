import { cars } from "./cars_module.js"

console.log(cars)
let brand_select = document.querySelector("#brand_select");
let model_select = document.querySelector("#model_select");
let year_select = document.querySelector("#year_select");
let generation_select = document.querySelector("#generation_select");
let modification_select = document.querySelector("#modification_select");
let body_select = document.querySelector("#body_select");
let equipment_select = document.querySelector("#equipment_select");
let mileage_input = document.querySelector("#mileage_input");

let brand_list = Object.keys(cars);

let option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Марка";
brand_select.appendChild(option);

// Установка заголовка селекта Моделей
option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Модель";
model_select.appendChild(option);
model_select.setAttribute("disabled", "disabled");

// Установка заголовка селекта Года выпуска
option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Год выпуска";
year_select.appendChild(option);
year_select.setAttribute("disabled", "disabled");

// Установка заголовка селекта Поколение
option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Поколение";
generation_select.appendChild(option);
generation_select.setAttribute("disabled", "disabled");

// Установка заголовка селекта Модификация
option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Модификация";
modification_select.appendChild(option);
modification_select.setAttribute("disabled", "disabled");

// Установка заголовка селекта Тип кузова
option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Тип кузова";
body_select.appendChild(option);
body_select.setAttribute("disabled", "disabled");

// Установка заголовка селекта Уровень оснащения
option = document.createElement("option");
option.setAttribute("value", "caption");
option.textContent = "Уровень оснащения";
equipment_select.appendChild(option);
equipment_select.setAttribute("disabled", "disabled");


brand_list.forEach(elem => {
    let option = document.createElement("option");
    option.setAttribute("value", elem);
    option.textContent = elem;
    brand_select.appendChild(option);
});

brand_select.addEventListener("change", function (event) {
    console.log(this.value)
    let opt_list = model_select.querySelectorAll("option");
    console.log(opt_list)
    opt_list.forEach(elem => {
        if (elem.value !== "caption") {
            elem.remove()
        }
    })

    if (cars[this.value]) {
        cars[this.value].forEach(elem => {
            let option = document.createElement("option");
            option.setAttribute("value", elem);
            option.textContent = elem;
            model_select.appendChild(option);
        })
        model_select.removeAttribute("disabled");
    } else {
        model_select.setAttribute("disabled", "disabled");
    }
})