// for....of Loop :

/* BEST FOR :
        - Iterating over iterable objects like arrays, strings, maps, sets, etc.
    
    BEST USE CASE :
        - Reading values from an array.
        - Iterating over a string.
        - Looping through Set, Map.
*/

/* SYNTAX :
        for (const iterator of iterable) {
            // code to be executed
        };
*/

/* Default 'for....of' Loop Structure :

        for (const element of object) {
            // code to be executed
        };
    
    // Idhar object kisi bhi iterable object ko refer karta hai, jaise array, string, map, set, etc.
*/



let myArray = [1, 2, 3, 4, 5];

for (const num of myArray) {
    console.log(num);
};
/* Output :
        1
        2
        3
        4
        5
*/



let myString = "Sai Ayushman";

for (const char of myString) {
    console.log(`Each character is: ${char}`);
};
/* Output :
        "Each character is: S"
        "Each character is: a"
        "Each character is: i"
        "Each character is:  "
        "Each character is: A"
        "Each character is: y"
        "Each character is: u"
        "Each character is: s"
        "Each character is: h"
        "Each character is: m"
        "Each character is: a"
        "Each character is: n"
*/



const map = new Map();

map.set("IN", "India");
map.set("US", "United States");
map.set("CA", "Canada");


for (const key of map) {
    console.log(key);
};
/* Output :
        [ 'IN', 'India' ]
        [ 'US', 'United States' ]
        [ 'CA', 'Canada' ]
*/


for (const key of map.keys()) {
    console.log(key);
};
/* Output :
        "IN"
        "US"
        "CA"
*/


for (const [key] of map) {
    console.log(key);
};
/* Output :
        "India"
        "United States"
        "Canada"
*/


for (const [key, value] of map) {
    console.log(key, "=", value);
};
/* Output :
        "IN = India"
        "US = United States"
        "CA = Canada"
*/



const myObject = {
    "game 1" : "Need for Speed",
    "game 2" : "Call of Duty",
    "game 3" : "FIFA"
};

/* for (const [key, value] of map) {
       console.log(key, "=", value);
   };

   // TypeError: myObject is not iterable
*/