// 2 types of scopes:
            // 1. Global Scope
            // 2. Local Scope

// Scope mtlb boundary of varoiable bol skte hein !!


/* {} - Iske andar jitne bhi code likhte h, woh sab scope ke andar aayega. 
        Isko hin local scope bolte hein. (Isko object ke sath confuse nhi hona hai !!)
        -> Block scope ka matlab hai ki variable sirf us block ke andar hi accessible hoga.
        -> Iske bahar jo code h, woh global scope ke andar aayega.
*/

// Local variable - Variable ko block ke andar declare karte hein.
// Global variable - Variable ko global scope ke andar declare karte hein.

// Global variables ko kahin se bhi access kar sakte hain.
// Local variables baas ussi function/ loop/ conditional statement ke andar hin access kar sakte hain, inke bahar yeh inaccessible hoga.


const a = 10;
let b = 20;
var c = 30;
console.log("const a before if block :", a);  // 10
console.log("let b before if block :", b);    // 20
console.log("var c before if block :", c);    // 30

if (true) {
    const a = 1;
    let b = 2;
    var c = 3; // or c = 3;
    console.log("Inner const a :", a);  // 1
    console.log("Inner let b :", b);    // 2
    console.log("Inner var c :", c);    // 3
};
console.log("Outer const a :", a); // 10
console.log("Outer let b :", b);   // 20
console.log("Outer var c :", c);   // 3
// var block scope ko follow nhi karta hai.

// Basically local scope ke andar jo bhi hota hai, usse bahar wale global variables par kuch effect nahi hota. (Ye cheez 'var' follow nhi karti !!)


/* NOTE :
        -> Browser ke andar global scope alag hai !
        -> Code environment mein Node.js ke through run karte hain, toh isme global scope alag hai !
*/



// JavaScript code top to bottom chalta hai — yani line by line upar se neeche execute hota hai.

function one() {
    const userName = "Sai Ayushman";

    function two() {
        const website = "youtube";
        console.log(userName);
    };
    // console.log(website);  // ReferenceError: website is not defined
    two();
};
one(); // "Sai Ayushman"

/* function two keliye, function one hin global scope hai !
   But function two khud ek local scope hai.
   Top to down jane se, pehle website wala line execute hota hai,
   But website ka value in-accessible h bcuz woh twoTest ke andar hai (local scope).
   Toh yeh ouptut ata :
        ReferenceError: website is not defined            
*/



if (true) {
    const userName = "Sai Ayushman";
    
    if (userName === "Sai Ayushman") {
        const website = "youtube";
        console.log(userName + " & " + website); // "Sai Ayushman & youtube"
    };
    // console.log(website);  // ReferenceError: website is not defined
};
// console.log(userName);  // ReferenceError: userName is not defined

/* if block ke andar, website wala line execute hota hai,
   But website ka value in-accessible h bcuz woh 2nd if ke andar hai (local scope).
   Toh yeh ouptut ata :
        ReferenceError: website is not defined

   Ab agar website ko nikal de and firse code run karein,
   Toh yeh ouptut ata  :
        "Sai Ayushman & youtube"
        ReferenceError: userName is not defined
   Because userName ka console.log pura bahar h, udhar dono if ke andar ke variables in-accessible hain !!
*/


console.log(addOne(7)); // 8
function addOne(num) {
    return num + 1;
};
console.log(addOne(5)); // 6


// Function as Variable or Function Expression :

// console.log(addTwo(10)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2;
};
console.log(addTwo(4)); // 6

/* Jab ham Function Expression banate h, 
   tab agar function declaration se pehle usko call karenge, 
   toh error ayega !!
*/



// Function Scope :
/* 
   A variable is accessible only within the function it is declared in.
   It is not accessible outside the function. 
   -> Created using 'var'.
   -> 'var' DOES NOT follow block scope.
*/

/* function test() {
       if (true) {
           var x = 10;
       }
       console.log(x); // 10 — because var is function scoped
   }
   test();
   console.log(x); // ReferenceError: x is not defined
*/



// Block Scope :
/* 
   A variable is accessible only within the block (like if, for, {}) it is declared in.
   It is not accessible outside the block.
   -> Created using 'let' or 'const'.
   -> 'let' and 'const' follow BOTH function scope and block scope.
*/

/* function test() {
       if (true) {
           let x = 10;
           const y = 20;
       }
       console.log(x); // ReferenceError: x is not defined
       console.log(y); // ReferenceError: y is not defined
   }
   test();
   console.log(x); // ReferenceError: x is not defined
   console.log(y); // ReferenceError: y is not defined
*/