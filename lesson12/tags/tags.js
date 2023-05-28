const str = "Напишите функцию deleteTags(str), которая возвращает строку str, очищенную от всех тегов (<br>, <col> <embed>, <hr>, <img> и другие).";


function deleteTags(str) {
    return str.replace(/\<.+\>/g, "")
};

console.log(deleteTags(str));