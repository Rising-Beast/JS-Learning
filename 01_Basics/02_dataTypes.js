"use strict"; // Treat all JavaScript code as newer version.
/* Ye line aaj kal likhne ki jyada jarurat bhi nhi hai.
   Javascript ke latest version mein ye by default hota hai.
   Lekin ye best practice hai.
*/

// alert(3 + 4);
/* Ham idhar node use kar rahe hain, isliye alert idhar kaam nhi karega.
    Lekin agar browser mein run karte hain, toh alert kaam karega.
    Alert ek pop-up box hai jo user ko message dikhata hai.
*/


console.log(3 + 4); console.log("Hello World!");
// Yeh code readable nahi hai.
// Isliye, best practice hai ki har statement ko alag line mein likhein.


// ECMAScript is the standard for JavaScript. 

// MDN webdocs is the best resource for learning JavaScript.


let Name = "Sai";      // String
let age = 20;          // Number
let isLoggedIn = true; // Boolean

// JavaScript mein data types hain:
// 1. Primitive Data Types:
//    - String    
//    - Number ( Range is -( 2^(53) - 1 ) to ( 2^(53) - 1 ) )
//    - BigInt (ES11 se introduce hua, bada integer value store karne ke liye)
//    - Boolean (true/false)
//    - Undefined (Jab variable declare kiya hai lekin value assign nahi ki)
//    - Null (Representation of empty value))
//    - Symbol (For unique)
// 2. Non-Primitive Data Types:
//    - Object
//    - Array  
//    - Function
// Primitive data types ko immutable kaha jata hai, matlab inki value change nahi hoti.
// Non-primitive data types ko mutable kaha jata hai, matlab inki value change hoti hai.

let firstName = 'Sai';      // String
let userName = "Sai Ayush"; // String
let sentence = `My name is Sai Ayushman Padhy
and I am 20 years old.`;    // Multiline String

let a = 34;           // Number
let b = 56.78;        // Number
let c = 89.768382854; // Number

let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt

let isLoggedInUser = true;   // Boolean
let isLoggedOutUser = false; // Boolean

let nothingHere; // Undefined (type = undefined)

let emptyValue = null; // Null (type = object, yeh JavaScript ka historical bug hai)

console.log(typeof firstName); // string
console.log(typeof 80.31);     // number

// typeof operator - Variable ka data type pata kar sakte hain.

console.log(typeof undefined); // undefined
console.log(typeof null);      // object