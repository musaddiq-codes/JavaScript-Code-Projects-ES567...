


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

// const myNumList = [1, 2, 3, -5, -4, 5]

// function callbackFunc(x) {
//     return x >= 0
// }

// const abc = bindFunc(myNumList, callbackFunc)

// document.getElementById('demo').innerHTML = abc

// function bindFunc(numList, callbackFuncs) {
//     const myArray = [];
//     for (const x of numList) {
//         if (callbackFuncs(x)) {
//             console.log(x)
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }



// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call Back function Defination
// function callbackFunc(x) {
//     console.log(x >= 0)
//     return x >= 0
// }

// // Call removeNeg with a Callback

// const posNumbers = removeNeg(myNumbers, callbackFunc);

// // Display Result
// document.getElementById("demo").innerHTML = posNumbers;

// // Remove negative numbers

// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//         if (callback(x)) {
//             console.log(x)
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a Callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// document.getElementById("demo").innerHTML = posNumbers;

// // Remove negative numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);
