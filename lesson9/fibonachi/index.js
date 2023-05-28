function fib(x) {
    if (x === 0 || x === 1) return x;
    return fib(x - 1) + fib(x - 2);
}


console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

function fibSeqCount() {
    let index = 0;
    return function () {
        let x = index;
        index++;
        if (x === 0 || x === 1) return x;
        return fib(x - 1) + fib(x - 2);
    }
}
let fibSeq = fibSeqCount();

