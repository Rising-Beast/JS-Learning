const user1 = new Object(); 
console.log(user1);  // {} (empty object)
// user1 is a Singleton Object.

const user2 = {};
console.log(user2);  // {} (empty object)
// user2 is a Non-singleton Object.



const instaUser = {};
instaUser.id = "123abc";
instaUser.name = "Sai Ayushman Padhy";
instaUser.email = "sai@gmail.com";
instaUser.age = 20;
instaUser.isLoggedIn = true;

console.log(instaUser);

/* Output :
        {
          id: '123abc',
          name: 'Sai Ayushman Padhy',
          email: 'sai@gmail.com',
          age: 20,
          isLoggedIn: true
        }
*/



const regularUser = {
    email: "sai@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sai",
            lastName: "Ayushman"
        }
    }
};

console.log(regularUser.fullName);  // { userFullName: { firstName: 'Sai', lastName: 'Ayushman' } }
console.log(regularUser.fullName.userFullName);  // { firstName: 'Sai', lastName: 'Ayushman' }
console.log(regularUser.fullName.userFullName.firstName);  // Sai
console.log(regularUser.fullName.userFullName.lastName);   // Ayushman



const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

let obj4 = { obj1, obj2 };
console.log(obj4);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// assign(target, ...sources) - Merge multiple objects from different sources into one target.
obj4 = Object.assign(obj1, obj2);
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// obj1 is modified.

obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// Here obj1 & obj2 is copied to the empty object {}.

obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// Here obj1 & obj2 & obj3 is copied to the empty object {}.


obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



const users = [
    {
        id: 1,
        email: "sai@gmail.com"
    },
    {
        id: 2,
        email: "ayushman@gmail.com"
    },
    {
        id: 3,
        email: "padhy@gmail.com"
    }
];

console.log(users);
/* Output :
        [
          { id: 1, email: 'sai@gmail.com' },
          { id: 2, email: 'ayushman@gmail.com' },
          { id: 3, email: 'padhy@gmail.com' }
        ]
*/

console.log(users[1]); // { id: 2, email: 'ayushman@gmail.com' }

console.log(users[1].email); // "ayushman@gmail.com"



// keys() - Returns an array of object keys.
console.log(Object.keys(instaUser)); // [ 'id', 'name', 'email', 'age', 'isLoggedIn' ]


// values() - Returns an array of object values.
console.log(Object.values(instaUser)); // [ '123abc', 'Sai Ayushman Padhy', 'sai@gmail.com', 20, true ]


// entries() - Returns an array of object entries.
console.log(Object.entries(instaUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sai Ayushman Padhy' ], [ 'email', 'sai@gmail.com' ], [ 'age', 20 ], [ 'isLoggedIn', true ] ]


// hasOwnProperty() - Returns true if the object has the specified property, otherwise false.
console.log(instaUser.hasOwnProperty("isLogged")); // false