// У нас есть функция createSong, которая создаёт новый объект. Добавьте ей параметр releaseYear, который присвоит объекту свойство с годом выпуска песни.
/* Теперь добавьте объектам метод getSongInfo. Оно возвращает описание композиции в формате исполнитель — название (год релиза), например:
″Мумий Троль — Владивосток 2000 (2000)″.
Сделайте функцию getSongInfo общей для всех объектов, которые создаёт функция createSong. */
function like() {
    this.isLiked = !this.isLiked;
}

function createSong(title, artist, releaseYear) {
    const newSong = {
        title,
        artist,
        releaseYear,
        isLiked: false,
        like: like
    }

    return newSong;
}