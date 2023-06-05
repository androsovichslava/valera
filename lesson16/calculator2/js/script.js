import { cars, years, generation, modification, body, equipment } from "./cars_module.js"

// console.log(cars)
let brand_select = document.querySelector("#brand_select");
let model_select = document.querySelector("#model_select");
let year_select = document.querySelector("#year_select");
let generation_select = document.querySelector("#generation_select");
let modification_select = document.querySelector("#modification_select");
let body_select = document.querySelector("#body_select");
let equipment_select = document.querySelector("#equipment_select");
let mileage_input = document.querySelector("#mileage_input");
let calculate = document.querySelector(".calculate");


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
    let opt_list = model_select.querySelectorAll("option");
    // console.log(opt_list)
    opt_list.forEach(elem => {
        if (elem.value !== "caption") {
            elem.remove()
        }
    })

    let year_opt_list = year_select.querySelectorAll("option");
    // console.log(year_opt_list)
    year_opt_list.forEach(elem => {
        if (elem.value !== "caption") {
            elem.remove()
        }
    })
    let generation_opt_list = generation_select.querySelectorAll("option");
    generation_opt_list.forEach(elem => {
        if (elem.value !== "caption") {
            elem.remove()
        }
    })

    let modification_opt_list = modification_select.querySelectorAll("option");
    modification_opt_list.forEach(elem => {
        if (elem.value !== "caption") {
            elem.remove()
        }
    })
    let body_opt_list = body_select.querySelectorAll("option");
    body_opt_list.forEach(elem => {
        if (elem.value !== "caption") {
            elem.remove()
        }
    })
    let equipment_opt_list = equipment_select.querySelectorAll("option");
    equipment_opt_list.forEach(elem => {
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

        years.forEach(year => {
            let option = document.createElement("option");
            option.setAttribute("value", year);
            option.textContent = year;
            year_select.appendChild(option);
        })
        year_select.removeAttribute("disabled");

        generation.forEach(gen => {
            // console.log(gen)
            let option = document.createElement("option");
            option.setAttribute("value", gen);
            option.textContent = gen;
            generation_select.appendChild(option);
            // console.log(generation_select)
        })
        generation_select.removeAttribute("disabled");

        modification.forEach(gen => {
            // console.log(gen)
            let option = document.createElement("option");
            option.setAttribute("value", gen);
            option.textContent = gen;
            modification_select.appendChild(option);
        })
        modification_select.removeAttribute("disabled");

        body.forEach(body => {
            let option = document.createElement("option");
            option.setAttribute("value", body);
            option.textContent = body;
            body_select.appendChild(option);
        })
        body_select.removeAttribute("disabled");

        equipment.forEach(equipment => {
            let option = document.createElement("option");
            option.setAttribute("value", equipment);
            option.textContent = equipment;
            equipment_select.appendChild(option);
        })
        equipment_select.removeAttribute("disabled");

    } else {
        model_select.setAttribute("disabled", "disabled");
        year_select.setAttribute("disabled", "disabled");
        generation_select.setAttribute("disabled", "disabled");
        body_select.setAttribute("disabled", "disabled");
        modification_select.setAttribute("disabled", "disabled");
        equipment_select.setAttribute("disabled", "disabled");
    }
})

calculate.addEventListener("click", function (event) {
    let brand_k, model_k, year_k, generation_k, modification_k, body_k, equipment_k, mileage_k;
    let price;
    switch (brand_select.value) {
        case "Acura": brand_k = 900000;
            break;
        case "Alfa Romeo": brand_k = 500000;
            break;
        default: brand_k = 0;
    }
    switch (model_select.value) {
        case "MDX": model_k = 0.9;
            break;
        case "RDX": model_k = 0.8;
            break;
        case "Brera": model_k = 0.7;
            break;
        case "Mito": model_k = 0.75;
            break;
        case "DB11": model_k = 0.85;
            break;
        case "DB9": model_k = 0.95;
            break;
        default: model_k = 1;
    }
    if (Number(year_select.value)) {
        year_k = Number(year_select.value) / 2023
        console.log(year_k)
    } else {
        year_k = 1;
    }
    switch (generation_select.value) {
        case "Первое": generation_k = 0.8;
            break;
        case "Второе": generation_k = 0.9;
            break;
        case "Третье": generation_k = 1;
            break;
        default: generation_k = 1;


    }

    switch (modification_select.value) {
        case "1": modification_k = 0.8;
            break;
        case "2": modification_k = 0.9;
            break;
        case "3": modification_k = 1;
            break;
        default: modification_k = 1;
    }

    switch (body_select.value) {
        case "Седан": body_k = 0.8;
            break;
        case "Минивен": body_k = 1;
            break;
        default: body_k = 1;
    }

    switch (equipment_select.value) {
        case "Седан": equipment_k = 0.8;
            break;
        case "Минивен": equipment_k = 1;
            break;
        default: equipment_k = 1;
    }
    let mile_age = Number(mileage_input.value);
    if (mile_age < 100000) {
        mileage_k = 1;
    } else if (mile_age >= 100000 && mile_age <= 500000) {
        mileage_k = 0.8;
    } else {
        mileage_k = 0.6;
    }

    price = Math.floor(brand_k * model_k * year_k * generation_k * modification_k * body_k * equipment_k * mileage_k);
    if (price) {
        alert('Ориентировочная стоимость автомобиля\n' + price + '  рублей');
    } else {
        alert('Выберите марку авто');
    }
})