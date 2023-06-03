import { square } from "./maths.js"
import fs from "fs"
import { setTimeout } from "timers/promises";
import _ from 'underscore';

// let arr = [1, 2, 3, 4, 5, 6, 7];


// console.log(square(66))
// console.log(_.chunk(arr, 4))
// let text = fs.readFileSync("read.me", "utf-8");
// let num = text.match(/\d+/g)
// console.log(num.reduce((a, e) => Number(a) + Number(e), 0))


// let obj = {
//     'file1.txt': 'text1',
//     'file2.txt': 'text2',
//     'file3.txt': 'text3',
// }

// // for (let key in obj) {
// //     fs.writeFileSync(key, obj[key]);
// // }

// // try {
// //     let text2 = fs.readFileSync("read2.me", "utf-8")
// // } catch (err) {
// //     console.log("ОШИБКА ЧТЕНИЯ ФАЙЛА \n\n\n", err)
// // }
// fs.readFile("read2.me", "utf-8", function (err, data) {
//     if (err) {
//         console.log("ОШИБКА ЧТЕНИЯ ФАЙЛА");
//         console.log(err)
//     }
//     if (data) {
//         console.log(data)
//     }
// })
// console.log("-------------------------------------------------")

// fs.readFile("file1.txt", "utf8", function (err, data1) {
//     if (!err) {
//         console.log("прочитан первый", data1);

//         fs.readFile("file2.txt", "utf8", function (err, data2) {
//             if (!err) {
//                 console.log("прочитан второй", data2)
//                 fs.readFile("file3.txt", "utf8", function (err, data3) {
//                     console.log("прочитан третий", data3)
//                 });
//             } else {
//                 console.log("file2 error")
//             }
//         })
//     } else {
//         console.log("file1 error")
//     }
// })


// fs.promises.readFile("read.me", "utf8").then(data => {

//     console.log(data.split("").reduce((a, e) => Number(a) + Number(e), 0));
// }).catch(err => console.log("ОШИБКА ЧТЕНИЯ", err))

// let names = ['file12.txt', 'file2.txt', 'file3.txt'];
// let files = [];

// for (let name of names) {
//     files.push(fs.promises.readFile(name, "utf8"));
// }

// Promise.all(files).then(data => {
//     fs.promises.writeFile("res.txt", data.join("-"))
//     console.log(data)
// }).catch(err => {
//     console.log("ОШИБКА ЧТЕНИЯ \n", err)
// })

async function func() {
    try {
        let names = ['file1.txt', 'file2.txt', 'file3.txt'];
        let data = [];

        for (let name of names) {
            console.log("for");
            data.push(await fs.promises.readFile(name, "utf8"));

        }
        console.log("after for")
        await fs.promises.writeFile('res.txt', data.join(""));
    } catch (err) {
        console.log("error");
    }
}

func();

import __dirname from './__dirname.js';
console.log("Path  ", __dirname);

import { constants } from 'fs';
console.log(constants)