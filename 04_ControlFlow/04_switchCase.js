// Switch Case Statement :

/* SYNTAX :
    switch (key or expression) {
        case value1:
            // code to be executed if expression matches value1
            break;
        case value2:
            // code to be executed if expression matches value2
            break;
        // more cases...
        default:
            // code to be executed if no case matches
            break;
    };
*/



/* NOTE :
    -> Agar 'break' statement use nhi karenge toh, jiss bhi case match kiya, 
       woh khud aur uske niche wale sabhi cases execute hojayengi. 
       default case bhi execute hojayega !!! 

    -> default case mein 'break' use karna jaruri toh nhi hai, but use karna ek achi practice hai.
*/



// Number value Switch Case :
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month");
        break;
};
// "March"



// String value Switch Case :
const weekDay = "thur";

switch (weekDay) {
    case "mon":
        console.log("Monday");
        break;

    case "tue":
        console.log("Tuesday");
        break;

    case "wed":
        console.log("Wednesday");
        break;

    case "thur":
        console.log("Thursday");
        break;

    case "fri":
        console.log("Friday");
        break;

    case "sat":
        console.log("Saturday");
        break;

    case "sun":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
};
// "Thursday"