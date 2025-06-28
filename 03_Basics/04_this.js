// this - keyword, current context keliye point karta hai !
const user = {
    userName: "Sai Ayushman",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to our website`);
    }
};
user.welcomeMessage(); // "Sai Ayushman, Welcome to our website"

user.userName = "Aditya";
user.welcomeMessage(); // "Aditya, Welcome to our website"


const user2 = {
    userName: "Sai Ayushman",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${this.userName}, Welcome to our website`);
        console.log(this);
    }
};
user2.welcomeMessage();
/* Output :
        {
          userName: 'Sai Ayushman',
          price: 999,
          welcomeMessage: [Function (anonymous)]
        }
   -> console.log(this), current context kya h, usko ek object ke tarah print karega.
*/


const user3 = {
    userName: "Sai Ayushman",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to our website`);
    }
};
console.log(this);
/* Output :
        {} (empty object)
*/


/* Browser mein console.log(this) karenge, 
   toh browser ke andar window object hin global object hota hai.
   Isliye output mein window object hin milega !

   Node.js mein console.log(this) karenge, 
   toh Node.js mein empty object hin global object hota ha.
   Isliye output mein empty object hin milega !
*/



function chai() {
    console.log(this);
};
chai();
/* Output :
        <ref *1> Object [global] {
            global: [Circular *1],
            clearImmediate: [Function: clearImmediate],
            setImmediate: [Function: setImmediate] {
              [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            clearInterval: [Function: clearInterval],
            clearTimeout: [Function: clearTimeout],
            setInterval: [Function: setInterval],
            setTimeout: [Function: setTimeout] {
              [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            queueMicrotask: [Function: queueMicrotask],
            structuredClone: [Function:     structuredClone],
            atob: [Function: atob],
            btoa: [Function: btoa],
            performance: [Getter/Setter],
            fetch: [Function: fetch],
            navigator: [Getter],
            crypto: [Getter]
        }
*/


function adrakChai() {
    let userName = "Sai Ayushman";
    console.log(this.userName);
};
adrakChai(); // undefined

/* this keyword, baas object ke andar kaam karta hai, 
   functions mein kaam nhi karta hai !!
*/

const adrakChai2 = function () {
    let userName = "Sai Ayushman";
    console.log(this.userName);
};
adrakChai2(); // undefined



// ARROW FUNCTION :
const adrakChai3 = () => {
    let userName = "Sai Ayushman";
    console.log(this.userName);
};
adrakChai(); // undefined

/* this keyword, baas object ke andar kaam karta hai, 
   arrow functions mein kaam nhi karta hai !!
*/

const adrakChai4 = () => {
    console.log(this);
};
adrakChai4(); // {} (empty object)