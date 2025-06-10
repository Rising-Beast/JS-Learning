// Variables are the containers for storing data values.

// In JavaScript, there are three ways to declare variables: var, let, and const.
// var: Declares a variable, optionally initializing it to a value.
// let: Declares a block-scoped variable, optionally initializing it to a value.
// const: Declares a block-scoped, read-only constant.

// Variable ka naam aise hona chahiye ki usse variable ka purpose samajh aaye.

const accountId = 198214; 
// const ka use tab karte hain jab variable ki value change nahi hogi.
/* Ham generally sochte h ki value change hone se acha hota hai,
   lekin most of the time, value change nahi hoti.
   Isliye const ka use karna best practice hai.
*/

let accountEmail = "saiayush@example.com"; 
// let ka use tab karte hain jab variable ki value change ho sakti hai.

var accountPassword = "12345"; 
// var ka use tab karte hain jab variable ki value change ho sakti hai, lekin yeh global scope mein hota hai.

accountCity = "Delhi"; 
// Agar variable ko declare nahi kiya hai, toh yeh global scope mein chale jayega. Yeh best practice nahi hai.

// {} Yeh inke beech jo bhi likha jayega, woh block scope ke andar aayega.
// Block scope ka matlab hai ki variable sirf us block ke andar hi accessible hoga.

/* var pehle use karte thay, lekin ab let aur const ka use zyada hota hai.
   var actually scope ko ignore karta hai, isliye yeh best practice nahi hai.
   let aur const block scope ke andar hi kaam karte hain, isliye yeh zyada safe hain.
*/

let accountState;
// Agar sirf variable declare karke chod dete hein, toh uski value undefined hoti hai.

// accountId = 23546; // Error: Assignment to constant variable.
// const mein variable ki value change nahi kar sakte.
accountEmail = "saiayush123@example.com";
accountPassword = "67890";
accountCity = "Mumbai";

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ]);
// table() function se data ko table format mein display karte hain.

/* Prefer not to use var,
   because of the use of block scope and function scope in modern JavaScript.
*/