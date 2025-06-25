/* JavaScript mein memory types do prakar ke hote hain:
        1) Stack Memory  // Stack Memory mein primitive data types store hote hain.
        2) Heap Memory  // Heap Memory mein non-primitive data types store hote hain.
*/

/* 1. Stack Memory (Primitive Types)
        //Fast access, fixed size allocation
        //Stores primitive data types (numbers, strings, booleans, etc.)
        //Works in LIFO (Last-In-First-Out) order
        //Variables store actual values (not references)

    // Stack Memory mein store hoti h, toh hame variable ka ek copy milta hai.
    // Isliye, agar variable ki value change karte hain, toh dusre variable par effect nahi hota.
*/

/* 2. Heap Memory (Reference Types)
        //Dynamic allocation, slower access
        //Stores objects, arrays, functions
        //Variables store references (not actual values)
        //Changes affect all references
    
    // Heap Memory mein store hoti h, toh hame variable ka reference milta hai.
    // Isliye, agar variable ki value change karte hain, toh dusre variable par bhi effect hota hai.
*/


let myName = "Sai Ayushman Padhy";
let anotherName = myName; // Stack Memory mein copy banega
anotherName = "Rising Beast"; // Isse myName par koi effect nahi hoga
console.log(myName); // Sai Ayushman Padhy
console.log(anotherName); // Rising Beast

/* Jab hamne "anotherName" ko "myName" se assign kiya,
   toh Stack Memory mein "myName" ka ek copy bana.
   Isliye, jab ham "anotherName" ki value change karte hain,
   toh "myName" par koi effect nahi hota.
*/


let userOne = {
    name: "Sai Ayushman Padhy",
    age: 20
};
let userTwo = userOne; // Heap Memory mein reference milega
userTwo.name = "Rising Beast"; // Isse userOne par bhi effect hoga
console.log(userOne.name); // Rising Beast
console.log(userTwo.name); // Rising Beast

/* Jab hamne "userTwo" ko "userOne" se assign kiya,
   toh Heap Memory mein "userOne" ka reference mila,
   matlab dono variables same object ko point kar rahe hain.
   Isliye, jab ham "userTwo" ki properties change karte hain,
   toh "userOne" par bhi effect hota hai.
*/