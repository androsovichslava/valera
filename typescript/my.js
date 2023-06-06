// let arr: number[] = [1, 2, 44, 66]
// let arr2: Array<string> = ['ssss', 'rrr'];
// console.log(arr2);
// for (let i: number = 0; i <= 10; i++) {
//     console.log(i);
// }
// let obj = { a: 1, b: 2, c: 3 };
// obj.a = 4;
// for (let key in obj) {
//     console.log(`${key}  :  ${obj[key]}`)
// }
// let res: number = 0;
// for (let i: number = 0; i < 100; i++) {
//     res += i;
// }
// console.log(res);
// let i: number = 0;
// let res: number = 0;
// while (i < 100) {
//     res += i;
//     i++;
// }
// console.log(res);
// let arr: Array<number> = [1, 2, 3, 4, 5];
// let res: number = 0;
// for (let elem of arr) {
//     res += elem;
// }
// console.log(res);
// let obj = { a: 1, b: 2, c: 3 };
// let res: number = 0;
// for (let key in obj) {
//     let elem = obj[key];
//     res += elem;
// }
// console.log(res);
// function sum(a: number, b: number): number {
//     return a + b;
// }
// console.log(sum(2, 4))
function sum(arr) {
    var res = 0;
    console.log(arr);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        res += num;
    }
    return res;
}
console.log(sum([1, 5, 9, 7]));
function testing(test) {
    console.log(test);
}
testing("slava");
function func(elem, text) {
    elem.textContent = text;
}
var user = ["slava", 53];
console.log(user);
