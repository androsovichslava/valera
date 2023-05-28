let prices = document.querySelectorAll(".good_price");
let total = document.querySelector(".total");
let kupon_btn = document.getElementById("kupon_btn");

let array_prices = [...prices];
let total_sum = array_prices.reduce((a, e) => a + Number(e.innerHTML), 0);
total.innerHTML = "Итого:  " + total_sum.toFixed(2);

kupon_btn.addEventListener('click', () => {
    total.innerHTML = "Итого:  " + (total_sum * 0.8).toFixed(2);
})