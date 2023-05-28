const fio = document.getElementById("fio");
const avatar = document.getElementById("avatar");
const comment_edit = document.getElementById("comment_edit");
const btn1 = document.getElementById("btn1");
let comments_container = document.getElementById("comments_container");

console.log(fio, avatar, comment_edit, btn1);
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
    img.src = avatar.value;
    avatar_fio_box.appendChild(img);

    let title3 = document.createElement("p");
    title3.classList.add("title3");
    title3.innerHTML = clear_fio;
    avatar_fio_box.appendChild(title3);

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