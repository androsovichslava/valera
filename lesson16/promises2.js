let array = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1000")
        }, 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2000")
        }, 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3000")
        }, 1000);
    })
];

function computePromisesSequentially() {
    const firstPromiseHandler = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);

        }, 1000);
    });
    array[0].then((value) => {
        console.log(`Первый промис вернул значение ${value}`);
        const secondPromiseHandler = new Promise((resolve, reject) => {
            // Вычисляем значение второго промиса и вызываем его обработчик
            setTimeout(() => {

                resolve(20);
            }, 2000);
        });
        secondPromiseHandler.then((value) => {
            console.log(`Второй промис вернул значение ${value}`);
        });
    });
}
computePromisesSequentially();