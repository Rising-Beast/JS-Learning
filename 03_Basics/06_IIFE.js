// IIFE - Immediately Invoked Function Expression

/* IIFE ka matlab hota hai ki function ko turant define karte hi execute kar diya jaye. 
   And global variables ke conflict se bacha ta hai,
   (isse global scope pollute ya kharap nhi hota).

   -> Kahin baar ham ek file mein sirf database connection likh te hein, aur ham chahte hein ki app start hote hi, uss file ke andar database connection start hojaye. Idhar IIFE kaam mein ata hai !!

   -> Global scope ko pollution se bacha ta hai !
      Bcuz iske andar waale cheezein iske bahar in-accessible hoti hai.
*/

/* Syntax :
        // 1. NAMED IIFE :
                    (function() {
                        ....
                    }) ();

        // 2. SIMPLE IIFE :
                    (() => {
                        ....
                    }) ();

   Ye do cheeze karta hai:
        // 1. Function ko ek expression banata hai (using () around function)
        // 2. Us function ko turant call kar deta hai (using () at the end)

   Yeh tab use hota hai jab hume:
   - Ek baar hi koi kaam karna ho and immediately execute karna ho.
   - Global scope ko pollute na karna ho.
     (variables ko andar hi rakhna ho)
*/



// Normal Function :
function chai() {
    console.log("FUNCTION EXECUTED !");
};
chai();  // "FUNCTION EXECUTED ! "


// Named IIFE - Normal Function as IIFE :
(function chai() {
    console.log("IIFE (normal function) EXECUTED !");
}) ();  // "IIFE (normal function) EXECUTED !"

/* Isme message variable sirf IIFE ke andar hi accessible hai
   - Bahar use access nahi kar sakte.
   - Isliye yeh global variables ke conflict se bachata hai.
*/


// Simple IIFE - Arrow Function as IIFE :
(() => {
    console.log("IIFE (arrow function) EXECUTED !");
}) ();  // "IIFE (arrow function) EXECUTED !"

((name) => {
    console.log(`IIFE EXECUTED BY ${name} !`);
}) ("JavaScript");  // "IIFE EXECUTED BY JavaScript !"


/* NOTE :
   
   (() => {
       console.log("IIFE 1");
   }) ()

   (() => {
       console.log("IIFE 2");
   }) ()

   -> Yeh Error dega bcuz IIFE ko pta nhi hai ki usko kab stop karna hota hai !!
   -> IIFE ke baadh semicolon lagane se yeh error nhi dega.
   -> JS normally automatically semicolon insert karta hai,
      lekin IIFE mein safe side mein rehne keliye hame khud se semicolon lagana chahiye.
*/


/* SPECIAL NOTE :

   // Rule of thumb:
            Hamesha IIFE ke aage and baad mein semicolon lagao !!! 
            Especially agar tumhara IIFE kisi aur IIFE ya statement ke turant baad aa raha ho.
    
        // Correct :
                (() => {
                    console.log("IIFE 1");
                }) ();

                (() => {
                    console.log("IIFE 2");
                }) ();

        // Correct :
                let safeNum = 20;
                (function () {
                    console.log("IIFE ran safely after variable");
                }) ();
            
            -> Pehle variable h, uske baadh bhi semicolon lagana hai.
*/