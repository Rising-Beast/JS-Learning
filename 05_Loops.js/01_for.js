// for Loop :

/* SYNTAX :
        for (initialization; condition; increment/decrement/value change) {
            // code to be executed 
        };
*/

/* WORKFLOW :
        1. Initialization: This is executed once at the beginning.
        2. Condition: Before each iteration, this condition is checked.
        3. Code Block: If the condition is true, the code block is executed.
        4. Increment/Decrement/Value Change: After executing the code block, this part is executed.
        5. Repeat: The process repeats until the condition becomes false.
*/



for (let i = 0; i < 4; i++) {
    const element = i;
    console.log(element);
};
/* Output :
        0
        1
        2
        3
*/



for (let i = 1; i < 10; i++) {
        const element = i;
        if (element % 2 == 0) {
                console.log(`Even number: ${element}`);
        };
};
/* Output :
        Even number: 0
        Even number: 2
        Even number: 4
        Even number: 6
        Even number: 8
*/



for (let i = 1; i < 10; i++) {
        const element = 57 * i;
        console.log(`57 x ${i} = ${element}`);
};
/* Output :
        57 x 1 = 57
        57 x 2 = 114
        57 x 3 = 171
        57 x 4 = 228
        57 x 5 = 285
        57 x 6 = 342
        57 x 7 = 399
        57 x 8 = 456
        57 x 9 = 513
*/



let myArray = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        console.log(element);
};
/* Output :
        "Ironman"
        "Captain America"
        "Thor"
        "Hulk"
        "Black Widow"
        "Hawkeye"
*/


for (let index = 0; index <= myArray.length; index++) {
        const element = myArray[index];
        console.log(element);
};
/* Output :
        "Ironman"
        "Captain America"
        "Thor"
        "Hulk"
        "Black Widow"
        "Hawkeye"
        undefined
*/

// Array ki Boundary se bahar gye toh, hame undefined milega.



// break Statement :
// The break statement is used to exit a loop prematurely when a certain condition is met.

for (let i = 1; i <= 20; i++) {
        if (i == 5) {
                console.log("Breaking the loop at i = 5");
                break;
        };
        console.log(`Value of i is ${i}`);
};
/* Output :
        Value of i is 1
        Value of i is 2
        Value of i is 3
        Value of i is 4
        Breaking the loop at i = 5
*/



// continue Statement :
// The continue statement skips the current iteration of the loop and moves to the next iteration.

for (let i = 1; i <= 10; i++) {
        if (i == 5) {
                console.log("Skipping the iteration at i = 5");
                continue;
        };
        console.log(`Value of i is ${i}`);
};
/* Output :
        Value of i is 1
        Value of i is 2
        Value of i is 3
        Value of i is 4
        Skipping the iteration at i = 5
        Value of i is 6
        Value of i is 7
        Value of i is 8
        Value of i is 9
        Value of i is 10
*/