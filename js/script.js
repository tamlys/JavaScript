'use strict';
// Tabs
// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });
//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(index = 0) {
//         tabsContent[index].classList.add('show', 'fade');
//         tabsContent[index].classList.remove('hide');
//         tabs[index].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });
    
//     // Timer

//     const deadLine = '2021-05-17';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//               days = Math.floor(t / (1000 * 60 * 60 * 24)),
//               hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//               minutes = Math.floor((t / 1000 / 60) % 60),
//               seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000);
        
//         updateClock();

//         function updateClock() {
//             const t = getTimeRemaining(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadLine);

//     // Modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modal = document.querySelector('.modal'),
//           modalCloseBtn = document.querySelector('[data-close]');

//     function closeModal() {
//         // modal.classList.add('show');
//         // modal.classList.remove('hide');
//         modal.classList.toggle('show');
//         document.body.style.overflow = '';
//     }

//     function openModal() {
//         modal.classList.toggle('show');
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerId);
//     }

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', openModal);
//     });

//     modalCloseBtn.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === "Escape" && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     const modalTimerId = setTimeout(openModal, 5000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.body.clientHeight >= 
//             document.documentElement.scrollHeight) {
//                 openModal();
//                 window.removeEventListener('scroll', showModalByScroll);
//         }
//     }

//     window.addEventListener('scroll', showModalByScroll);
// });

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this)
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    };
}

let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));

const btn = document.querySelector('button');

btn.style.width = '100px';
btn.style.height = '50px';
btn.style.display = 'block';
btn.style.margin = '0 auto';

btn.addEventListener('click', function() {
// btn.addEventListener('click', (e) => {
    this.style.background = 'red';
    // e.target.style.background = 'red';
    console.log(this);
    // Обращается к элементу на котором происходит событие - button.
    // Если будем использовать стрелочную функцию - window
});

const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

object.sayNumber(); // Стрелочная функция не имеет контекста 
                //- будет указывать на контекст родителя

const dbl = a => a * 2;

console.log(dbl(4));

/*
 1) Обычная функция: this = window, но если use strict - undefined
 2) Контекст у методов объекта - сам объект
 3) this в конструкторах и классах, это новый экземпляр объекта
 4) Ручная привязка this: call, apply, bind
*/

