let myArray;


// STATIC PROPERTY are :

// 1. length - Array ke length property.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
console.log(myArray.length);    // 7



// STATIC METHODS are :

// 1. from() - Kisi iterable ya array-like object ko real array mein convert karta hai.
console.log(Array.from("Sai"));                      // [ 'S', 'a', 'i' ]
console.log(Array.from([1, 2, 3]));                  // [ 1, 2, 3 ]
console.log(Array.from(5));                          // [] (Empty array)
console.log(Array.from({0: "a", 1: "b", 2: "c"}));   // [] (Empty array)
// Hame specify karna padega ki object ki keys ya values ko array mein convert karna hai.
console.log(Array.from({length: 3}));                // [undefined, undefined, undefined]
console.log(Array.from([1, 2, 3], x => x * 2));      // [2, 4, 6]
// x => x * 2 is a callback function written using arrow function which multiplies each element of the array by 2.


// 2. fromAsync() - Asynchronous iterable ko array mein convert karta hai (modern browsers).
// (Note: async function ke andar hi use hota hai.)
async function* asyncGen() {
    yield 1;
    yield 2;
    yield 3;
};
const result = await Array.fromAsync(asyncGen());
console.log(result); // [1, 2, 3]
// Yahaan asyncGen() (An asynchronous generator function that yields a sequence of numbers.) ek async iterable hai aur Array.fromAsync() usse resolve karta hai and usko bana deta hai [1, 2, 3]


// 3. isArray() - Check karta hai ki value array hai ya nahi.
myArray = [true, 89, "hello", {name: "Sai"}];
console.log(Array.isArray(myArray));            // true
console.log(Array.isArray([1, 2, 3]));          // true
console.log(Array.isArray("Sai Ayushman"));     // false
console.log(Array.isArray(["Sai Ayushman"]));   // true


// 4. of() - Values ko lekar ek naya array banata hai.
console.log(Array.of(1, 2, 3));               // [1, 2, 3]
console.log(Array.of(5));                     // [5]

let score1 = 100;
let score2 = 200;
let team = "RedBull";
console.log(Array.of(score1, score2, team));  // [ 100, 200, 'RedBull' ]



// INSTANCE METHODS are :


// A. ACCESS METHODS

// 1. at(index) - Positive ya negative index se element deta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
console.log(myArray.at(2));   // "abc"
console.log(myArray.at(-1));  // true
console.log(myArray.at(100)); // undefined


// 2. concat() - Do ya zyada arrays ko jodta hai, naya array return karta hai.
let arr = [1, 2, 3, 4, 5];
let newArr = myArray.concat(arr);
console.log(newArr);   // [1, 2, "abc", 4, null, {hero : "Sai"}, true, 1, 2, 3, 4, 5]

newArr = arr.concat([6, 7]);
console.log(newArr);   // [1, 2, 3, 4, 5, 6, 7]


// 3. includes(value) - Check karta hai ki value present hai ya nahi.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
console.log(myArray.includes(2));    // true
console.log(myArray.includes(100));  // false


// 4. indexOf(value) - Pehli baar value kahan mili, uska index.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
console.log(myArray.indexOf(2));      // 1
console.log(myArray.indexOf("Sai"));  // -1 (not found)


// 5. lastIndexOf(value) - Last time value kahan mili, uska index.
myArray = [1, 2, "abc", true, 1];
console.log(myArray.lastIndexOf(1));      // 4
console.log(myArray.lastIndexOf("Sai"));  // -1 (not found)


// 6. join(separator) - Array ko string banaata hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
console.log(myArray.join());      // "1,2,abc,4,,[object Object],true"

myArray = [1, 2, "abc", true, 1];
console.log(myArray.join("-"));   // "1-2-abc-true-1"


// 7. entries() - Array ke [index, value] pairs ka iterator deta hai.
myArray = [1, 2, "abc", true];
console.log(myArray.entries());  // Object [Array Iterator] {}

let iterator = myArray.entries();
for (const element of iterator) {
  console.log(element);
};
/* Output:
     [0, 1]
     [1, 2]
     [2, "abc"]
     [3, true]
*/


// 8. keys() - Array ke indexes ka iterator.
myArray = [1, 2, "abc", true];
console.log(myArray.keys());  // Object [Array Iterator] {}

iterator = myArray.keys();
for (const key of iterator) {
  console.log(key);
};
/* Output:
     0
     1
     2
     3
*/


// 9. values() - Array ke values ka iterator.
myArray = [1, 2, "abc", true];
console.log(myArray.values());  // Object [Array Iterator] {}

iterator = myArray.values();
for (const value of iterator) {
  console.log(value);
};
/* Output:
     1
     2
     "abc"
     true
*/


