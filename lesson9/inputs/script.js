let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn1 = document.getElementById("btn1");

input1.addEventListener("keydown", e => {
    console.log(e);
    if ((e.key < "0") || (e.key > "9")) {
        e.preventDefault();
    }
});

btn1.addEventListener("click", e => {
    input2.value = Number(input1.value) ** 2;
})