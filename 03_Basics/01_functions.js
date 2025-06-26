// Functions se ham ek block of code ko baar baar use kar skte hain, without actually writing it again and again.

// Function Definition :
/* function functionName(parameter1, parameter2, ..., parameterN) {
       ...
   };
*/


function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("i");
};
sayMyName; // Function Reference - No output
sayMyName();
/* Output:
    "S"
    "a"
    "i"
*/

// functionName - Function Reference
// functionName(parameter1, parameter2, ..., parameterN) - Function Call / Function Execution

// Paramater - Function Definition mein jo values receive hote hein.
// Argument - Function Call mein jo values send karte hein.


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
};
addTwoNumbers();             // NaN
addTwoNumbers(10);           // NaN
addTwoNumbers(10, 20);       // 30
addTwoNumbers(3, "4");       // 34
addTwoNumbers(3, null);      // 3
addTwoNumbers(3, undefined); // NaN

let result = addTwoNumbers(3, 5);
console.log("Result is :",result); // undefined
// Function kuch return nhi kar rhi, isliye undefined deta hai.


function addNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    console.log("Hello"); // Not Executed (return ke baadh wala code nhi chalega)
};
result = addNumbers(3, 5);
console.log("Result is :",result); // 8



function loginUserMessage(userName) {
    return `${userName} just logged in.`;
};
loginUserMessage("Sai Ayushman");              // No output
// Function execute hua and value return bhi hua, but hamne print nhi kiya h, so no output.
console.log(loginUserMessage("Sai Ayushman")); // Sai Ayushman just logged in.
console.log(loginUserMessage());               // undefined just logged in.
// Agar kuch argument pass nhi karenge, toh undefined pass hoga !!



function loginMessage(username) {
    if(username === undefined) {
        console.log("Please enter username");
        return;
    };
    return `${username} just logged in.`;
};
console.log(loginMessage()); /* Please enter username
                                undefined
                             */



// Aise ham parameters ka default value de skte hein :
function message(username = "Guest") {
    return `${username} just logged in.`;
};
console.log(message());               // Guest just logged in.
console.log(message("Sai Ayushman")); // Sai Ayushman just logged in. 



function login(username) {
    if(!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in.`;
};
console.log(login()); /* Please enter username
                         undefined
                      */
// !username - Yeh falsy values keliye condition hai !!
/* Falsy values are : 0, "", null, undefined, NaN, false
   -> Yeh values koi bhi condition mein false hote hein.
*/