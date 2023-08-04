

// ---------------------------------------------------------
// ---------------------------------------------------------
// ------------------------ Example ------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();