// 10. toString() - Array ko comma-separated string mein convert karta hai.
myArray = [1, 2, "abc", true];
console.log(myArray.toString());  // "1,2,abc,true"


// 11. toLocaleString() - Locale-specific string representation.
myArray = [1234589.678];
console.log(myArray.toLocaleString('en-IN'));   // "12,34,589.678"

myArray = [123456.789, 98765.43];
console.log(myArray.toLocaleString('en-IN', {
  style: "currency",
  currency: "INR"
}));                                            // "₹1,23,456.79,₹98,765.43"


// 12. slice(startIndex, endIndex) - Array ko start se end tak slice karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
console.log(myArray.slice(1, 4));   // [2, "abc", 4]
// endIndex is not included in the result.



// B. MUTATOR METHODS 

// 1. splice(startIndex, deleteCount, ...items) - Delete/Add karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.splice(2, 1, 99);
console.log(myArray);   // [1, 2, 99, 4, null, {hero : "Sai"}, true]

myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.splice(2, 3, "hello");
console.log(myArray);   // [ 1, 2, 'hello', { hero: 'Sai' }, true ]

myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.splice(2, 3, "hello", "my", "world");
console.log(myArray);   // [ 1, 2, 'hello', 'my', 'world', { hero: 'Sai' }, true ]

myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.splice(2, 1, 99, 1000);
console.log(myArray);   // [ 1, 2, 99, 1000, 4, null, { hero: 'Sai' }, true ]


// 2. push(value) - End mein add karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.push(6);
console.log(myArray);   // [1, 2, "abc", 4, null, {hero : "Sai"}, true, 6]


// 3. pop() - End se remove karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.pop();
console.log(myArray);   // [1, 2, "abc", 4, null, {hero : "Sai"}]


// 4. shift() - Starting se remove karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.shift();
console.log(myArray);   // [2, "abc", 4, null, {hero : "Sai"}, true]


// 5. unshift(value) - Starting mein add karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.unshift(0);
console.log(myArray);   // [0, 1, 2, "abc", 4, null, {hero : "Sai"}, true]


// 6. sort() - Elements ko sort karta hai by converting all elements to strings.
      /* default - Sort in Ascending order.
         ((a, b) => a - b) - Sort in Ascending order.
         ((a, b) => b - a) - Sort in Descending order.
      */
myArray = [3, 1, 10, 5, 2];
myArray.sort();
console.log(myArray);    // [1, 2, 3, 5, 10]
myArray.sort((a, b) => b - a);
console.log(myArray);    // [10, 5, 3, 2, 1]
// sort is not a stable sort, it doesn't preserve the order of equivalent elements.

myArray = ['Charlie', 'Alice', 'Bob'];
myArray.sort((a, b) => b - a); // b - a is not applicable on strings (returns NaN)
console.log(myArray);    // ['Charlie', 'Bob', 'Alice']
myArray.sort();
console.log(myArray);    // ['Alice', 'Bob', 'Charlie']


// 7. reverse() - Elements ko reverse karta hai.
myArray = [1, 2, "abc", 4, null, {hero : "Sai"}, true];
myArray.reverse();
console.log(myArray);    // [true, { hero: 'Sai' }, null, 4, "abc", 2, 1]


// 8. fill(value, startIndex, endIndex) - Array ko values se bhar deta hai.
myArray = [1, 2, 3, 4, 5];
console.log(myArray.fill(0, 1, 3));  // [1, 0, 0, 4, 5]
// endIndex is not included.

/* If start index is not provided, it is 0 by default.
   If end index is not provided, it is taken as the length of the string or array.
*/


// 9. copyWithin(target, startIndex, endIndex) - Ek part ko copy karke dusre jagah daalta hai.
myArray = [1, 2, 3, 4, 5];
console.log(myArray.copyWithin(1, 2, 4));  // [1, 3, 3, 4, 5]

myArray = [1, 2, 3, 4, 5];
console.log(myArray.copyWithin(1, 2));    // [1, 3, 4, 5, 5]

/* If start index is not provided, it is 0 by default.
   If end index is not provided, it is taken as the length of the string or array.
*/


// C. NON-MUTATOR MODERN METHODS
// Non-mutator methods are those methods that don't change the original array.
let nums = [1, 2, 3];

// 1. toReversed() - reverse() ka non-mutating version.
console.log(nums.toReversed());  // [3, 2, 1]


// 2. toSorted() - sort() ka non-mutating version.
console.log(nums.toSorted((a, b) => b - a));  // [3, 2, 1]


// 3. toSpliced(startIndex, deleteCount, ...items) - splice() ka non-mutating version.
console.log(nums.toSpliced(1, 1, 9));  // [1, 9, 3]


