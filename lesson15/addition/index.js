function handleNumber(n) {
    let arrNum = n.toString().split('');
    let sum = arrNum.reduce((a, e) => a + Number(e), 0)
    console.log(arrNum.join(', '));
    console.log(`- цифр в числе: ${arrNum.length}`);
    console.log(`- сумма: ${sum}`);
    let reverse = arrNum.reverse().join('');
    console.log(`- обратный порядок: ${reverse}`);


}

handleNumber(12345678909876);