// var fruits = ['apple', 'pear', 'grape', 'pineaple', 29 ];
// console.log(fruits[ 0 ]);

// //var person(variable)
// var person = {
//     firstname: 'Ladei', //firstname(property): ladei(strings)
//     lastname: 'Brakemi',
//     middlename: 'Ebibrakumor',
//     gender: 'male',
//     age: 15, //age (number)
//     feminist: false, //feminist (boolean)
//     89: 'some data'
// }
// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person[89])


// var fullname = 'my full name is:' + person.firstname + ' ' + person.lastname;
// console.log(fullname);


// //Float
// var myFloat = 10.5;
// console.log(typeof(myFloat))

// console.log('-----------------------')
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// console.log('-----------------------')


// //Kinds of Loops: For loops, For/In loop, For/of loop and While loop
// //For loops
// for ( let i = 0; i < fruits.length; i++) { console.log(fruits [ i ])};

// console.log('-----------------------')


// //For in Loop
// for(let key in person){
//     console.log(person [key]);
// }
// console.log('-----------------------')

// for( let brad in fruits ) {console.log(fruits [brad])}; //console.log(brad) while give you the numerical numbers

// //For Of loop
// console.log('-----------------------')

// for(let val of fruits){ console.log(val)};



// console.log('-----------------------')
// //While Loop
// var i = 0
// while (i < fruits.length){ console.log(fruits [i]); i++;}

// console.log('--------------------------')
// var a = 0
// while (a < person.length){console.log(person [a]); a++;}


console.time('odd number calculator')
for(let i = 0; i < 10000; i++){
    if (i % 2 == 0){
        console.log(`${ i } - is even`)
    }
    else {
        console.log(`${ i } - is odd`)
    }
}
console.timeEnd('odd number calculator');