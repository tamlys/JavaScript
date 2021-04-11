"use strict";

const options = {
    name : "Square",
    width: 1024,
    height: 1024,
    colors : {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("Test Function");
    }
};

// console.log(options.name);
// console.log("Background color:", options.colors.border);

// delete options.colors.background;
// console.log("Background color:", options.colors.background);

// options.colors.background = "green";
// console.log("New Background color:", options.colors.background);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} is ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Property ${key} is ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// options.makeTest();

const {border, background} = options.colors;
console.log(background);