"use strict";
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*/
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* Первый вариант 
for (let i = 0; i < 2; i++) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
          rating = prompt('На сколько оцените его?', '');
    if (lastMovie != null && rating != null && lastMovie != '' && rating != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rating;
    } else {
        i--;
    }
}
*/

/* Второй вариант 
let lastMovie = "",
    rating = "",
    i = 0;
while (i < 2) {
    lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    rating = prompt('На сколько оцените его?', '');
    if (lastMovie != null && rating != null && lastMovie != '' && rating != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rating;
        i++;
    }
}
*/

/* Третий вариант
let lastMovie = "",
    rating = "",
    i = 0;
do {
    lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    rating = prompt('На сколько оцените его?', '');
    if (lastMovie != null && rating != null && lastMovie != '' && rating != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rating;
        i++;
    }
} while (i < 2);
*/

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

/* Ещё вариант проверки
(personalMovieDB.count < 10) ? console.log("Просмотрено довольно мало фильмов") : (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log("Вы классический зритель") : (personalMovieDB.count >= 30) ? console.log("Вы киноман") : console.log("Произошла ошибка");
*/

console.log(personalMovieDB);

