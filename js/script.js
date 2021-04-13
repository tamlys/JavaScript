/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector(".promo__genre");
const poster = document.querySelector(".promo__bg");
const filmList = document.querySelector(".promo__interactive-list");

//1
promo.forEach(item => {
    item.remove();
});
//2
genre.textContent = "Драма";
//3
poster.style.background = "url('../img/bg.jpg')";
//4
filmList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((item, index) => {
    filmList.innerHTML += `
    <li class="promo__interactive-item">${++index}. ${item}
        <div class="delete"></div>
    </li>`;
});





