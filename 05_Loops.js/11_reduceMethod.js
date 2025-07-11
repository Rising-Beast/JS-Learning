// reduce(callback, initialValue) - Loops through the array from left-to-right and single value return karta hai.

const myNum = [1, 2, 3, 4, 5];

let myTotal = myNum.reduce( function (accumulator, currentValue) {
    console.log(`Storage: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log(myTotal);
/* Output :
        Storage: 0, Current Value: 1
        Storage: 1, Current Value: 2
        Storage: 3, Current Value: 3
        Storage: 6, Current Value: 4
        Storage: 10, Current Value: 5
        15
*/


myTotal = myNum.reduce((acc, cVal) => acc + cVal, 10);
console.log(myTotal);  // 25 (initial value 10 is added to the sum)


const myChar = ['a', 'b', 'c', 'd'];
console.log(myChar.reduce((acc, val) => acc + val));  // "abcd"


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);  // 22996



// reduceRight() - Loops through the array from right-to-left and single value return karta hai.

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.reduceRight((acc, x) => acc + x, 0));  // 15


myArray = ['a', 'b', 'c', 'd'];
console.log(myArray.reduceRight((acc, val) => acc + val));  // "dcba"