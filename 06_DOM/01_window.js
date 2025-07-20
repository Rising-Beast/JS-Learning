// Window 

/* Window object :
    -> Window object browser ka global object hota hai.
    -> Jab bhi tum JS likhte ho browser mein, sab kuch 'window' ke andar hi run hota hai.
    -> Iske andar browser ke saare useful tools hote hain: alert, console, document, location, etc.
*/

// Global scope ke variables aur functions bhi window ka part hote hain.


/* Common Window Properties/Methods:

        1. alert("msg")             → Popup show karta hai
        2. prompt("msg")            → User se input leta hai
        3. confirm("msg")           → OK / Cancel dialog
        4. console.log()            → Console pe message dikhata hai
        5. setTimeout(fn, ms)       → Delay ke liye
        6. setInterval(fn, ms)      → Repeating task
        7. location.href            → URL access/change
        8. window.open(url)         → Naya tab kholta hai
        9. innerWidth/Height        → Window size
        10. window.document         → HTML DOM access
*/



/* DOM (Document Object Model) in JavaScript

    -> Jab HTML page load hota hai, browser ek object-based tree banata hai — jise kehte hain DOM.
    -> DOM = Document Object Model = Web page ka **live object representation**.
    -> So basically web page ka "tree-like structure" jisme har HTML element ek object ban jata hai.
    -> JavaScript ke through DOM ke elements (jaise <div>, <p>, etc.) ko access, edit, delete, ya add kar sakte ho.
*/

/* Example :

        HTML :
        <p id="demo">Hello</p>

        JavaScript :
        document.getElementById("demo").innerText = "Namaste Duniya!";

    // Isse page ka content bina reload kiye change ho gaya!
*/



/* Relationship between window object and DOM :

    1. 'window' object ke andar hota hai 'document' object.
    2. 'document' object se hi hum DOM (HTML elements) access karte hain.
    3. Yaani DOM ko JS se control karne ka entry point = window.document

    Flow is :
        window
         └── document
              └── HTML Elements (DOM)
*/

/* Example :

        window.document.getElementById("demo");
        // or simply
        document.getElementById("demo");

    // Without 'window', hum DOM access nahi kar sakte!
    // window baar-baar likhne ki zarurat nahi, kyunki browser automatically 'window' ko samajh leta hai.
*/



/* NOTE :
        (WINDOW IN BROWSER vs NODE.JS)

        In Browser:
            -> window object exists.
            -> Global scope = window
            -> DOM access = via window.document
            -> UI-related functions like alert(), prompt(), confirm() available.

        In Node.js:
            -> window object exist nahi karta.
            -> Node.js mein global object ka naam hota hai: 'global'
            -> DOM access nahi hota kyunki browser environment hi nahi hai.
            -> alert(), prompt() etc. bhi available nahi hote.

    Node.js:
        console.log(global); // shows global object
    
    // Isliye browser-specific code (jaise document.getElementById) node mein error dega !!!
*/