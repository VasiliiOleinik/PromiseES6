'use strict';

// OLD
// let funct1 = function(parem, funct2) {
//     funct2(function(paramm, funct3) {
//         funct3(function(param, funct4) {
//             funct4(function(param, funct5) {

//             })
//         })
//     })
// }


let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function () {
        // Если вероятность больше 50% то вызвать функцию хедшот иначе феил
        Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
    }, 3000);
}

function win() {
    console.log("Вы победили!");
    (drink == 1) ? buyBeer(): giveMoney();
}

function loose() {
    console.log("Вы проиграли!")
}

function buyBeer() {
    console.log("Вам купили пиво");
}

function giveMoney() {
    console.log("Вам дали деньги");
}


shoot({},
    function (mark) {
        console.log('Вы попали в цель');
        win(mark, buyBeer, giveMoney);
    },
    function (miss) {
        console.error(miss);
        loose();
    }
)