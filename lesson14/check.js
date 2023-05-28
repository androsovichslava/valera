// В примере с покупкой автомобиля мы использовали условные конструкции, перепишите пример используя логические операторы. Исходный код:

function checkCar(distance, owner, jacked, cost) {
    // if (distance <= 10000) {
    //     if (owner === 1) {
    //         if (jacked === false) {
    //             if (cost <= 5000000) {
    //                 return true;
    //             } else return false;
    //         } else return false;
    //     }
    //     else if (owner === 2) {
    //         if (jacked === false) {
    //             if (cost <= 500000) {
    //                 return true;
    //             } else return false;
    //         } else return false
    //     } else return false;
    // } else return false;

    return distance <= 10000 && jacked === false && ((owner === 1 && cost <= 5000000) || (owner === 2 && cost <= 500000));
}

console.log(checkCar(5000, 1, false, 100000));
console.log(checkCar(50000, 1, false, 100000));
console.log(checkCar(5000, 1, true, 300000));
console.log(checkCar(5000, 1, false, 1000000));
console.log(checkCar(5000, 2, false, 100000));