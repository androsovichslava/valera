import { square } from "./maths.js"
import fs from "fs"
import _ from 'underscore';

let arr = [1, 2, 3, 4, 5, 6, 7];


console.log(square(66))
console.log(_.chunk(arr, 4))
let text = fs.readFileSync("read.me", "utf-8");
let num = text.match(/\d+/g)
console.log(num.reduce((a, e) => Number(a) + Number(e), 0))


let obj = {
    'file1.txt': 'text1',
    'file2.txt': 'text2',
    'file3.txt': 'text3',
}

// for (let key in obj) {
//     fs.writeFileSync(key, obj[key]);
// }

// try {
//     let text2 = fs.readFileSync("read2.me", "utf-8")
// } catch (err) {
//     console.log("ОШИБКА ЧТЕНИЯ ФАЙЛА \n\n\n", err)
// }
fs.readFile("read2.me", "utf-8", function (err, data) {
    if (err) {
        console.log("ОШИБКА ЧТЕНИЯ ФАЙЛА");
        console.log(err)
    }
    if (data) {
        console.log(data)
    }
})
console.log("-------------------------------------------------")