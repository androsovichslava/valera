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
option.setAttribute("value", "default");
option.textContent = "Модель";

// Добавляем option в select
brand_select.appendChild(option);
brand_list.forEach(elem => {
    let option = document.createElement("option");
    option.setAttribute("value", elem);
    option.textContent = elem;

    // Добавляем option в select
    brand_select.appendChild(option);
});
brand_select.addEventListener("change", function (event) {
    let option = document.createElement("option");
    option.setAttribute("value", "default");
    option.textContent = "Модель";

    // Добавляем option в select
    model_select.appendChild(option);
    if (this.value) {
        cars[this.value].forEach(elem => {
            let option = document.createElement("option");
            option.setAttribute("value", elem);
            option.textContent = elem;

            // Добавляем option в select
            model_select.appendChild(option);
        })
    }
})