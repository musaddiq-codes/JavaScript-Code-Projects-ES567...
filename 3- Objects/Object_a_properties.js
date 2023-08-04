

// ---------------------------------------------------------
// ---------------------------------------------------------
// ------------- Accessing JavaScript Properties -----------
// ---------------------------------------------------------
// ---------------------------------------------------------


// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// document.getElementById("demo").innerHTML = person.firstname + " " + person["lastname"] + " " + person[x = "age"];

// Note:
// These all are same but alternatives for accessing properties in objects.

// objectName.property      // person.age
// ######################## Alternative ##########################
// objectName["property"]   // person["age"]
// ######################## Alternative ##########################
// objectName[expression]   // x = "age"; person[x]
// objectName[x = "age"]   // x = "age"; person[x]


// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------- JavaScript for...in Loop ---------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };

// let txt = "";
// for (let x in person) {
//     // txt += person[x] + " ";
//     txt = txt + person[x] + " ";
// }

// document.getElementById("demo").innerHTML = txt;


// ---------------------------------------------------------
// ---------------------------------------------------------
// --------------Adding new Properties in Object------------
// ---------------------------------------------------------
// ---------------------------------------------------------



// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// person.nationality = "English";
// document.getElementById("demo").innerHTML =
//     person.firstname + " is " + person.nationality + ".";




// ---------------------------------------------------------
// ---------------------------------------------------------
// --------------Deleting Properties in Object------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// delete person["age"];

// document.getElementById("demo").innerHTML =
//     person.firstname + " is " + person.age + " years old.";
// ------------------or-----------------------------

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// delete person.age;

// document.getElementById("demo").innerHTML =
//     person.firstname + " is " + person.age + " years old.";




// ---------------------------------------------------------
// ---------------------------------------------------------
// --------------Nested Objects accessing-------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// ------------------ or ------------------------------

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }

// let p1 = "cars";
// let p2 = "car2";
// document.getElementById("demo").innerHTML = myObj[p1][p2];

// ------------------ or ------------------------------

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }
// document.getElementById("demo").innerHTML = myObj["cars"]["car2"];

// ------------------ or ------------------------------

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }
// document.getElementById("demo").innerHTML = myObj.cars["car2"];

// ------------------ or ------------------------------

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }
// document.getElementById("demo").innerHTML = myObj.cars.car2;



// ---------------------------------------------------------
// ---------------------------------------------------------
// --------------Nested Objects & arrays accessing----------
// ---------------------------------------------------------
// ---------------------------------------------------------


// let x = "";

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] }
//     ]
// }



// for (let i in myObj.cars) {
//     console.log(i)
//     console.log(myObj.cars[i])
//     x += "<h2>" + myObj.cars[i].name + "</h2>";
//     for (let j in myObj.cars[i].models) {
//         x += myObj.cars[i].models[j] + "<br>";
//     }
// }


// // x += "<h1> " + "Name: " + myObj.name + ", " + myObj.age + "</h1>"

// // for (let i in myObj.cars) {
// //     x += "<h2> " + myObj.cars[i].name + "</h2>"
// //     for (let j in myObj.cars) {
// //         x += "<p> " + myObj.cars[i].models[j] + "</p>"
// //     }
// // }

// document.getElementById("demo").innerHTML = x;
