'use strict';

const btn = document.querySelector("button"),
      btns = document.querySelectorAll("button"), 
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};


btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

