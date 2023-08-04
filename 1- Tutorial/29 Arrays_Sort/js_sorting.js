
// ---------------------------------------------------
// ---------------------------------------------------
// ------------------ Sorting an Array ---------------
// ---------------------------------------------------
// ---------------------------------------------------


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;

// fruits.sort();
// document.getElementById("demo2").innerHTML = fruits;


// ---------------------------------------------------
// ---------------------------------------------------
// ----------------- Reversing an Array --------------
// ---------------------------------------------------
// ---------------------------------------------------

// // Create and display an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;

// // First sort the array
// fruits.sort();

// // Then reverse it:
// fruits.reverse();

// document.getElementById("demo2").innerHTML = fruits;



// ---------------------------------------------------
// ---------------------------------------------------
// ------- Numeric Sort Assending & Dessending -------
// ---------------------------------------------------
// ---------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo1").innerHTML = points;

// // // --------------- Numeric Sort Assending ---------

// points.sort(function (a, b) {
//     console.log(a, b)
//     return a - b
// });

// document.getElementById("demo2").innerHTML = points;

// // // --------------- Numeric Sort Dessending --------

// points.sort(function (a, b) {
//     console.log(a, b)
//     return b - a
// });

// document.getElementById("demo3").innerHTML = points;


// ---------------------------------------------------
// ---------------------------------------------------
// --------------- The Compare Function --------------
// ---------------------------------------------------
// ---------------------------------------------------


// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;

// function myFunction1() {
//     points.sort();
//     document.getElementById("demo").innerHTML = points;
// }
// function myFunction2() {
//     points.sort(function (a, b) { return a - b });
//     document.getElementById("demo").innerHTML = points;
// }


// ---------------------------------------------------
// ---------------------------------------------------
// -------- Sorting an Array in Random Order ---------
// ---------------------------------------------------
// ---------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("random_demo").innerHTML = points;

// function myFunction() {

//     points.sort(function () {
//         // return -1
//         console.log(points)
//         console.log(0.5 - Math.random())
//         return 0.5 - Math.random()
//     });

//     document.getElementById("random_demo").innerHTML = points;
// }


// ---------------------------------------------------
// ---------------------------------------------------
// ------------ The Fisher Yates Method --------------
// ---------------------------------------------------
// ---------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;

// function myFunction() {
//     for (let i = points.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let k = points[i];
//         points[i] = points[j];
//         points[j] = k;
//     }
//     document.getElementById("demo").innerHTML = points;
// }


// ---------------------------------------------------
// ---------------------------------------------------
// ----- Find the Highest(or Lowest) Array Value -----
// ---------------------------------------------------
// ---------------------------------------------------

// // Lowest
// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) { return a - b });
// document.getElementById("demo1").innerHTML = points[0];

// // Highest
// points.sort(function (a, b) { return b - a });
// document.getElementById("demo2").innerHTML = points[0];



// ---------------------------------------------------
// ---------------------------------------------------
// ---------- Using Math.max() on an Array -----------
// ---------------------------------------------------
// ---------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = myArrayMax(points);

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// }

// // Note: Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).


// ---------------------------------------------------
// ---------------------------------------------------
// ---------- Using Math.min() on an Array -----------
// ---------------------------------------------------
// ---------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = myArrayMin(points);

// function myArrayMin(arr) {
//     return Math.min.apply(null, arr);
// }

// // Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

// ---------------------------------------------------
// ---------------------------------------------------
// ---------- My Min / Max JavaScript Method ---------
// ---------------------------------------------------
// ---------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];

// // Example (Find Max)

// document.getElementById("demo1").innerHTML = myArrayMax(points);

// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// }

// // Example (Find Min)

// document.getElementById("demo2").innerHTML = myArrayMin(points);

// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//         if (arr[len] < min) {
//             min = arr[len];
//         }
//     }
//     return min;
// }


// ---------------------------------------------------
// ---------------------------------------------------
// -------------- Sorting Object Arrays --------------
// ---------------------------------------------------
// ---------------------------------------------------

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];

// // displayCars();

// cars.sort(function (a, b) { return a.year - b.year });

// displayCars();

// function displayCars() {
//     document.getElementById("demo").innerHTML =
//         cars[0].type + " " + cars[0].year + "<br>" +
//         cars[1].type + " " + cars[1].year + "<br>" +
//         cars[2].type + " " + cars[2].year;
// }

// ---------------------------------------------------
// ---------------------------------------------------
// -------------- Sorting Object Arrays --------------
// ---------------------------------------------------
// ---------------------------------------------------

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];

// displayCars();

// function myFunction() {
//     cars.sort(function (a, b) {
//         let x = a.type.toLowerCase();
//         let y = b.type.toLowerCase();
//         if (x < y) { return -1; }
//         if (x > y) { return 1; }
//         return 0;
//     });
//     displayCars();
// }

// function displayCars() {
//     document.getElementById("demo").innerHTML =
//         cars[0].type + " " + cars[0].year + "<br>" +
//         cars[1].type + " " + cars[1].year + "<br>" +
//         cars[2].type + " " + cars[2].year;
// }




// ---------------------------------------------------
// ---------------------------------------------------
// --------------- Stable Array sort() ---------------
// ---------------------------------------------------
// ---------------------------------------------------


// const myArr = [
//     { name: "X00", price: 100 },
//     { name: "X01", price: 100 },
//     { name: "X02", price: 100 },
//     { name: "X03", price: 100 },
//     { name: "X04", price: 110 },
//     { name: "X05", price: 110 },
//     { name: "X06", price: 110 },
//     { name: "X07", price: 110 },
//     { name: "X08", price: 120 },
//     { name: "X09", price: 120 },
//     { name: "X10", price: 120 },
//     { name: "X11", price: 120 },
//     { name: "X12", price: 130 },
//     { name: "X13", price: 130 },
//     { name: "X14", price: 130 },
//     { name: "X15", price: 130 },
//     { name: "X16", price: 140 },
//     { name: "X17", price: 140 },
//     { name: "X18", price: 140 },
//     { name: "X19", price: 140 }
// ];

// myArr.sort((p1, p2) => {
//     if (p1.price < p2.price) return -1;
//     if (p1.price > p2.price) return 1;
//     return 0;
// });

// let txt = "";
// myArr.forEach(myFunction);

// function myFunction(value) {
//     txt += value.name + " " + value.price + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

