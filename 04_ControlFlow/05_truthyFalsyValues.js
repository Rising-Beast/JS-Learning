const userEmail = "sai@example.com";

if (userEmail) {
    console.log("Got user email.");
} else {
    console.log("No user email found.");
};
// "Got user email."


const userPhone = "";

if (userPhone) {
    console.log("Got user phone.");
} else {
    console.log("No user phone found.");
};
// "No user phone found."


const userAddress = [];

if (userAddress) {
    console.log("Got user address.");
} else {
    console.log("No user address found.");
};
// "Got user address."



/* Falsy Values :

    Falsy values are values that evaluate to false in a boolean context.
    In JavaScript, the following values are considered falsy:
            -> false
            -> 0 (zero)
            -> -0 (negative zero)
            -> 0n (bigint)
            -> "" (empty string)
            -> null
            -> undefined
            -> NaN (Not-a-Number)
*/


/* Truthy Values :

    Truthy values are values that evaluate to true in a boolean context.
    In JavaScript, the following values are considered truthy:
            -> truth
            -> Any non-zero number (1, -1, 3.14)
            -> Any non-empty string ("hello", " ", "0", "false", "true")
            -> [] (non-empty array)
            -> {} (non-empty object)
            -> function(){} (empty function)
            -> Symbol("symbol") (symbol)
            -> new Date() (date object)
*/



/* NOTE :
    false == 0 => true
    false == "" => true
    "" == 0 => true
    null == undefined => true
*/



// Short Circuit Evaluation :
/*
    -> A || B -> if A is truthy, JS returns A
    -> A || B -> if A is falsy, JS returns B
*/

let userName = "Sai";
let userID = userName || "Guest"; 
console.log(userID);  // "Sai"

userName = "";
userID = userName || "Guest";
console.log(userID);  // "Guest"



// Check Empty Array :
const myArray = [];
if (myArray.length === 0) {
    console.log("Empty Array");
}; 
// "Empty Array"



// Check Empty Object :
const myObject = {};
if (Object.keys(myObject).length === 0) {
    console.log("Empty Object");
}; 
// "Empty Object"



// Check Empty String :
const myString = "";
if (myString.length === 0) {
    console.log("Empty String");
}; 
// "Empty String"

if (myString === "") {
    console.log("Empty String");
};
// "Empty String"