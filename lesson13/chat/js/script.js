const fio = document.getElementById("fio");
const avatar = document.getElementById("avatar");
const comment_edit = document.getElementById("comment_edit");
const btn1 = document.getElementById("btn1");
let comments_container = document.getElementById("comments_container");
let checkbox1 = document.querySelector("#checkbox1");
// let comment_date = document.querySelector(".comment_date");
console.log(checkbox1);
const avatar_array = [
    "https://uprostim.com/wp-content/uploads/2021/03/image068-83.jpg",
    "https://pixelbox.ru/wp-content/uploads/2022/08/avatars-viber-pixelbox.ru-33.jpg",
    "https://sanada.club/uploads/posts/2021-11/1637728889_10-sanada-club-p-krutie-avatarki-11.jpg",
    "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
    "https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg"
];
function randomAvatar(arr) {
    let random_index = Math.floor(Math.random() * arr.length);
    return arr[random_index];
}

function formatDate() {
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    let months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"

    ]
    let now = new Date();
    return `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} время ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}
console.log(formatDate())
btn1.addEventListener("click", e => {
    let clear_fio = fio.value.split(" ").filter(elem => elem !== "").map(elem => {
        let lowerCase = elem.toLowerCase().trim();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);

    }).join(" ");
    let single_comment = document.createElement("div");
    single_comment.classList.add("single_comment");
    comments_container.appendChild(single_comment);
    let avatar_fio_box = document.createElement("div");
    avatar_fio_box.classList.add("avatar_fio_box");
    single_comment.appendChild(avatar_fio_box);
    let img = document.createElement("img");
    if (avatar.value) {
        img.src = avatar.value;
    } else {
        img.src = randomAvatar(avatar_array);
    }
    avatar_fio_box.appendChild(img);

    let title3 = document.createElement("p");
    title3.classList.add("title3");
    if (checkbox1.checked && clear_fio.length > 0) {
        console.log(checkbox1.checked);
        title3.innerHTML = clear_fio;
    } else if (checkbox1.checked && clear_fio.length === 0) {
        console.log(checkbox1.checked);
        title3.innerHTML = "Anonimous";
    } else {
        title3.innerHTML = "Username";
    }

    avatar_fio_box.appendChild(title3);
    let comment_date = document.createElement("p");
    comment_date.classList.add("comment_date");
    comment_date.innerHTML = formatDate();
    avatar_fio_box.appendChild(comment_date);

    let message_text = document.createElement("p");
    message_text.classList.add("message_text");
    message_text.innerHTML = checkSpam(comment_edit.value);
    single_comment.appendChild(message_text);




    let hr = document.createElement("hr");
    single_comment.appendChild(hr);

});

function checkSpam(str) {
    return str.replace("viagra", "***").replace("XXX", "***");
}