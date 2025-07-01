// if-else Statement :

/* SYNTAX :
    if (condition) {
        // code to be executed if condition is true
    } else {
        // code to be executed if condition is false
    };
*/


let temperature = 30;

if (temperature > 25) {
  console.log("Temperature is above 25 degrees.");
} else {
  console.log("Temperature is below 25 degrees.");
}; 
// Condition is true, so 'if' part will be executed, "Temperature is above 25 degrees."

temperature = -10;

if (temperature > 25) {
  console.log("Temperature is above 25 degrees.");
} else {
  console.log("Temperature is below 25 degrees.");
}; 
// Condition is false, so 'else' part will be executed, "Temperature is below 25 degrees."



// Nested if-else Statement :

let age = 20;

if (age >= 18) {
  console.log("You are an adult");
  if (age >= 21) {
    console.log("You can drink alcohol.");
  } else {
    console.log("You cannot drink alcohol yet.");
  };
} else {
    console.log("You are a minor.");
};
// "You are an adult"
// "You cannot drink alcohol yet."



// Short-hand if-else Statement (Implicit Scope) :

let balance = 500;
if (balance > 1000) console.log("Sufficient balance");
else console.log("Insufficient balance");
// "Insufficient balance"

if (balance < 1000) console.log("No 10% discount");
else console.log("10% discount available");
// "No 10% discount"