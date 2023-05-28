let img_array = [
    "./img/1.jpeg",
    "./img/2.jpg",
    "./img/3.jpeg"
];
let index = 0;

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let img = document.querySelector("img");
img.src = img_array[index];

btn1.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = img_array.length - 1;
    }
    img.src = img_array[index];
});

btn2.addEventListener("click", () => {
    if (index === img_array.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    img.src = img_array[index];
});

console.log(btn1, btn2, img);