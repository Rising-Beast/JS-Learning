function cartPrice(num1) {
    return num1;
};
console.log(cartPrice(100)); // 100
console.log(cartPrice(200, 400, 5000)); // 200



// REST OPERATOR :

// (...) rest operator - Jitne bhi parameters hain, uske baad koi bhi value pass karenge, toh usko array mein convert kar dega.
function calculateCartPrice(...num1) {
    return num1;
};
console.log(calculateCartPrice(100));             // [ 100 ]
console.log(calculateCartPrice(200, 400, 5000));  // [ 200, 400, 5000 ]



/* If we write 2 functions with same name, then the one which is written last will be called. 
   function cartPrice(num1) {
    return num1;
   };
   console.log(cartPrice(100));
   console.log(cartPrice(200, 400, 5000));

   function cartPrice(...num1) {
    return num1;
   };
   console.log(cartPrice(100));
   console.log(cartPrice(200, 400, 5000));  

   -> So the last function will override the first one too, bcuz of same name.
   -> Output :-
        [ 100 ]
        [ 200, 400, 5000 ]
        [ 100 ]
        [ 200, 400, 5000 ]
*/



function priceValue(val1, val2, ...num1) {
    return num1;
};
console.log(priceValue(100));             // []
console.log(priceValue(200, 400, 5000));  // [ 5000 ]
console.log(priceValue(200, 400, 5000, 10000));  // [ 5000, 10000 ]
// Idhar pehle 2 values val1 & val2 mein rahenge, uske baad koi bhi value pass karenge, toh usko array mein convert kar dega.



const user = {
    userName: "Sai Ayushman",
    price: 999,
};
function handleObject(obj) {
    console.log(`Username is ${obj.userName} and price is ${obj.price}.`);
};
handleObject(user); // "Username is Sai Ayushman and price is 999."
handleObject({
    userName: "Aditya",
    price: 399
});                 // "Username is Aditya and price is 399."

// Agar object property mein grammatical error h, then uss property output mein undefined deta hai.
/* handleObject({
    user: "Aditya",  // function mein 'userName' h !!
    price: 2999
   }); 
   
   Output :
        "Username is undefined and price is 2999."
*/



const myArray = [200, 400, 100, 600];
function returnSecondValue(arr) {
    return arr[1];
};
console.log(returnSecondValue(myArray)); // 400
console.log(returnSecondValue([100, 200, 300])); // 200