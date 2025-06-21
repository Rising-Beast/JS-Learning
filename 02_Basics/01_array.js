// Array is a Non-Primitive data type.

/* Array is a collection of multiple items called elements, which are stored under single variable name.
   Array is a ordered list of values.
*/

// Array mein same value dene se bhi, returned value alag hoti hai.

/* 1. Array is written in brackets [  ].
   2. Array data type is an object.
   3. Array can contain different data types, i.e string, number, boolean, array, etc.
   4. Array is zero based indexing. It starts with zero.
   5. Array is mutable. Iske elements ko change kar sakte hain.
   6. Array elements cannot be accessed using arbitrary strings as index. It is rather accessed using numbers as index.
   7. Once changed its original value will also change because it is non primitive (refrence) type.
   8. Array copy operations create shallow copies. Shallow copy means that the copy is a reference to the original array (point to the same array).
*/

let myArr = [ 10, -91.258, "Sai Ayushman", true, [ undefined, NaN], null ];

console.log(typeof myArr);  // object
console.log(myArr);         // [ 10, -91.258, "Sai Ayushman", true, [ 1, false] ]

console.log(myArr[0]);      // 10
console.log(myArr[1]);      // -91.258
console.log(myArr[2]);      // "Sai Ayushman"
console.log(myArr[3]);      // true
console.log(myArr[4]);      // [ 1, false]
console.log(myArr[4][0]);   // undefined
console.log(myArr[4][1]);   // NaN
console.log(myArr[5]);      // null

const myArr2 = new Array(10);  // Create myArr2 with 10 empty slots
console.log(myArr2);           // [ <10 empty items> ]

const myArr3 = new Array(1, 2, 3, 4, 5);
console.log(myArr3);           // [ 1, 2, 3, 4, 5 ]


myArr = [0, 1, 2, 3, 4, 5];

// push() - element ko array ke last me add karta hai.
console.log(myArr.push(6));         // [ 0, 1, 2, 3, 4, 5, 6 ]


// pop() - last element of array ko remove karta hai.
console.log(myArr.pop());           // [ 0, 1, 2, 3, 4, 5 ]


// unshift() - element ko array ke first me add karta hai.
console.log(myArr.unshift(9));      // [ 9, 0, 1, 2, 3, 4, 5 ]


// shift() - first element of array ko remove karta hai.
console.log(myArr.shift());         // [ 0, 1, 2, 3, 4, 5 ]


// include() - check karta hai ki value present hai ya nahi.
console.log(myArr.includes(2));     // true


// indexOf() - pehli baar value kahan mili, uska index
console.log(myArr.indexOf(5));      // 5
console.log(myArr.indexOf(9));      // -1 (not found)


// join() - array ko string banaata hai.
console.log(myArr.join());          // "0,1,2,3,4,5"
console.log(myArr.join('-'));       // "0-1-2-3-4-5"
// Output is string and not array.


// slice(start, end) - array ko extract karta hai.
console.log(myArr.slice(2, 4));     // [ 2, 3 ]
console.log(myArr.slice(2));        // [ 2, 3, 4, 5 ]
console.log(myArr.slice());         // [ 0, 1, 2, 3, 4, 5 ]
console.log(myArr);                 // [ 0, 1, 2, 3, 4, 5 ]
// Original array modify nhi hota hai.


// splice(start, deleteCount) - array ko extract karta hai.
console.log(myArr.splice(2, 2));    // [ 2, 3 ]
console.log(myArr);                 // [ 0, 1, 4, 5 ]
// Original array modify hota hai.



const marvelHeroes = ["Captain America", "Iron Man", "Thor"];
const dcHeroes = ["Batman", "Superman", "Flash"];

marvelHeroes.push(dcHeroes);    // Array ke andar array add karta hai.
console.log(marvelHeroes);      // [ 'Captain America', 'Iron Man', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ]

marvelHeroes.splice(3,3);
console.log(marvelHeroes);      // [ 'Captain America', 'Iron Man', 'Thor' ]



// concat() - do ya zyada arrays ko jodta hai, naya array return karta hai.
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);         // [ 'Captain America', 'Iron Man', 'Thor', 'Batman', 'Superman', 'Flash' ]


// (...) spread operator - do ya zyada arrays ko jodta hai, naya array return karta hai.
const allHeroes2 = [...marvelHeroes, ...dcHeroes, "Spiderman"];
console.log(allHeroes2);        // [ 'Captain America', 'Iron Man', 'Thor', 'Batman', 'Superman', 'Flash', 'Spiderman' ]
// Any number of arrays ko add kar skte hain.


// isArray() - check karta hai ki array hai ya nahi.
console.log(Array.isArray(marvelHeroes));    // true
console.log(Array.isArray([1, 2, 3]));       // true
console.log(Array.isArray("Sai Ayushman"));  // false


// from() - kisi iterable ya array-like object ko real array mein convert karta hai.
console.log(Array.from("Sai"));                     // [ 'S', 'a', 'i' ]
console.log(Array.from([1, 2, 3]));                 // [ 1, 2, 3 ]
console.log(Array.from(5));                         // [] (Empty array)
console.log(Array.from({0: "a", 1: "b", 2: "c"}));  // [] (Empty array)
// Hame specify karna padega ki object ki keys ya values ko array mein convert karna hai.


// of() - values ko lekar ek naya array banata hai
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));      // [ 100, 200, 300 ]


// flat(depth) - array ko flatten karta hai.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let realAnotherArray = anotherArray.flat(1);
console.log(realAnotherArray);       // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

realAnotherArray = anotherArray.flat(2);
console.log(realAnotherArray);       // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);       // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// Infinity means pura array ko flat kardet hai !