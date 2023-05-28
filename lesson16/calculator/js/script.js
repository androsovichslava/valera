let price = document.querySelector(".price");
let auction_select = document.querySelector("#auction_select");
let service_type_radio = document.querySelectorAll(".service_type_radio");
let fuel_type_radio = document.querySelectorAll(".fuel_type_radio");
let engine_volume_input = document.querySelector("#engine_volume_input");
let engine_power_input = document.querySelector("#engine_power_input");
let calculate = document.querySelector(".calculate");
calculate.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(price, auction_select, service_type_radio, fuel_type_radio, engine_volume_input, engine_power_input, calculate)

})

