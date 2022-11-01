let text = 'My name is sir brad, who are you'

console.log(text.length);

let brad = 'My name is sir brad, who are you'
console.log(brad.slice(11, 19));

console.log(brad.slice(-11))

console.log(brad.substring(0, 10))

console.log(brad.substring(-11));

let rad = 'My name is Sir Brad'
console.log(rad.substr(11, ));


//Replace Strings
let key = 'Don is a Web Developer and he\'s a Web Developer'

key1 = key.replace('Don', 'Brad');
key2 = key1.replace(/web developer/g, 'software engineer')//g stand for Global whihc changes the entire functions you want to replace

console.log(key2);

//UPPER & Lower case strings

let text1 = 'Hello World'
console.log(text1.toUpperCase());

let text2 = 'Hello World'
console.log(text2.toLowerCase());


//SPLIT STRINGS

example = 'Abraham, Beauty, Cynthia, Doris, Esther, Faith';
newArray = example.split(',');
console.log(`${newArray[0]} and ${newArray[5]}`)


//NUMBER METHODS
// NUMBER TO STRINGS
 let result = 80;
 result.toString();
 console.log (typeof result.toString());


 //EXPONENTIAL NUMBER
let score = 80.1234567;
console.log(score.toExponential(4))

// THE NUMBER FIXED METHODS
let sco = 80.1234567;
console.log(sco.toFixed(2))

//THE NUMBER PRECISION METHOD
let ore = 80.1234567;
console.log(ore.toPrecision(6))

//CONVERTING VARIABLES TO NUMBERS
let sc = '80.1234567';
console.log(Number(sc))

let s = '80.1234567';
console.log(parseInt(s))

let c = '80.1234567';
console.log(parseFloat(c))


//NUMBER METHOD USED FOR DATE

currentDate = new Date('2022-10-26')
console.log(Number(currentDate))


//ARRAY METHODS

fruits = ['Apple', 'Banana', 'Carriot']
poppedFruit = fruits.pop()
console.log(poppedFruit)


//ARRAY PUSH

let sweet = ['Blue', 'Tomtom', 'Milo']
sweet.push('Lemon')
console.log(sweet);


//ARRAY SHIFT/UNSHIFT (SHIFT REMOVE THE FIRST ELEMENT WHILE UNSHIFT ADDS TO THE BEGINNING OF THE ARRAYS)

let don = ['Dickson', 'Ogugu', 'Power', 'Mienka', 'Blessing', 'Austin']
//don.shift()
console.log(don);

//let dons = ['Moses', 'Pascal', 'Godday']
let dons = [1,4,8,2,20,3,5,8,6,11,7,15,9,10]
//dons.unshift('Don')
//console.log(dons);


// MERGED ARRAYS
// let mergedArray = don.concat (dons)
// console.log(mergedArray)

//SPLICE ARRAY ALLOWS YOU TO ADD A NEW ITEMS TO THE ELEMENTS

// dons.splice(1,2, 'Brad', 'Moses')
// console.log(dons)

//SLICE ARRAY TAKES OUT A NEW ARRAY TO 

let ray = dons.slice(2)
console.log(ray)


//SORTING REVERSE ARRAYS IT ARRANGES THE ELEMENT FROM THE END ALPHABETICALLY
don.sort()
console.log(don.reverse())

//SORT NUMERICALLY 

dons.sort(
(a, b) => a - b
)
console.log(dons)



//ITERATION ARRAY FOREACH

const rest = [87,89,90,55,48,91,72,100,103,108,120]

rest.forEach(
(value,) => {

    if(value%2 == 0) return console.log (`this ${value} is even`);
    
    return console.log(`this is the ${value} is odd`)
}
    
);

//MAP ARRAY

// const test = [87,89,90,55,48,91,72,100,103,108,120]

// let mappedResult = test.map(
// (value, index, array) => {

//     return console.log (`this is ${value + 5} is here`)
// }
// )
// console.log(mappedResult)


//FILTERED ARRAY METHODS

const test = [87,89,90,55,48,91,72,100,103,108,120]

let myFucntion = (value, index, array) => {
    return value > 50
}
console.log(test)