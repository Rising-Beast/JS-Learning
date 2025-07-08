// forEach Function (behaves like a loop) :

/* BEST FOR :
        - Performing an operation on each item of an array, clean and functional style.
    
    BEST USE CASE :
        - When you want a functional, clean loop.
        - When you need to perform an action for each element in an array without modifying the original array.
        - When you want to iterate over an array without needing the index or the ability to break or continue the loop.
        - When you want to execute a function for each element in an array.
*/

/* SYNTAX :
        // Normal Callback Function :

        arrayName.forEach( function (element, index, array) {
            // code to be executed
        } );


        // Arrow Callback Function :

        arrayName.forEach( (element, index, array) => {
            // code to be executed
        } );
*/

/* Default 'forEach' Structure :

        arrayName.forEach( (element, index, array) => {
            // code to be executed
        } );
    
    // Yahan 'arrayName' kisi bhi array ko refer karta hai. 'element' har ek item hai, 'index' uska index hai, aur 'array' poora array hai.
*/


/* NOTE :
        forEach() ko ham ek Anonymous (un-named) function dete hain jo har ek element par execute hota hai.
        forEach() khud ek function hai, and isme ek function pass karte hein as it's argument, isliye jiss function ko pass kiye hein usse callback function bhi kaha jata hai.
*/



const coding = [ "js", "ts", "py", "rb", "sw", "cpp" ];

// Callback Function :
coding.forEach( function (element) {
    console.log(element);
} );
/* Output :
        "js"
        "ts"
        "py"
        "rb"
        "sw"
        "cpp"
*/

// Arrow Callback Function :
coding.forEach( (element => {
    console.log(element);
}) );
/* Output :
        "js"
        "ts"
        "py"
        "rb"
        "sw"
        "cpp"
*/

// Passing Function as a Reference :
function printElement(element) {
    console.log(element);
};
coding.forEach(printElement);
/* Output :
        "js"
        "ts"
        "py"
        "rb"
        "sw"
        "cpp"
*/

// coding.forEach(printElement()); Ye error dega, kyuki 'printElement()' function ko execute kar rha hai, jo ki forEach ke liye sahi nahi hai.



coding.forEach((element, index, arr) => {
    console.log(element, index, arr);
} );
/* Output :
        "js" 0 [ 'js', 'ts', 'py', 'rb', 'sw', 'cpp' ]
        "ts" 1 [ 'js', 'ts', 'py', 'rb', 'sw', 'cpp' ]
        "py" 2 [ 'js', 'ts', 'py', 'rb', 'sw', 'cpp' ]
        "rb" 3 [ 'js', 'ts', 'py', 'rb', 'sw', 'cpp' ]
        "sw" 4 [ 'js', 'ts', 'py', 'rb', 'sw', 'cpp' ]
        "cpp" 5 [ 'js', 'ts', 'py', 'rb', 'sw', 'cpp' ]
*/



const myCoding = [
    {
        languageName: "JavaScript",
        languageFileExtension: ".js"
    },
    {
        languageName: "Python",
        languageFileExtension: ".py"
    },
    {
        languageName: "C++",
        languageFileExtension: ".cpp"
    }
];

myCoding.forEach( (element) => {
    console.log(`Language Name: ${element.languageName} and it's File Extension: ${element.languageFileExtension}`);
} );
/* Output :
        "Language Name: JavaScript and it's File Extension: .js"
        "Language Name: Python and it's File Extension: .py"
        "Language Name: C++ and it's File Extension: .cpp"
*/