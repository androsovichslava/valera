function factorial(x) {
    if (x === 0 || x === 1) return 1;
    return x * factorial(x - 1);
}


function factorialGen() {
    let index = 0;
    return function (x) {
        x = index;
        index++;
        if (x === 0 || x === 1) return 1;
        return x * factorial(x - 1);
    }
}
let factoriaSeq = factorialGen();

console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());
console.log(factoriaSeq());