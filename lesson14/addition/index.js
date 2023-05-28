function intersection(...arr) {
    return arr.reduce((p, c) =>
        p.filter(e => c.includes(e)));
}



// function intersection() {
//     var result = [];
//     var lists;

//     if (arguments.length === 1) {
//         lists = arguments[0];
//     } else {
//         lists = arguments;
//     }

//     for (var i = 0; i < lists.length; i++) {
//         var currentList = lists[i];
//         for (var y = 0; y < currentList.length; y++) {
//             var currentValue = currentList[y];
//             if (result.indexOf(currentValue) === -1) {
//                 var existsInAll = true;
//                 for (var x = 0; x < lists.length; x++) {
//                     if (lists[x].indexOf(currentValue) === -1) {
//                         existsInAll = false;
//                         break;
//                     }
//                 }
//                 if (existsInAll) {
//                     result.push(currentValue);
//                 }
//             }
//         }
//     }
//     return result;
// }

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']


function findCommonElements(...arrays) {
    if (arrays.length < 2) return [];
    let base = arrays[0];
    let common = base.filter(element => {
        return arrays.every(array => {
            return array.includes(element);
        });
    });
    return common;
}