/**
 * What are Functions?
 * 
 * Functions are blocks of code designed to perform a specific task
 */

/**
 * Syntax?
 * 
 * function function_name(){}
 */


// function writeToconsole() {
//     console.log('this is a message to the console.')
// }

// writeToconsole();



// function sub(num1, num2){
//     console.log (num1 - num3)
// }

// function divide(num1, num2){
//     return num1 / num2
// }


//console.log(num1);

// add(1, 2, 3, 4);

// add(5, 10, 15, 20);

// sub(10, 2, 3, 4);

// console.log (divide(20, 2));

// let ans = divide(10, 5);

// console.log (ans);

// var div1 = divide(10, 2);
// var div2 = divide(20, 5);

// //add (div1, div2);

// add (divide(10, 2), divide(20, 5));


// function add(num1, num2){
//     return num1 + num2
// }


// const add = function(num1, num2) {
//     return parseInt(num1) + parseInt(num2)
// }

// const adding = (num1, num2) =>  
// return parseInt(num1) + parseInt(num2)
// }

const ADD = (num1, num2) => parseInt(num1) + parseInt(num2);

var button = document.getElementById('calculate');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result')

button.addEventListener('click', () => {
    var res = ADD(parseInt(num1.value), parseInt(num2.value));
    result.innerText = 'The answer is:' + res;
})


function key() {
    console.log('My name is Don Daddys')
}
key();

const best = function () {
    console.log('My name is Don')
}
best();

const Brad = () => { console.log ('My name is Dickson')}
Brad();

const rad = () => console.log ('My name is Don Dickson')
rad();