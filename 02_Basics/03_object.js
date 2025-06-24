/* Objects ko 2 ways mein declare karte hain:
        1. Object Literal
                const obj1 = {};
        2. Object Constructor
                const obj2 = new Object();
*/

// Jabhi ham literal syntax se object banate hain, singleton nhi banta hai.


const jsUser = {
    name: "Sai Ayushman Padhy",
    "full name": "Sai Ayushman Padhy",  // "full name" is a key
    age : 20,
    location: "Delhi",
    email: "sai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    lang: "JavaScript"
};


// 2 Ways to Access Object Properties (keys) :
        // 1. Dot Notation
                console.log(jsUser.email);   // sai@gmail.com
        // 2. Bracket Notation
                console.log(jsUser["age"]);  // 20
                // In bracket notation, property name ko hamesha double ya singel quote se wrap karte hain.

// Symbol wali property ko access karne keliye ham bracket notation ka use karte hain.
// MOSTLY HAM DOT NOTATION KA USE KARTE HAIN !!


// console.log(jsUser[email]); // ReferenceError: email is not defined
// console.log(jsUser[age]);   // ReferenceError: age is not defined
// console.log(jsUser."full name"); // SyntaxError: Unexpected string
console.log(jsUser["full name"]); // Sai Ayushman Padhy


const mySymbol = Symbol("id");
let symUser = {
    name: "Sai Ayushman Padhy",
    "full name": "Sai Ayushman Padhy",
    mySymbol: "Value1",   // This is a string key
    age : 20,
    location: "Delhi",
    email: "sai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    lang: "JavaScript"
};
console.log(symUser.mySymbol);         // "Value1"
console.log(typeof symUser.mySymbol);  // string 


/* JS mein object keys baas 2 type ko ho skte hain :
        // 1. String (written inside quotes or sirf agar name likhe hein toh)
        // 2. Symbol (written inside [] brackets)
*/

// mySymbol: "Value1" - This is a string key
// [mySymbol]: "Value1" - This is a symbol key


symUser = {
    name: "Sai Ayushman Padhy",
    "full name": "Sai Ayushman Padhy",
    [mySymbol]: "Value1",   // This is a symbol key
    age : 20,
    location: "Delhi",
    email: "sai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    lang: "JavaScript"
};
console.log(symUser[mySymbol]);         // "Value1"
console.log(typeof symUser[mySymbol]);  // string 

// console.log(symUser.[mySymbol]); // SyntaxError
// console.log(symUser.mySymbol);   // undefined

/* symUser internally aise store hota hai :

   {
     name: 'Sai Ayushman Padhy',
     'full name': 'Sai Ayushman Padhy',
     age: 20,
     location: 'Delhi',
     email: 'sai@gmail.com',
     isLoggedIn: false,
     lastLoginDays: [ 'Monday', 'Saturday' ],
     lang: 'JavaScript',
     [Symbol(id)]: 'Value1'  // mySymbol ke jagah direct woh unique symbol aa gya idhar !!
   }
*/


// MODIFY OBJECT PROPERTY
jsUser.email = "saiayushmanpadhy@gmail";
console.log(jsUser.email);   // saiayushmanpadhy@gmail


// ADD NEW OBJECT PROPERTY
jsUser.gender = "male";
console.log(jsUser.gender);  // male


// DELETE OBJECT PROPERTY
delete jsUser.gender;
console.log(jsUser.gender);  // undefined


// freeze(objectName) - Object ke properties ko lock kardeta hai, taki ham iski properties ko change na kar ske.
Object.freeze(jsUser);
jsUser.email = "sai@hotmail";
console.log(jsUser.email);   // saiayushmanpadhy@gmail



symUser = {
    name: "Sai Ayushman Padhy",
    [mySymbol]: "Value1",
    age : 20,
    location: "Delhi"
};
symUser.greeting = function() {
    console.log("Hello JS User !!");
};
symUser.greeting(); // Hello JS User !!
console.log(symUser.greeting);  // [Function (anonymous)]
// Function ka reference aya h, func execute nhi hua hai. (Mtlb greeting property ka value, ek function hai !)
console.log(symUser.greeting()); 
/* Output :
        Hello JS User !!
        undefined
   // symUser.greeting() ke wajah se "Hello JS User !!" print hua h,
   // but symUser.greeting() kuch return nhi karta h,
   // isliye bahar wala console.log, undefined deta hai !
*/


// this.propertyName - Same object ke property ko, agar ussi ke andar access karna h, toh isko use karenge.
symUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name} !!`);
};
symUser.greeting2(); // Hello JS User, Sai Ayushman Padhy !!
console.log(symUser.greeting2()); 
/* Output :
        Hello JS User, Sai Ayushman Padhy !!
        undefined
*/


console.log(symUser);
/* Output :
        {
          name: 'Sai Ayushman Padhy',
          age: 20,
          location: 'Delhi',
          greeting: [Function (anonymous)],
          greeting2: [Function (anonymous)],
          [Symbol(id)]: 'Value1'
       }
*/