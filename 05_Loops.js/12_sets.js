// Sets

// A Set is a built-in JavaScript object that allows you to store unique values of any type — primitive or object references.
// Set automatically removes duplicates, and remembers the order of insertion.



const mySet = new Set();   // Empty set
console.log(typeof mySet); // object



// add - Add values to the Set

mySet.add(10);            // Number
mySet.add("hello");       // String
mySet.add(true);          // Boolean
mySet.add(10);            // Duplicate — add nahi hoga

console.log(mySet);       // Output: Set { 10, 'hello', true }



// has - Check if a value exists in the Set

console.log(mySet.has(10));    // true
console.log(mySet.has(false)); // false



// size - Get the number of unique values in the Set

console.log(mySet.size); // Output: 3



// delete - Remove a value from the Set

mySet.delete("hello");    // 'hello' remove ho gaya

console.log(mySet); // Set(2) { 10, true }



// for....of - Loop through the Set

for (let item of mySet) {
    console.log(item); 
};
// Output : 10, true



// forEach

mySet.forEach((value) => {
    console.log(`Value: ${value}`);
});
/* Output : 
        Value: 10
        Value: true
*/



// clear - Remove all values from the Set

const numberSet = new Set([1, 2, 3, 4, 5, 2]); // Duplicate 2 will be removed

console.log(numberSet.size); //  5
console.log(numberSet);      // Set { 1, 2, 3, 4, 5 }

numberSet.clear();
console.log(numberSet.size); //  0
console.log(numberSet);      // Set(0) {}


/* 
   const numberSet = new Set([1, 2, 3, 4, 5]);

   // [value] ko ek array mein store karke new Set() ke andar direct de skte hain, to make a Set.
*/
