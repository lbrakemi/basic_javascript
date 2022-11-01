// Given a sequential arrays of numbers
//Write a programm to stop executing the loops when the value is equals to 5


var numbers = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < numbers.length; i++) {

    if (numbers[ i ] == 5 ){
        break;
    }

    console.log(`the current numbers is: ${ numbers [ i ] } `);
};

console.log('..........................................')

var employees = [
    {
        name: 'Peter',
        salary: 2000,
        active: false,
        additional_salary: function () {
            return this.salary + 250;
        }
    },

    {
        name: 'Choice',
        salary: 1500,
        active: true,
        additional_salary: function () {
            return this.salary + 250;
        }
    },

    {
        name: 'Brad',
        salary: 17000,
        active: true,
        additional_salary: function () {
            return this.salary + 250;
        }
    },

    {
        name: 'Favour',
        salary: 20000,
        active: true,
        additional_salary: function () {
            return this.salary + 250;
        }
    },

    {
        name: 'Eniola',
        salary: 2000,
        active: false,
        additional_salary: function () {
            return this.salary + 250;
        }
    }
    
];

//for (let index = 0; index < employees.length; index++){

  //  if( employees[ index ][ 'active' ] == true) {
 //       console.log (`we have paid the sum of ${employees[ index ] [ 'salary'] } to ${employees [ index ]['name'] }`)
  //  }
//}

for (let i = 0; i < employees.length; i++) {
    

    let employee = employees[ i ];

    //break; (ends the code)

    if (employee.active == false){
        continue;
    }

    console.log (`we have paid the sum of ${employee.salary } to ${employee.name}`)
    
}