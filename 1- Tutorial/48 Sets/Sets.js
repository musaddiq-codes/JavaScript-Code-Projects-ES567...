
// ---------------------------------------------------
// ---------------------------------------------------
// ------------------ JavaScript Sets ----------------
// ---------------------------------------------------
// ---------------------------------------------------

// --------------- How to create a Set ---------------
// ---------------------------------------------------
// -------------- The new Set() Method ---------------


// // Pass an Array to the new Set() constructor:

// // Create a Set
// const letters = new Set(["a", "b", "c"]);

// // Display set.size
// document.getElementById("demo").innerHTML = letters.size;

// // // ---------- Create a Set and add values: -----------

// // Create a Set
// const letters = new Set();

// // Add Values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");

// // Display set.size
// document.getElementById("demo").innerHTML = letters.size;


// // // --------- Create a Set and add variables: ----------

// // Create a Set
// const letters = new Set();

// // Create Variables
// const a = "a";
// const b = "b";
// const c = "c";

// // Add the Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);

// // Display set.size
// document.getElementById("demo").innerHTML = letters.size;



// ---------------------------------------------------
// ---------------------------------------------------
// ----------------- The add() Method ----------------
// ---------------------------------------------------
// ---------------------------------------------------

// // Create a new Set
// const letters = new Set(["a", "b", "c"]);

// // Add a new Element
// letters.add("d");
// letters.add("e");

// // Display set.size
// document.getElementById("demo").innerHTML = letters.size;

// -------------------###############---------------------
// If you add equal elements, only the first will be saved:
// -------------------###############---------------------

// // Create a Set
// const letters = new Set();

// // Add values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");

// // Display set.size
// document.getElementById("demo").innerHTML = letters.size;


// ---------------------------------------------------
// ---------------------------------------------------
// --------------- The forEach() Method --------------
// ---------------------------------------------------
// ---------------------------------------------------

// The forEach() method invokes (calls) a function for each Set element:

// // Create a Set
// const letters = new Set(["a","b","c"]);

// // List all Elements
// let text = "";
// letters.forEach (function(value) {
//   text += value + "<br>";
// })

// document.getElementById("demo").innerHTML = text;


// ---------------------------------------------------
// ---------------------------------------------------
// --------------- The values() Method ---------------
// ---------------------------------------------------
// ---------------------------------------------------
// The values() method returns a new iterator object containing all the values in a Set:

// const letters = new Set(["a","b","c"]);

// // Display set.size
// document.getElementById("demo").innerHTML = letters.values();

// -------------------###############---------------------
// Now you can use the Iterator object to access the elements:
// -------------------###############---------------------



// // Create a Set
// const letters = new Set(["a","b","c"]);

// // List all Elements
// let text = "";
// for (const x of letters.values()) {
//   text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;
