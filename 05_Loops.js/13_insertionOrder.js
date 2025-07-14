// Insertion Order in Array, Object, Map, and Set



// Array :

const fruits = ['apple', 'banana', 'mango'];
fruits.push('kiwi'); 

for (let fruit of fruits) {
  console.log(fruit);
};

/* Output:
      "apple"
      "banana"
      "mango"
      "kiwi"
*/

// Order same as inserted.



// Object :

const obj = {
  b: 'banana',
  a: 'apple',
  3: 'three',
  1: 'one',
  2: 'two',
};

console.log(Object.keys(obj)); 

/* Output:
      [ '1', '2', '3', 'b', 'a' ]
*/

// Number-like keys ('1', '2', '3') are sorted automatically.
// String keys ('b', 'a') remain in insertion order.



// Map :

const myMap = new Map();

myMap.set('b', 'banana');
myMap.set('a', 'apple');
myMap.set(3, 'three');
myMap.set(1, 'one');
myMap.set(2, 'two');

for (let [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

/* Output:
      Key: b, Value: banana
      Key: a, Value: apple
      Key: 3, Value: three
      Key: 1, Value: one
      Key: 2, Value: two
*/

// Map maintains exact insertion order of keys — whether keys are string or number.



// Set :

const mySet = new Set();

mySet.add('banana');
mySet.add('apple');
mySet.add(3);
mySet.add(1);
mySet.add(2);
mySet.add(false);

for (let item of mySet) {
  console.log(item);
};

/* Output:
      "banana"
      "apple"
      3
      1
      2
      false
*/

// Set maintains insertion order, even with mixed types.



/* SUMMARY :

      Array => Insertion order maintained.
      Object => String keys follow insertion order; number-like keys sorted numerically.
      Map => Perfect insertion order (even with mixed types).
      Set => Insertion order maintained, even with mixed types.
*/