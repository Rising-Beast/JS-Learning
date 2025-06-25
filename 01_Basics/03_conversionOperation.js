// Conversion ke functions hain :
// Number() - number mein convert karta hai
// String() - string mein convert karta hai
// Boolean() - boolean mein convert karta hai


let score = "56";
let scoreNumber = Number(score);
console.log(scoreNumber);        // 56
console.log(typeof scoreNumber); // number

score = "56abc";
scoreNumber = Number(score);
console.log(scoreNumber);        // NaN (Not a Number)
console.log(typeof scoreNumber); // number

// NaN ka matlab hai ki value, number mein convert nahi ho sakti !


score = null;
scoreNumber = Number(score);
console.log(scoreNumber);        // 0
console.log(typeof scoreNumber); // number


score = undefined;
scoreNumber = Number(score);
console.log(scoreNumber);        // NaN
console.log(typeof scoreNumber); // number


score = true;
scoreNumber = Number(score);
console.log(scoreNumber);        // 1
console.log(typeof scoreNumber); // number


score = false;
scoreNumber = Number(score);
console.log(scoreNumber);        // 0
console.log(typeof scoreNumber); // number

// To Number conversion rules :
// "" => 0
// "56" => 56
// "56abc" => NaN
// "abc" => NaN
// true => 1; false => 0
// null => 0 
// undefined => NaN



let isLoggedIn = 1;
let isLoggedInBoolean = Boolean(isLoggedIn);
console.log(isLoggedInBoolean);        // true
console.log(typeof isLoggedInBoolean); // boolean


isLoggedIn = "";
isLoggedInBoolean = Boolean(isLoggedIn);
console.log(isLoggedInBoolean);        // false
console.log(typeof isLoggedInBoolean); // boolean


isLoggedIn = "abc";
isLoggedInBoolean = Boolean(isLoggedIn);
console.log(isLoggedInBoolean);        // true
console.log(typeof isLoggedInBoolean); // boolean

// To Boolean conversion rules :
// "" => false
// "abc" => true
// 0 => false
// 1 => true
// null => false
// undefined => false
// NaN => false
// 56 => true



let someNumber = 56;
let someNumberString = String(someNumber);
console.log(someNumberString);        // "56"
console.log(typeof someNumberString); // string

// To String conversion rules :
// 56 => "56"
// true => "true"; false => "false"
// null => "null"
// undefined => "undefined"
// NaN => "NaN"
// "" => ""