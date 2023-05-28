let add_task_btn = document.querySelector("#add_task_btn");
let task_input = document.querySelector("#task_input");
let clear_list_btn = document.querySelector(".clear_list_btn");
let task_list_title = document.querySelector(".task_list_title");
let task_list_block = document.querySelector(".task_list_block");
let notasks = document.querySelector(".notasks");

console.log(add_task_btn, task_input, clear_list_btn, task_list_title, task_list_block)

add_task_btn.addEventListener('click', addTask);
clear_list_btn.addEventListener('click', clearTask);

function addTask() {
    let textInput = task_input.value.trim();


    if (textInput) {
        let oneTask = document.createElement("div");
        oneTask.className = "one-task";

        let titleTask = document.createElement("p");
        titleTask.className = "title-task"
        titleTask.innerHTML = textInput;


        let label = document.createElement("label");
        label.className = "label-checkbox";

        let real_checkbox = document.createElement("input");
        real_checkbox.className = "real-checkbox";
        real_checkbox.type = "checkbox";
        real_checkbox.addEventListener("change", e => {
            if (real_checkbox.checked) {
                label.style.backgroundColor = '#a9e18f';
                label.style.border = 0;
                const before = window.getComputedStyle(custom_checkbox, "::before");

                // Изменяем -webkit-text-stroke псевдоэлемента на 0
                custom_checkbox.style.setProperty("--before-stroke", "0");
            } else {
                label.style.backgroundColor = 'white';
                label.style.border = 'solid black 1px';
                const before = window.getComputedStyle(custom_checkbox, "::before");

                // Изменяем -webkit-text-stroke псевдоэлемента на 0
                custom_checkbox.style.setProperty("--before-stroke", "1.1px #000000");
            }
        });



        let custom_checkbox = document.createElement("span");
        custom_checkbox.className = "custom-checkbox";
        // label.appendChild(real_checkbox);
        label.appendChild(custom_checkbox);
        label.appendChild(real_checkbox);
        oneTask.appendChild(label);

        oneTask.appendChild(titleTask);
        // oneTask.appendChild(checkbox_container);
        task_list_block.appendChild(oneTask);


        task_input.value = "";
        notasks.style.display = "none";
        // Активируем кнопку очистки списка
        clear_list_btn.disabled = false;


    }
}


function clearTask() {
    while (task_list_block.firstChild) {
        task_list_block.removeChild(task_list_block.firstChild);
    }
    notasks.style.display = "block";
    clear_list_btn.disabled = true;
    console.log(notasks.style);
}