// Map

// A Map is a collection of key-value pairs, where keys can be of any type — not just strings.
// Maps remember the original insertion order of the keys.



const myMap = new Map();   // Empty Map
console.log(typeof myMap); // object



// set - Add entries to the Map

myMap.set("name", "Sai Ayushman");  // String key and value
myMap.set("age", 21);               // Number value
myMap.set("isStudent", true);       // Boolean value

console.log(myMap); 
// Map(3) { 'name' => 'Sai Ayushman', 'age' => 21, 'isStudent' => true }

let obj = { roll: 38 };
myMap.set(obj, "Custom Object Key"); // Object key
console.log(myMap);
/* Output: 
        Map(4) {
          'name' => 'Sai Ayushman',
          'age' => 21,
          'isStudent' => true,
          { roll: 38 } => 'Custom Object Key'
        }
*/


myMap.set("name", "Sai Ayushman"); // Duplicate — add nahi hoga
console.log(myMap);
/* Output: 
        Map(4) {
          'name' => 'Sai Ayushman',
          'age' => 21,
          'isStudent' => true,
          { roll: 38 } => 'Custom Object Key'
        }
*/


myMap.set("name", "Sai Ayushman Padhy"); // Same key, different value (value override hoga)
console.log(myMap);
/* Output: 
        Map(4) {
          'name' => 'Sai Ayushman Padhy',
          'age' => 21,
          'isStudent' => true,
          { roll: 38 } => 'Custom Object Key'
        }
*/



// get - Get values from the Map

console.log(myMap.get("name"));       // "Sai Ayushman"
console.log(myMap.get(obj));          // "Custom Object Key"
console.log(myMap.get("age"));        // 21
console.log(myMap.get("isStudent"));  // true
console.log(myMap.get("roll"));       // undefined (roll key nahi hai)

console.log(myMap.get({roll: 38}));   // undefined


/* NOTE :

   // In JavaScript, two objects are not equal unless they reference the exact same object in memory , even if their contents are identical.

   // BAD PRACTICE :
            myMap.set({ id: 1}, "ID");    
            console.log(myMap.get({id: 1})); // undefined
            // Ye wali {id: 1} hamari pehle wali object ko refer nhi karta, rather ye ek naya object bn gya hai !!

   console.log({id: 1} === {id: 1}); // false
   // This condition will always return 'false' since JavaScript compares objects by reference, not value.


   // GOOD PRACTICE :
            let obj = { id: 1 };
            myMap.set(obj, "Custom Object Key");
            console.log(myMap.get(obj)); // "Custom Object Key"
*/



// has - Check if a key exists in the Map

console.log(myMap.has("name"));       // true
console.log(myMap.has("email"));      // false
console.log(myMap.has(obj));          // true
console.log(myMap.has({roll: 38}));   // false



// size - Get the number of entries in the Map

console.log(myMap.size); // 4



// delete - Remove an entry from the Map

myMap.delete(obj);
console.log(myMap); // Map(3) { 'name' => 'Sai Ayushman', 'age' => 21, 'isStudent' => true }



// keys - Get an iterator of the keys in the Map

console.log(myMap.keys()); // [Map Iterator] { 'name', 'age', 'isStudent' }



// values - Get an iterator of the values in the Map

console.log(myMap.values()); // [Map Iterator] { 'Sai Ayushman', 21, true }



// clear - Remove all entries from the Map

const map = new Map([
  ["js", "JavaScript"],
  ["ts", "TypeScript"]
]); 
console.log(map); // Map(2) { 'js' => 'JavaScript', 'ts' => 'TypeScript' }

map.clear();
console.log(map.size); // 0
console.log(map);      // Map(0) {}


/* 
   const map = new Map([
     ["js", "JavaScript"],
     ["ts", "TypeScript"]
   ]);

   // [key, value] array, isko ek aur array mein store karke, new Map() ke andar direct de skte hain, to make a Map.
*/