console.log(2 > 3);  // false
console.log(2 < 3);  // true
console.log(2 >= 3); // false
console.log(2 <= 3); // true
console.log(2 == 3); // false
console.log(2 != 3); // true

console.log("2" > 1);  // true
console.log("02" > 1); // true
// String "2" is converted to number 2, so 2 > 1 is true

/* Kabhi kabhi iss wajah se predictable result nhi ata h,
   Isliye comparison mein hamesha same data type ka use karna chahiye !!
*/

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
// null is treated as 0 in comparisons
 

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// undefined is not treated as 0 in comparisons


console.log("2" == 2);  // true
console.log("2" === 2); // false

/* "==" operator checks for value equality with type coercion,
   while "===" checks for both value and type equality.
*/

console.log(null == undefined);  // true
console.log(null === undefined); // false
// null and undefined are loosely equal but not strictly equal