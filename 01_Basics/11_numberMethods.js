const num = 500.82896;
const price = 856321534.5864;


// NUMBER PROPERTIES are:

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308          // Largest positive number
console.log(Number.MIN_VALUE); // 5e-324                           // Smallest positive number
console.log(Number.NEGATIVE_INFINITY); // -Infinity                // Negative infinity (number type)
console.log(Number.POSITIVE_INFINITY); // Infinity                 // Positive infinity (number type)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991          // Largest safe integer (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991         // Smallest safe integer (-(2^53 - 1))
console.log(Number.EPSILON); // 2.220446049250313e-16              // Machine epsilon
console.log(Number.NaN); // NaN                                    // Represents "Not a Number"



// STATIC METHODS (called on .Number) are:

// 1. isInteger() - Number integer h ki nhi check karta hai.
console.log(Number.isInteger(56)); // true
console.log(Number.isInteger(56.0)); // true
console.log(Number.isInteger(56.3)); // false

// 2. isFinite() - Number finite h ki nhi check karta hai.
console.log(Number.isFinite(56)); // true
console.log(Number.isFinite(Infinity)); // false

// 3. isSafeInteger() - Number safe integer h ki nhi check karta hai.
console.log(Number.isSafeInteger(56)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true

// 4. isNaN() - Number NaN h ki nhi check karta hai.
console.log(Number.isNaN(NaN)); // true

// 5. parseInt() - String ko number mein convert karta hai.
console.log(parseInt("56")); // 56
console.log(parseInt("56abc")); // 56
console.log(parseInt("abc56")); // NaN

// 6. parseFloat() - String ko number mein convert karta hai.
console.log(parseFloat("56")); // 56.0
console.log(parseFloat("56abc")); // 56.0
console.log(parseFloat("abc56")); // NaN

// integer and float dono number type data hin h !!



// INSTANCE METHODS (called on number values) are:

// 1. toString() - Number ko string mein convert karta hai.
console.log(num.toString()); // "500.82896"
// Ab hame iske upar string methods use kar sakte hain.
console.log(num.toString().length); // 9


// 2. toFixed() - Number ko specified decimal places mein round off kar k, string mein convert karta hai.
console.log(num.toFixed(2)); // "500.83"


// 3. toPrecision() - Number ko specified total digits mein round off kar k, string mein convert karta hai.
console.log(num.toPrecision(6)); // "500.829"
console.log(num.toPrecision(3)); // "501"
console.log(num.toPrecision(1)); // "5e+2" (scientific notation)


// 4. toLocaleString() - Number ko local format mein convert kar k, string mein convert karta hai.
console.log(price.toLocaleString("en-IN")); // "8,56,32,153.586"
console.log(price.toLocaleString("en-US")); // "856,321,534.586"
// By default, yeh current locale (automatically uses browser's/OS's language settings) ke according format karta hai.
// 3 decimal places ke liye, yeh default format karta hai.

console.log(price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })); // "￥856,321,534"
console.log(price.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // "₹8,56,32,153.59"
// Rounds off the decimal places according to the currency format.
// style and currency dono ko sath mein hin use karna padega !

console.log(price.toLocaleString("en-IN", { notation: "compact" , style: "currency", currency: "INR" })); // "₹86Cr"
// Compact notation se large numbers ko chhota format mein dikhata hai, and uske hisab se number round off bhi hota hai.


// 5. toExponential() - Number ko scientific notation mein convert kar k, string mein convert karta hai.
console.log(price.toExponential(2)); // "8.56e+8"