// Date is an object in JavaScript that represents a specific date and time.

/* Date thoda pain point hai js mein,
   isliye Temporal API ke upar experimentation chalu hai !
   Future mein Date keliye ham Temporal API ka hin use karenge !!
*/

// JavaScript stores dates as number of milliseconds since January 01, 1970.

// JS date and time ko UTC mein save karta hai.


const testDate = new Date(); // Current date and time of the local system
console.log(typeof testDate); // object
console.log(testDate); // 2025-06-17T12:56:05.813Z

/* 2025-06-17T12:56:05.813Z
   YYYY-MM-DDThh:mm:ss.sssZ format
   T ek separator hai which means Time.
   . denotes decimal point, iske baadh miliseconds hai.
   Z ek timezone indicator hai.
   Z means "zulu" or UTC (Coordinated Universal Time).
*/

const specificDate = new Date("2025-06-17"); // YYYY-MM-DD is ISO fomrat (international standards)
console.log(specificDate); // 2025-06-17T00:00:00.000Z
// Time specify nhi kiya tha isliye by default exact midnight consider karta hai.

const anotherDate = new Date("10-07-2025"); // MM-DD-YYYY 
console.log(anotherDate); // 2025-10-06T18:30:00.000Z
// Aise by default JS date ko MM-DD-YYYY format mein consider karega.(Not recommended, confusion create karega !!)

const specificDateWithTime = new Date("2025-06-17T12:56:05.813Z");
console.log(specificDateWithTime); // 2025-06-17T12:56:05.813Z

const dateIST = new Date("2025-06-17T12:56:05.813+05:30"); // Time in IST (+05:30)
console.log(dateIST); // 2025-06-17T12:56:05.813Z
// Internally it is converted to UTC (Coordinated Universal Time) format.

const dateTimeHrMinSec = new Date(2025, 5, 17, 12, 56, 5,296); 
// (year, month(0-based), day, hour, minute, second, milliseconds)
console.log(dateTimeHrMinSec); // 2025-06-17T07:26:05.296Z


let istDate = new Date("2025-06-17T14:25:30"); // No "Z" => IST (Local system time)
let utcDate = new Date("2025-06-17T14:25:30Z"); // "Z" => UTC


// GETTING DATE & TIME COMPONENTS :
date = new Date("2025-06-17T14:25:30");

// 1. Date Parts
console.log(date.getFullYear());            // 2025
console.log(date.getMonth());               // 5 - June (0 = January)
console.log(date.getDate());                // 17 - (0 to 31)
console.log(date.getDay());                 // 2 - Tuesday (0 = Sunday)


// 2. Time Parts
console.log(date.getHours());               // 14
console.log(date.getMinutes());             // 25
console.log(date.getSeconds());             // 30
console.log(date.getMilliseconds());        // 0



// TIMESTAMP
console.log(date.getTime());                // 01/01/1970 se time in ms 
console.log(Date.now());                    // Abhi ka timestamp (ms)
console.log(Math.floor(Date.now()/1000));   // Abhi ka timestamp (in sec) 

let timeStamp = date.getTime();
console.log(new Date(timeStamp));           // 2025-06-17T08:55:30.000Z (in UTC for 2025-06-17T14:25:30.000Z)



// TIMEZONE OFFSET IN MINUTES
console.log(date.getTimezoneOffset()); // -330 (Time difference between local system time and UTC in min)
// It's negative for time zones east of UTC (UTC+5:30 → returns -330).
// It’s positive for time zones west of UTC (UTC-7 → returns 420).



// SETTING DATE & TIME COMPONENTS :
date = new Date("2025-06-17T14:25:30");

// 1. Date Parts
date.setFullYear(2027);
date.setMonth(0);
date.setDate(10);

// 2. Time Parts
date.setHours(10); // 2025-06-20T10:25:30.000Z
date.setMinutes(10); // 2025-06-20T14:10:30.000Z
date.setSeconds(10); // 2025-06-20T14:25:10.000Z
date.setMilliseconds(10); // 2025-06-20T14:25:30.010Z

console.log("Updated Date is", date);



// UTC METHODS are :
date = new Date("2025-06-17T14:25:30Z");

// 1. Date Parts
console.log(date.getUTCFullYear());            // 2025
console.log(date.getUTCMonth());               // 5 - June (0 = January)
console.log(date.getUTCDate());                // 17 - (0 to 31)
console.log(date.getUTCDay());                 // 2 - Tuesday (0 = Sunday)


// 2. Time Parts
console.log(date.getUTCHours());               // 14
console.log(date.getUTCMinutes());             // 25
console.log(date.getUTCSeconds());             // 30
console.log(date.getUTCMilliseconds());        // 0


// 3. toUTCString - Returns the date and time in UTC format
console.log(date.toUTCString());               // "Tue, 17 Jun 2025 14:25:30 GMT"
