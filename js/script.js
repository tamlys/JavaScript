/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promo = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector(".promo__genre"),
          poster = document.querySelector(".promo__bg"),
          filmList = document.querySelector(".promo__interactive-list"),
          addBtn = document.querySelector(".add button"),
          addInput = document.querySelector(".adding__input"),
          addCheckbox = document.querySelector('.add [type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.background = "url('../img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function showListFilm(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((item, index) => {
            if (item.length > 21) {
                item = item.substring(0, 21) + "...";
            }
            parent.innerHTML += `
            <li class="promo__interactive-item">${++index}. ${item}
                <div class="delete"></div>
            </li>`;
        });
    

        addBtn.addEventListener('click', event => {
            event.preventDefault();
            let checkbox = addCheckbox.checked,
            film = addInput.value;
        
            if (film) {
                if (checkbox) {
                    console.log("Добавляем любимый фильм");
                }
                movieDB.movies.push(film);
                addInput.value = "";
                sortArr(movieDB.movies);
                showListFilm(movieDB.movies, filmList);
            }  
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                showListFilm(movieDB.movies, filmList);
            });
        });
    }

    deleteAdv(promo);
    makeChanges();
    showListFilm(movieDB.movies, filmList);
});

