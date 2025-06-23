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