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

function sum(arr: Array<number>) {
    let res: number = 0;
    console.log(arr)
    for (let num of arr) {
        res += num;
    }

    return res;
}
console.log(sum([1, 5, 9, 7]))

function testing(test: string): void {
    console.log(test)
}
testing("slava");

function func(elem: HTMLElement, text: string): void {
    elem.textContent = text;
}
let user: [string, number] = ["slava", 53];
let date: [number, number] = [2023, 6];
date[1] = 44;

console.log(user);