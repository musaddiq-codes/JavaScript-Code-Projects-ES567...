// ------------------------------------------------------
// ------------------------------------------------------
//--------------- How to Recognize an Array -------------
// ------------------------------------------------------
// ------------------------------------------------------

// The typeof operator returns object because a JavaScript array is an object.

// const fruits = ["Banana", "Orange", "Apple"];

// To solve this problem ECMAScript 5 (JavaScript 2009) defined a 
// new method Array.isArray():

// const fruits = ["Banana", "Orange", "Apple"];
// document.getElementById("demo").innerHTML = Array.isArray(fruits);


// The typeof operator returns object because a JavaScript array is an object.

// const fruits = ["Banana", "Orange", "Apple"];

// let type = typeof(fruits)
// // let type = typeof fruits
// console.log(type)



// ------------------------------------------------------
// ------------------------------------------------------
//--------------- JavaScript new Array() ----------------
// ------------------------------------------------------
// ------------------------------------------------------

// A Common Error
// These are not same
// var points = [40];
// document.getElementById("demo").innerHTML = points;  
// // This is Result: 40

// Create an array with 40 undefined elements:
// const points = new Array(40);
// document.getElementById("demo").innerHTML = points[0];  
// // This is Result:  undefined


// // Avoid using new Array().
// var points = new Array(40);
// // This is Result:  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const points = new Array(40, 100);
// // This is Result:  40,100,1

// // The new keyword can produce some unexpected results:
// const points = new Array(40, 100, 1);
// // This is Result:  40,100
// document.getElementById("demo").innerHTML = points; 




// These two different statements both create a new array containing 6 numbers:

// const points = new Array(40, 100, 1, 5, 25, 10);
// const points = [40, 100, 1, 5, 25, 10];

// These two different statements both create a new empty array named points:

// const points = new Array();
// const points = [];


// ------------------------------------------------------
// ------------------------------------------------------
//----------------- Associative Arrays-------------------
// ------------------------------------------------------
// ------------------------------------------------------


// Arrays are a special kind of objects, with numbered indexes.

// When to Use Arrays.When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings(text).
// You should use arrays when you want the element names to be numbers.

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// document.getElementById("demo").innerHTML =
//     person[0] + " " + person.length;

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// document.getElementById("demo").innerHTML =
// person[0] + " " + person.length;



// ------------------------------------------------------
// ------------------------------------------------------
//----------------- Undifiend wholes---------------------
// ------------------------------------------------------
// ------------------------------------------------------

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

// let fLen = fruits.length;
// let text = "";
// for (i = 0; i < fLen; i++) {
//     text += fruits[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// ------------------------------------------------------
// ------------------------------------------------------
//----------------- Autometic toString()---------------
// ------------------------------------------------------
// ------------------------------------------------------

// const fruits = ['Banana', 'Mango', "Apple"]

// // console.log(fruits.length)

// document.getElementById('demo_on_need').innerHTML = fruits
// console.log(fruits)

// document.getElementById('demo').innerHTML = fruits.toString()
// console.log(fruits.toString())




// ------------------------------------------------------
// ------------------------------------------------------
//----------------- Adding Array Elements---------------
// ------------------------------------------------------
// ------------------------------------------------------

// Method 2

// const fruits = ['Banana', 'Mango', "Apple"]

// fruits[fruits.length] = 'Orange'

// console.log(fruits)

// Method 1

// const fruits = ['Banana', 'Mango', "Apple"]

// fruits.push('Orange')

// console.log(fruits)








// ------------------------------------------------------
// ------------------------------------------------------
//----------------- Looping Array Elements---------------
// ------------------------------------------------------
// ------------------------------------------------------

// Through forEach function

// const array = [1, 2, 3]

// var list = "<ul>"

// array.forEach(myFunction)

// function myFunction(value) {
//     list += "<li>" + value + "</li>"
// }
// list += "</ul>"

// document.getElementById('demo').innerHTML = list;

// Through Loop

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;




