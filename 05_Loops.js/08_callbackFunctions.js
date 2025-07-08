/* CALLBACK FUNCTION :

    -> Callback function wo function hota hai jo kisi dusre function ko argument ke roop me diyajata hai.
    -> Jab main function apna kaam kar leta hai, tab wo callback function ko call karta hai.
    -> JavaScript mein, callback functions ka use asynchronous operations (jaise setTimeout, API calls, etc.) aur array methods (forEach, map, filter, etc.) mein bahut hota hai.
    -> Callback function ka fayda yeh hai ki hum code ko modular aur flexible bana sakte hain.
*/


/*  Ye ek scene :

        - Tu ek multiplex gaya movie ticket lene, lekin show full ho gaya hai.
        - Tu box office wale bhaiya se bolta hai:
            “Bhai jab agla show ke tickets available ho jaaye, to mujhe bata dena!”
            (Tera number ya email de diya)
        - Jab agla show ke tickets available ho jaaye, tab box office wale bhaiya tujhe call karenge ya email bhejenge.
        - So ek kaam (next show ke tickets available hona) hone ke baadh, tujhe woh bhaiya callback karenge to do the previous work (movie ka ticket lena).

    -> Ehi hai callback function ka concept hai !
    -> Toh jab bhi tu kisi function ko dusre function ke andar pass karta hai, ya fir kisi specified task ke badh call karta ho, tab wo callback function kehlata hai.

*/



// Simple Callback :

function greet(name, callback) {
    // Pehle kuch kaam karo :-
    console.log("Hello, " + name + "!");
    // Ab callback function ko call karo :-
    callback();
};

function sayBye() {
    console.log("Bye! Have a nice day.");
}

greet("Sai Ayushman", sayBye);

/* Output:
        "Hello, Sai Ayushman!"
        "Bye! Have a nice day."
*/



// Anonymous Callback Function :

function care(name, callback) {
    console.log("Hello, " + name + "!");
    console.log("I hope you are doing well.");
    callback();
};

care("Sai", function() {
    console.log("Take care!");
});

/* Output:
        "Hello, Sai!"
        "I hope you are doing well."
        "Take care!"
*/

// Unnamed function allowed hota hai, agar ham isko directly kisi function ke andar pass karte hain toh. Otherwise function ko naam dena padta hai.



// Callback Function as Arrow Function :

function processNumber(num, callback) {
    const result = num * 2;
    callback(result);
};

processNumber(10, (ans) => {
    console.log("Double number: " + ans);
});

/* Output:
        Double number: 20
*/



// Callback in forEach :

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log("Number hai: " + num);
});

/* Output:
        Number hai: 1
        Number hai: 2
        Number hai: 3
        Number hai: 4
        Number hai: 5
*/



/* setTimeout with Callback Function :

        setTimeout(function() {
            console.log("3 seconds baad yeh message aayega :");
            console.log("Hello World!");
        }, 3000);

        Output (3 seconds ke baad) :
                3 seconds baad yeh message aayega :
                Hello World!
*/



// Example of Callback in Real Life Scenario :

function bookTicketWhenAvailable(callKarnaBhai) {
    console.log("Filhal show full hai bhai...");

    setTimeout(() => {
        console.log("Ab seat available hai! Bhai sunn...");
        callKarnaBhai(); // yeh tera diya hua callback
    }, 5000); // simulate 5 second wait
};

function onTicketAvailable() {
    console.log("Seat availabe hai bhai !? Sach mein kya !!!! ");
    console.log("Chal bhai ticket leke entry maarte hain !!");
};

bookTicketWhenAvailable(onTicketAvailable);

/* Output :
        Filhal show full hai bhai...
        (5 seconds baad)
        Ab seat available hai! Bhai sunn...
        Seat availabe hai bhai !? Sach mein kya !!!!
        Chal bhai ticket leke entry maarte hain !!
*/



/* NOTE :
    1. Callback function ko hum named ya anonymous (bina naam ka) bana sakte hain.
    2. Callback function synchronous (turant chalne wale) ya asynchronous (baad mein chalne wale) dono ho sakte hain.
    3. JavaScript mein callback functions bahut important concept hai, especially jab aapko kisi kaam ke complete hone ke baad kuch aur karna ho.
*/