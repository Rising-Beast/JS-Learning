/* Arrow function declaration :
   (parameters) => {
       ....
   };

   Arrow Function Expression :
   const expn = (parameters) => {
       ....
   };

   -> Jab ek hi line mein arrow function likhna ho, toh {} aur 'return' likhne ki zarurat nahi.
   -> Agar 1 se zyada parameters ho toh () lagana zaroori hai.
*/



// Explicit Return :
const addTwo = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwo(10, 20)); // 30


// Implicit Return :
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(10, 20)); // 30

const addTwo3 = (num1, num2) => (num1 + num2);
console.log(addTwo3(10, 20)); // 30
// Implicit return mein, parenthesis likhna zaroori nhi hai.

const addTwo4 = (num1, num2) => ({userName: "Sai Ayushman"});
console.log(addTwo4(10)); // { userName: 'Sai Ayushman' }
// Implicit return mein, agar object return karna ho toh, parenthesis likhna zaroori hai.


/* In Arrow functions : 
        // {} - Ko use kiya toh, return likhna padega.
        // () - Ko use kiya toh, return nhi likhna padega.
*/


// Single Parameter :
const addTwo5 = num1 => num1 + 10;
console.log(addTwo5(10)); // 20


// No Parameter :
const addTwo6 = () => 10 + 40;
console.log(addTwo6()); // 50