const score = 400;         // Automatically number type assign hota hai.
console.log(typeof score); // number

const balance = new Number(500.82896); // Number object create hota hai.
console.log(typeof balance);           // object (Number object)
console.log(balance);                  // [Number: 500.82896]

const amount = 856321534.5864;


// NUMBER METHODS are:

// 1. toString() - Number ko string mein convert karta hai.
console.log(balance.toString());        // "500.82896"
// Ab hame iske upar string methods use kar sakte hain.
console.log(balance.toString().length); // 9


// 2. toFixed() - Number ko specified decimal places mein round off kar k, string mein convert karta hai.
console.log(balance.toFixed(2)); // "500.83"


// 3. toPrecision() - Number ko specified total digits mein round off kar k, string mein convert karta hai.
console.log(balance.toPrecision(6)); // "500.829"
console.log(balance.toPrecision(3)); // "501"
console.log(balance.toPrecision(1)); // "5e+2" (scientific notation)


// 4. toLocaleString() - Number ko local format mein convert kar k, string mein convert karta hai.
console.log(amount.toLocaleString("en-IN")); // "8,56,32,153.586"
console.log(amount.toLocaleString("en-US")); // "856,321,534.586"
// By default, yeh current locale (automatically uses browser's/OS's language settings) ke according format karta hai.
// 3 decimal places ke liye, yeh default format karta hai.