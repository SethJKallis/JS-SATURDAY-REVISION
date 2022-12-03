// *FOR LOOPS
// MOSTLY USED FOR ARRAYS
// FOR LOOP FOCUSES ON ARRAY INDEX

/*
let myArray = ['Toyota', 'BMW', 'Opel'];
let myObj = {
    name: 'Seth',
    surname: 'Kallis'
}

// LOOP THROUGH ARRAY
for(let i = 0; i < myArray.length; i++){
    console.log(i);
};

console.log(' ')

// RETURNS THE INDEXES OF THE ELEMENTS IN THE ARRAY
for(let val in myArray){
    console.log(val)
};

console.log(' ')

// RETURNS THE ELEMENTS IN THE ARRAY
for(value of myArray){
    console.log(value)
};

console.log(' ')

// LOOP THROUGH OBJECT
// RETURNS THE PROPERTY
for(let i in myObj){
    console.log(i)
};

console.log(' ')

// RETURNS THE PROPERTY VALUE
for(let i in myObj){
    console.log(myObj[i])
};

console.log(' ')
*/


// *JSON & FETCH API
// API serves as middle ware/ Lessens the load on the server
// fetch() looks the in the location and retrieves the data and brings it back(returns as a promise)
/*
fetch('http://127.0.0.1:5500/data/cars.json')
    .then(function (response) { // Fetched data is returned as (response) in thenable
        // console.log(response)
        return response.json();
     })
     .then(function (data) { // (response) gets parsed in as (data) in the next thenable
        console.log(data[0]);
        console.log(data[0].year);
        console.log(data[0].make);
        console.log(data[0].modal);
        console.log(data[0].automatic);
      });
*/

// fetch('https://api.chucknorris.io/jokes/random')
// .then(function (response) { 
//     console.log(response)
//     return response.json()
// })
// .then(function (anything) { 
//     for(key in anything){
//         console.log(key)
//     }
//     document.write(`<h2> ${anything.value} </h2>`)
// })

////////////////////////////////////////////////////////////////////////////////

// *Ternary Operators
// set values based on boolean(true or false)
/*
let x = 25;

if(x === 25? x = "True" : x = "False"){
    console.log(x);
}
*/

/////////////////////////////////////////////////////////////////////////////////

// *UNARY OPERATORS
/*
let x = 10.5;
let y = '10';
let z = 'Hello 10';
let w = '10.25 Hello';

// PARSEINT() CONVERTS THE FIRST INTEGER FROM A STRING
console.log(`x:`, parseInt(x));
console.log(`y:`, parseInt(y));
console.log(`z:`, parseInt(z)); // RETURNS NaN BECAUSE THE FIRST VALUE IS NOT A NUMBER
console.log(`w:`, parseInt(w));

console.log(' ');

// PARSEFLOAT CONVERTS TO A FLOATING POINT NUMBER
console.log(`x:`, parseFloat(x));
console.log(`y:`, parseFloat(y));
console.log(`z`, parseFloat(z)); //FIRST VALUE IS NOT A NUMBER
console.log(`w`, parseFloat(w));

console.log(' ');

// NUMBER() CONVERTS A VALUE TO A NUMBER
console.log(`x`, Number(x));
console.log(`y`, Number(y));
console.log(`z`, Number(z));  // CANNOT CONVERT CHARACTERS TO A NUMBER
console.log(`w`, Number(w)); // CANNOT CONVERT CHARACTERS TO A NUMBER

console.log(' ');

// UNARY OPERATOR
// not needed when using -(subtraction)
let banana = ('b' + 'a' + + 'a' + 'a').toLowerCase();
console.log(banana)
*/

////////////////////////////////////////////////////////////////////////////////

//   *Async
// async function addThis(){
//     let x = await fetch('../data/cars.json')
// };
// let y = async () => {
//     let cars = await fetch('../data/cars.json')
// };

////////////////////////////////////////////////////////////////////////////////

// *forEach
let myArray = ['apple', 'orange', 'apple', 'apple', 'orange'];
let numbers = [1, 2, 3, 4, 5, 6]
myArray.forEach(function myFunction(item,index){
    document.write(`${item}<br>`);
});
// *PRACTICE SEPARATION OF CONCERNS(TRY TO KEEP FUNCTIONS ON THE GLOBAL SCOPE)

// function myFunction(item, index){
//     document.write(`${item}<br>`);
// }

// myArray.map(anotherFunction);
let newNumbers = numbers.map(anotherFunction)
console.log(newNumbers)

function anotherFunction(item, index){
    return item*2
}