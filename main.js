// if statement/ Operators


/** This
 * a
 * muilt statement
 * attributes
 */

console.log('if statemnet')

if (5 == '5'){
    console.log('if statement: it ran');
}

console.log('if...else statement')

if (5 === '5'){
    console.log ('stay in the house')
} else {
     console.log('pack out')
}

console.log ('if...elseif...else')

if (5 === '5'){
    console.log('stay in the house')
} else if (5 === 6) {
    console.log ('stay in the house for a period')
} else { 
    console.log ('pack out')
}


//nested statement

console.log ('nested if')

if (5 !== '5'){
    if (5 !== '5'){
        console.log('give grace')
    } else {
        console.log ('pack out')
    }
} else {
    console.log('stay')
}

//switch statement

var parameter = 5;

switch (parameter) {
    case '5':
        console.log('first case');
        break;
        case  5:
            console.log('second case');
            break;
            default:
                console.log('if any of them do not run');
                break;
}

// condition ? true_result : false_result; tinary operator

var paidRent = true;

paidRent ? console.log('stay in the house') : console.log ('pack out of my house');

document.getElementsByTagName('body')