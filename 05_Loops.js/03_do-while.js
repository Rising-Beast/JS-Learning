// do....while Loop :

/* SYNTAX :
        initialization;
        do {
            // code to be executed 
            increment/decrement/value change;
        } while (condition);
*/

/* WORKFLOW :
        1. Initialization: This is usually done before the loop starts.
        2. Code Block: The code block is executed at least once before the condition is checked.
        3. Condition: After each iteration, condition is checked.
        4. Repeat: The process repeats until the condition becomes false.
        5. Increment/Decrement/Value Change: This part is usually done inside the code block to ensure the loop eventually terminates.
*/

/* Default 'do....while' Loop Structure :

        do {
            // code to be executed
        } while (condition);
*/



let score = 0;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 5);
/* Output :
        Score is 0
        Score is 1
        Score is 2
        Score is 3
        Score is 4
        Score is 5
*/



score = 8;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 5);
/* Output :
        Score is 8
*/

// The loop executes once even though the condition is false initially.