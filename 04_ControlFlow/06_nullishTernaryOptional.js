// Nullish Coalescing Operator (??) :
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.

let val1;

val1 = 5 ?? 10;
console.log(val1);  // 5

val1 = null ?? 10;
console.log(val1);  // 10

val1 = undefined ?? 10;
console.log(val1);  // 10

val1 = "hello" ?? 15;
console.log(val1);  // "hello"

val1 = null ?? undefined ?? 20;
console.log(val1);  // 20

val1 = null ?? 10 ?? 20;
console.log(val1);  // 10

/* Ye null and undefined ko handle karne keliye banaya gya hai. 
   Kahin baar hamara code, null ya undefined ko handle karne keliye nhi bana hota hai, 
   uss case mein ye operator use hota hai.
   Toh uss jagah ham aur kuch value de skte hain,
   jisse agar left-hand side null ya undefined ho toh right-hand side ki value use ho jayegi.
   Isse code mein error aane ke chances kam ho jate hain.
*/

/* ?? -> Fallback hai.
   A fallback is a default value that your code uses when the expected value is 'undefined' or 'null'.
      -> “Agar value nahi mili, toh ye dusri value le le bhai!”
*/



// Ternary Operator (?) :
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if true, and a value if false.

let iceTeaPrice = 65;
iceTeaPrice >= 80 ? console.log("Ice Tea is expensive") : console.log("Ice Tea is cheap");
// "Ice Tea is cheap"

iceTeaPrice = 250;
iceTeaPrice >= 80 ? console.log("Ice Tea is expensive") : console.log("Ice Tea is cheap");
// "Ice Tea is expensive"


let a = 10;
let b = 20;

a > b ? console.log("a > b") : a == b ? console.log("a = b") : console.log("a < b");
// "a < b"



// Optional Chaining Operator (?.) :
// Optional chaining allows you to safely access deeply nested properties without having to check each level for null or undefined.

let user = {
    name: "Sai",
    address: {
        street: "123 Main St",
        city: "Mumbai"
    }
};
console.log(user.address?.city);     // "Mumbai"
console.log(user.address?.zipcode);  // undefined (no error thrown)


user = {
  name: "Ayushman",
  greet() {
    return "Hello!";
  }
};
console.log(user.greet?.());  // "Hello!"
console.log(user.sayBye?.()); // undefined (no error thrown)