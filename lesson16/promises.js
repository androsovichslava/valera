
function computePromisesSequentially() {
    // Создаем промис-обработчик для первого промиса
    const firstPromiseHandler = new Promise((resolve, reject) => {
        // Вычисляем значение промиса и вызываем обработчик
        setTimeout(() => {
            resolve(10);

        }, 1000);
    });
    // Вызываем обработчик первого промиса, чтобы он начал вычисления
    firstPromiseHandler.then((value) => {
        console.log(`Первый промис вернул значение ${value}`);
        // Создаем новый промис для второго промиса
        const secondPromiseHandler = new Promise((resolve, reject) => {
            // Вычисляем значение второго промиса и вызываем его обработчик
            setTimeout(() => {

                resolve(20);
            }, 2000);
        });
        // Вызываем обработчик второго промиса для продолжения вычислений
        secondPromiseHandler.then((value) => {
            console.log(`Второй промис вернул значение ${value}`);
        });
    });
}
// Вызываем функцию для вычисления промисов
computePromisesSequentially();
