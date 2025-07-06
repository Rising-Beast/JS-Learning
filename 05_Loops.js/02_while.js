// while Loop :

/* SYNTAX :
        initialization;
        while (condition) {
            // code to be executed 
            increment/decrement/value change;
        };
*/

/* WORKFLOW :
        1. Initialization: This is usually done before the loop starts.
        2. Condition: Before each iteration, this condition is checked.
        3. Code Block: If the condition is true, the code block is executed.
        4. Repeat: The process repeats until the condition becomes false.
        5. Increment/Decrement/Value Change: This part is usually done inside the code block to ensure the loop eventually terminates.
*/

/* Default 'while' Loop Structure :

        while (condition) {
                // code to be executed
        };
*/



let index = 0;

while (index <= 10) {
        console.log(`Value of index: ${index}`);
        index += 2; // index = index + 2
};
/* Output :
        Value of index: 0
        Value of index: 2
        Value of index: 4
        Value of index: 6
        Value of index: 8
        Value of index: 10
*/



let myArray = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

let arrayIndex = 0;

while (arrayIndex < myArray.length) {
        console.log(`Element at index ${arrayIndex} is ${myArray[arrayIndex]}`);
        arrayIndex++;
};
/* Output :
        "Element at index 0 is Ironman"
        "Element at index 1 is Captain America"
        "Element at index 2 is Thor"
        "Element at index 3 is Hulk"
        "Element at index 4 is Black Widow"
        "Element at index 5 is Hawkeye"
*/



let count = 0;

while (count < 10) {
        if (count == 5) {
                console.log("Count reached 5, breaking the loop.");
                break;
        };
        console.log(`Count is: ${count}`);
        count = count + 1;
        
};
/* Output :
        Count is: 0
        Count is: 1
        Count is: 2
        Count is: 3
        Count is: 4
        Count reached 5, breaking the loop.
*/