/* JavaScript is 100% dynamically typed !
   Variable types are checked at runtime (code chalte waqt pata chalta hai).
   // Flexibility: Same variable ko kabhi number, kabhi string bana sakte ho.
   // Fast Prototyping: Bina type declare kiye code likh sakte ho.
   // Beginner Friendly: Naye developers ke liye seekhna asan hai.
*/


// JavaScript mein data types hain:
// 1. Primitive Data Types:
//    - String    
//    - Number ( Range is -( 2^(53) - 1 ) to ( 2^(53) - 1 ) )
//    - BigInt (ES11 se introduce hua, bada integer value store karne ke liye)
//    - Boolean (true/false)
//    - Undefined (Jab variable declare kiya hai lekin value assign nahi ki)
//    - Null (Representation of empty value))
//    - Symbol (For unique)
// 2. Non-Primitive (Reference) Data Types:
//    - Object
//    - Array  
//    - Function
// Primitive data types ko immutable kaha jata hai, matlab inki value change nahi hoti.
// Non-primitive data types ko mutable kaha jata hai, matlab inki value change hoti hai.


const str1 = "Hello"; // String

const num = 42; // Number

const bigNum = 1234567890123456789012345678901234567890n; // BigInt
// BigInt ke liye 'n' suffix use karte hain.

const isTrue = true; // Boolean

const userName = undefined; // Undefined

const userEmail = null; // Null

const uniqueID = Symbol("unique"); // Symbol
// Symbol ka use unique identifiers banane ke liye hota hai.
const id = Symbol("unique");
console.log(uniqueID === id); // false
// Symbol mein same value dene se bhi, returned value alag hoti hai.


const heroes = [ "IronMan", "Captain America", "Thor" ]; // Array
// Array bhi ek object hai, lekin ismein elements indexed hote hain.
console.log(heroes); // ["IronMan", "Captain America", "Thor"]

// Object key-value pairs ka collection hota hai.
let person = {
    name: "IronMan",
    realName: "Tony Stark",
    age: 45
}; // Object
console.log(person); // { name: 'IronMan', realName: 'Tony Stark', age: 45 }   

// Basic function is "<funcName>(){}" 
const myFunc = function() {
    console.log("Hello from myFunc!");
}; // Function as a variable
myFunc(); // Hello from myFunc!
// Function bhi ek object hai, lekin isse call kiya ja sakta hai.


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

console.log(typeof uniqueID); // symbol

console.log(typeof heroes); // object
console.log(typeof person); // object
console.log(typeof myFunc); // function
// function ka return type ko object-function kehte hain.