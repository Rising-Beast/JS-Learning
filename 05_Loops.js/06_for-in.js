// for....in Loop :

/* BEST FOR :
        - Enumerating keys (property names) of objects (or arrays if you need the indexes).
    
    BEST USE CASE :
        - Looping over properties of an object.
        - Reading keys from an object.
        - Iterating over an array's indexes.
*/

/* SYNTAX :
        for (const key in object) {
            // code to be executed
        };
*/

/* Default 'for....in' Loop Structure :

        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const element = object[key];
                // code to be executed
            };
    };
    
    // Idhar object kisi bhi iterable object ko refer karta hai, jaise array, string, map, set, etc.
*/



const myObject = {
    "js" : "javaScript",
    "ts" : "TypeScript",
    "py" : "Python",
    "rb" : "Ruby",
    "sw" : "Swift by Apple",
    "cpp" : "C++"
};


for (const key in myObject) {
    console.log(key);
};
/* Output :
        "js"
        "ts"
        "py"
        "rb"
        "sw"
        "cpp"
*/


for (const key in myObject) {
    console.log(myObject[key]);
};
/* Output :
        "javaScript"
        "TypeScript"
        "Python"
        "Ruby"
        "Swift by Apple"
        "C++"
*/


for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`);
};
/* Output :
        "js is short for javaScript"
        "ts is short for TypeScript"
        "py is short for Python"
        "rb is short for Ruby"
        "sw is short for Swift by Apple"
        "cpp is short for C++"
*/



const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Ruby", "Swift", "C++"];

for (const index in programmingLanguages) {
    console.log(index);
};
/* Output :
        0
        1
        2
        3
        4
        5
*/

// Array ke bhi keys hote hain, jaise 0, 1, 2, 3, 4, 5, etc. Jo array ke elements ko refer karte hain. Inko ham 'index' kehte hain.


for (const index in programmingLanguages) {
    console.log(programmingLanguages[index]);
};
/* Output :
        "JavaScript"
        "TypeScript"
        "Python"
        "Ruby"
        "Swift"
        "C++"
*/



const map = new Map();

map.set("IN", "India");
map.set("US", "United States");
map.set("CA", "Canada");

for (const key in map) {
    console.log(key);
};
// No output, kyunki Map object ke keys 'for....in' loop se iterate nahi hote.