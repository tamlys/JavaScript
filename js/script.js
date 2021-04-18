'use strict';
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hi');

// setTimeout(logger, 2000);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });

// function logger() {
//     if (i == 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('hhhh');
//     id = setTimeout(log, 500);
// }, 500);

