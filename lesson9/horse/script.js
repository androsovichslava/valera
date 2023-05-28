let remove_button_horse = document.querySelector(".remove-button-horse");
let close_div_horse = remove_button_horse.closest("div");

remove_button_horse.addEventListener('click', () => {
    close_div_horse.remove();
})
let remove_button_donkey = document.querySelector(".remove-button-donkey");
let close_div_donkey = remove_button_donkey.closest("div");

remove_button_donkey.addEventListener('click', () => {
    close_div_donkey.remove();
})
let remove_button_cat = document.querySelector(".remove-button-cat");
let close_div_cat = remove_button_cat.closest("div");

remove_button_cat.addEventListener('click', () => {
    close_div_cat.remove();
})