// 4. with(index, value) - Ek index ki value replace karta hai.
console.log(nums.with(1, 99));  // [1, 99, 3]


// 5. flat(depth) - Nested array ko flat banata hai.
myArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, [true]]]];
console.log(myArray.flat(2));          // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, [ true ] ]
console.log(myArray.flat());           // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5, [ true ] ] ]
// If depth is not provided, it is 1 by default.
console.log(myArray.flat(0));          // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5, [Array] ] ] ]
// If depth is 0, no flattening happens.
// Deep nesting hai isliye last ko [true] ke jagah [array] print hua.
console.log(myArray.flat(Infinity));   // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, true ]
// Infinity means pura array ko flat kardet hai !


// 6. flatMap(callback) - map + flat(1)
myArray = [1, 2, 3, [4, 5, 6]];
console.log(myArray.flatMap(x => [x, x * 2]));  // [ 1, 2, 2, 4, 3, 6, [ 4, 5, 6 ], NaN ]
/* After mapping, we get [ [1, 2], [2, 4], [3, 6], [[4, 5, 6], NaN] ] (Array * Number = NaN)
   After flattening, 1 deep, we get [ 1, 2, 2, 4, 3, 6, [ 4, 5, 6 ], NaN ]
*/



// D. ITERATION METHODS

// CALLBACK FUNCTION - Ek function jo dusre function ko argument ke roop mein diya jaata hai, taki wo baad mein call ho sake — jab kaam pura ho jaaye.

// 1. forEach(callback) - Har element ke liye callback call karta hai.
myArray = [1, 2, "abc", true];
myArray.forEach((val, i) => console.log(i, val));
/* Output:
     0 1
     1 2
     2 "abc"
     3 true
*/


// 2. map(callback) - Har element ko transform karta hai, naya array return karta hai.
myArray = [1, 2, "abc", true];
console.log(myArray.map(x => x * 2));  // [2, 4, NaN, 2]


// 3. filter(callback) - Condition true hone par element return karta hai
myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(x => x % 2 === 0));  // [ 2, 4 ] (even numbers)


// 4. find(callback) - Pehla element jo condition satisfy kare usko return karta hai.
myArray = [1, 2, 3, 4, 5];
console.log(myArray.find(x => x > 2));  // 3


// 5. findIndex(callback) - Pehle match ka index.
myArray = [1, -20, 3, 4, 40];
console.log(myArray.findIndex(x => x > 2));  // 2


// 6. findLast(callback) - Last element jo condition satisfy kare usko return karta hai.
myArray = [1, 2, 3, 4, 5];
console.log(myArray.findLast(x => x % 2 === 1));  // 5


// 7. findLastIndex(callback) - Last match ka index.
myArray = [1, -20, 3, 4, 40];
console.log(myArray.findLastIndex(x => x > 2));  // 4


// 8. some(callback) - Koi ek bhi element satisfy kare toh true.
myArray = [1, -20, 3, 4, 40];
console.log(myArray.some(x => x > 4));     // true
console.log(myArray.some(x => x < -100));  // false


// 9. every(callback) - Sabhi elements satisfy kare toh true.
myArray = [1, -20, 3, 4, 40];
console.log(myArray.every(x => x < 100));   // true
console.log(myArray.every(x => x < -100));  // false


// 10. reduce(callback, initial) - Loops through the array from left-to-right and single value return karta hai.
myArray = [1, 2, 3, 4, 5];
console.log(myArray.reduce((acc, x) => acc + x, 0));   // 15 (Sum of all elements)

myArray = ['a', 'b', 'c', 'd'];
console.log(myArray.reduce((acc, val) => acc + val));  // "abcd"


// 11. reduceRight() - Loops through the array from right-to-left and single value return karta hai.
myArray = [1, 2, 3, 4, 5];
console.log(myArray.reduceRight((acc, x) => acc + x, 0));  // 15 (Sum of all elements)

myArray = ['a', 'b', 'c', 'd'];
console.log(myArray.reduceRight((acc, val) => acc + val));  // "dcba"



// SPREAD OPERATOR :

// (...) spread operator - Do ya zyada arrays ko jodta hai, naya array return karta hai.
const marvelHeroes = ["Captain America", "Iron Man", "Thor"];
const dcHeroes = ["Batman", "Superman", "Flash"];
const hero = [ "Shah Rukh Khan" ];
myArray = [...marvelHeroes, ...dcHeroes, ...hero, "Spiderman"];
console.log(myArray);  // [ 'Captain America', 'Iron Man', 'Thor', 'Batman', 'Superman', 'Flash', 'Shah Rukh Khan', 'Spiderman' ]