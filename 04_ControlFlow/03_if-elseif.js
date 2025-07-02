// if-elseif or if-elseif-else Statement :

/* SYNTAX :
    if (condition) {
        // code to be executed if condition is true
    } elseif (anotherCondition) {
        // code to be executed if anotherCondition is true
    } else {
        // code to be executed if both conditions are false
    };
*/


let balance = 650;

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
};
// "Less than 750"


balance = 1000;

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else {
  console.log("Less than 1200");
};
// "Less than 1200"



// Nested if-else-if Statement :

let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  if (score === 85) {
    grade = "B+";
  } else {
    grade = "B";
  };
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "Fail";
};
console.log(`Your grade is = ${grade}`);
// "Your grade is = B+"



// Short-hand if-elseif Statement (Implicit Scope) :

balance = 10000;

if (balance === 10000) console.log("You can buy Mobile Phone");
else if (balance === 5000) console.log("You can buy a Water Filter");
else if (balance === 2000) console.log("You can buy a Mixer Grinder");
else console.log("You cannot buy anything");
// "You can buy Mobile Phone"

balance = 2000;

if (balance === 10000) console.log("You can buy Mobile Phone");
else if (balance === 5000) console.log("You can buy a Water Filter");
else if (balance === 2000) console.log("You can buy a Mixer Grinder");
else console.log("You cannot buy anything");
// "You can buy a Mixer Grinder"

balance = 100;

if (balance === 10000) console.log("You can buy Mobile Phone");
else if (balance === 5000) console.log("You can buy a Water Filter");
else if (balance === 2000) console.log("You can buy a Mixer Grinder");
else console.log("You cannot buy anything");
// "You cannot buy anything"