/* JavaScript ke date formatting methods jaise:
        - toLocaleString()
        - toLocaleDateString()
        - toLocaleTimeString()
    Ye sab hume apne region (locale) ke hisaab se date/time format karne ka mauka dete hain.

   SYNTAX:
        <dateObj>.toLocaleString(<locales>, {options})

        locales => "en-US", "en-IN", "fr-FR", "default" (uses system's format), etc.
        locales => Kis language ke rules mein date and time format hota hain.
        options => object jisme hum customize kar sakte hain:

        1. weekday: "narrow", "short", "long"
        2. year: "2-digit", "numeric"
        3. month: "2-digit", "numeric", "narrow", "short", "long"
        4. day: "2-digit", "numeric"
        5. hour: "2-digit", "numeric"
        6. minute: "2-digit", "numeric"
        7. second: "2-digit", "numeric"
        8. hour12: true/false (12-hr ya 24-hr clock)
        9. timeZone: "Asia/Kolkata", "UTC", etc.
        10. timeZoneName: "short", "long"
        11. era: "narrow", "short", "long"
        12. dateStyle/timeStyle: "full", "long", "medium", "short" (Intl.DateTimeFormat ke liye useful)
    Yeh options mostly toLocaleString, toLocaleDateString, toLocaleTimeString mein kaam karte hain.
*/

/* toString(), toLocaleString(), toLocaleDateString(), toLocaleTimeString(), and Intl.DateTimeFormat all format dates based on the user’s device/system settings — unless you override them. 
*/

let date;


// 1. toLocaleDateString()
date = new Date("2025-06-18T14:25:30");

console.log(date.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})); // "Tuesday, June 18, 2025"

console.log(date.toLocaleDateString("en-IN")); // "18/6/2025"

console.log(date.toLocaleDateString("en-IN", {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
})); // "Tue, 18/06/2025"



// 2. toLocaleTimeString()
date = new Date("2025-06-18T14:25:30");

console.log(date.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata"
})); // "14:25:30"

console.log(date.toLocaleTimeString("default", {
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "long"
})); // "02:25 pm India Standard Time"

console.log(date.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short"
})); // "02:25 PM GMT+5:30"



// 3. toLocaleString()
date = new Date("2025-06-18T14:25:30Z");

console.log(date.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "long",
  era: "short"
})); // "Wednesday, June 18, 2025 AD at 07:55 PM India Standard Time"

console.log(date.toLocaleString("fr-FR", {
  weekday: "short",
  year: "2-digit",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
})); // mer. 18 juin 25, 19:55

console.log(date.toLocaleString("hi-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
})); // "बुधवार, 18 जून 2025 को 07:55 pm बजे"



// ADVANCED CUSTOMIZATION :
date = new Date("2025-10-07T12:00:00+05:30");

/* Intl.DateTimeFormat 
    - Built in JS object used for formatting dates and times in a language-sensitive way.
    - Instead of calling .toLocaleString() on each date, you can create a reusable formatter , which is more efficient — especially when formatting many dates.
*/

const formatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "short"
});
console.log(formatter.format(new Date("2025-06-17T14:25:30Z"))); // "Tuesday, 17 June 2025 at 19:55"

const formatDate = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "full"
});
console.log(formatDate.format(new Date("2025-06-17T14:25:30Z"))); // "Tuesday, 17 June 2025 at 19:55:30 India Standard Time"

const formattedDate = new Intl.DateTimeFormat('en-IN', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
}).format(date);
console.log(formattedDate); // "7 October 2025, 12:00:00"



// SLICING :
// ISO format ka string easily slice karke custom format bana sakte hain.
let isoDate = new Date("2025-06-18T14:25:30Z").toISOString();

console.log(isoDate);                               // "2025-06-18T14:25:30.000Z"
console.log("Date Only:", isoDate.slice(0, 10));    // "2025-06-18"
console.log("Time Only:", isoDate.slice(11, 19));   // "14:25:30"



// CUSTOM :
// Apne hisaab se DD/MM/YYYY - HH:MM format bana sakte hain.

date = new Date("2025-06-17T14:25:30");

let formatted = `${date.getDate().toString().padStart(2, '0')}/` +
  `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} - ` +
  `${date.getHours()}:${date.getMinutes()}`;
console.log("Custom Format:", formatted); // "17/06/2025 - 14:25"



/* COMMONLY USED LOCALE CODES:

    Locale Code | Language & Region            | Format Example (Date)
    ------------|------------------------------|-----------------------
    "en-US"     | English (United States)      | June 17, 2025
    "en-GB"     | English (United Kingdom)     | 17 June 2025
    "en-IN"     | English (India)              | 17/6/2025
    "hi-IN"     | Hindi (India)                | 17 जून 2025
    "fr-FR"     | French (France)              | 17/06/2025
    "de-DE"     | German (Germany)             | 17.06.2025
    "es-ES"     | Spanish (Spain)              | 17/6/2025
    "ja-JP"     | Japanese (Japan)             | 2025/06/17
    "zh-CN"     | Chinese (China - Simplified) | 2025/6/17
    "ru-RU"     | Russian (Russia)             | 17.06.2025
    "ar-SA"     | Arabic (Saudi Arabia)        | ١٧/٠٦/٢٠٢٥
    "ko-KR"     | Korean (Korea)               | 2025. 6. 17.
    "it-IT"     | Italian (Italy)              | 17/06/2025
    "pt-BR"     | Portuguese (Brazil)          | 17/06/2025
    ------------|------------------------------|-----------------------

   SPECIAL LOCALE KEYWORDS:

    "default"  → Uses browser/system default
    "en"       → Generic English
    "fr"       → Generic French
*/ 