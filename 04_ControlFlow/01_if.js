// if Statement :

/* SYNTAX :
    if (condition) {
        // code to be executed if condition is true
    };
*/


if (true) {
    console.log("This will always execute because the condition is true.");
}; 
// true wala 'if' hamesha kaam karega.


if (false) {
    console.log("This will never execute because the condition is false.");
};
// false wala 'if' kabhi nahi chalega.



/* Comparison Operators are :
        // ==  (equal to)
        // !=  (not equal to)
        // >   (greater than)
        // <   (less than)
        // >=  (greater than or equal to)
        // <=  (less than or equal to)
        // === (strict equal to, checks value and type)
        // !== (strict not equal to, checks value and type)
*/



if ( 2 == "2") {
  console.log("Executed");
}; 
// "Executed" will be printed because == checks value only, not type.


if ( 2 === "2") {
  console.log("Executed");
}; 
// This will not print anything because === checks both value and type, and they are not the same type (number vs string).



// Nested if Statement :

let a = 200;
let b = 200;

if (a > b) {
  console.log("a is greater than b");
};
if (a <= b) {
  if (a == b) {
    console.log("a is equal to b");
  };
};
// "a is equal to b"



// Short-hand if Statement (Implicit Scope) :

let balance = 2000;
if (balance > 1000) console.log("You have enough balance.");


/* NOT RECOMMENDED :
      const balance = 2000;
      if (balance > 1000) console.log("You have enough balance."), console.log("You can make a purchase.");

      Output :
          "You have enough balance."
          "You can make a purchase."
*/



/* Logical Operators are :
        // &&  (logical AND) -> All conditions must be true.
        // ||  (logical OR) -> At least one condition must be true.
        // !   (logical NOT) -> Reverses the boolean value.
*/



const userLoggedIn = true;
const debitCardAvailable = true;

if (userLoggedIn && debitCardAvailable) {
  console.log("Allowed to make a purchase.");
}
// "Allowed to make a purchase."

if (userLoggedIn && debitCardAvailable && 2 == 3) {
  console.log("Allowed to make a purchase.");
};
// No output


const loggedInfromGoogle = true;
const loggedInfromEmail = false;

if (loggedInfromGoogle || loggedInfromEmail) {
  console.log("User is logged in.");
};
// "User is logged in."

if (loggedInfromGoogle || loggedInfromEmail || 2 === "2") {
  console.log("User is logged in.");
};
// "User is logged in."


const cartPrice = 750;
const minimumCODAmount = 1000;

if (!(cartPrice >= minimumCODAmount)) {
  console.log("Cash on Delivery is not available for this cart amount.");
};
// "Cash on Delivery is not available for this cart amount."



const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`You have the power to ${power} !!`);
};
// "You have the power to fly !!"


/* const score = 200;
   if (score > 100) {
     const power = "fly";
     console.log(`You have the power to ${power} !!`);
   };
   console.log(`You have the power to ${power} !!`);

   Output :-
        ReferenceError: power is not defined

   // 'const' have block scope, so 'power' is not accessible outside of the 'if' block.
*/

/* const score = 200;
   if (score > 100) {
     var power = "fly";
     console.log(`You have the power to ${power} !!`);
   };
   console.log(`You have the power to ${power} !!`);

   Output :-
        "You have the power to fly !!"
        "You have the power to fly !!"

   // 'var' doesn't have block scope, so 'power' is accessible outside of the 'if' block.
*/