/* String Manipulation bohat important hai JavaScript mein.
   Yeh hume strings ko modify karne, search karne, aur manipulate karne ki suvidha deta hai.
   Yeh both frontend aur backend development mein use hota hai.
*/

const name = "Sai Ayushman Padhy";
const url = "https://sai.com/sai%20ayushman";


// STRING PROPERTIES are:

// length - String ke length ko return karta hai.
console.log(name.length); // 18



// STRING METHODS are:


// A. Basic Manipulation

// 1. charAt(index) - String mein koi bhi character access kar sakte hain.
console.log(name.charAt(10)); // "a"
console.log(name.charAt(18)); // ""
console.log(name.charAt(-5)); // ""


// 2. charCodeAt(index) - String mein koi bhi character ke ASCII value ko return karta hai.
console.log(name.charCodeAt(7)); // 115
console.log(name.charCodeAt(18)); // NaN
console.log(name.charCodeAt(-5)); // NaN


// 3. concat(str1, str2, ...) - Strings ko join karne ke liye use karte hain.
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
console.log(str1.concat(" ", str2, "!")); // "Hello World!"


// 4. repeat(count) - String ko repeat karne ke liye use karte hain.
console.log(str1.repeat(3)); // "HelloHelloHello"



// B. Searching & Extracting

// 1. indexOf(searchStr, fromIndex) - String mein koi bhi character ko starting se search karne ke liye use karte hain.
console.log(name.indexOf("Ayushman")); // 4
console.log(name.indexOf("y")); // 5
console.log(name.indexOf("Ayushman", 7)); // -1 (not found)
console.log(name.indexOf("y", 10)); // 17
// fromIndex se search karta hai.


// 2. lastIndexOf(searchStr, fromIndex) - String mein koi bhi character ko ending se search karne ke liye use karte hain.
console.log(name.lastIndexOf("y")); // 17
console.log(name.lastIndexOf("a", 16)); // 14
console.log(name.lastIndexOf("i", 2)); // 2
console.log(name.lastIndexOf("s", 0)); // -1 (not found)
// fromIndex se search karta hai.


// 3. includes(searchStr) - String mein koi bhi character, present hai ya nhi check karte hain.
console.log(name.includes("Ayushman")); // true
console.log(name.includes("z")); // false


// 4. startsWith(searchStr) - String mein koi bhi character, starting se present hai ya nhi check karte hain.
console.log(name.startsWith("Sai")); // true
console.log(name.startsWith("a")); // false


// 5. endsWith(searchStr) - String mein koi bhi character, ending se present hai ya nhi check karte hain.
console.log(name.endsWith("Padhy")); // true
console.log(name.endsWith("a")); // false


// 6. slice(start, end) - String mein koi bhi characters ko extract karne ke liye use karte hain.
// end ko include nhi karega.
console.log(name.slice(0, 5)); // "Sai A"
console.log(name.slice(5)); // "yushman Padhy"
console.log(name.slice()); // "Sai Ayushman Padhy"
console.log(name.slice(-7, 10)); // ""
console.log(name.slice(-15, 5)); // "A"
// Negative index allowed hai, js usko internally positive index mein convert karega.
// start >= end, empty string return karega.


// 7. substring(start, end) - String mein koi bhi characters ko extract karne ke liye use karte hain.
// end ko include nhi karega.
console.log(name.substring(0, 5)); // "Sai A"
console.log(name.substring(5)); // "yushman Padhy"
console.log(name.substring()); // "Sai Ayushman Padhy"
console.log(name.substring(-7, 10)); // "Sai Ayushm"
console.log(name.substring(-15, 5)); // "Sai A"
console.log(name.substring(-15)); // "Sai Ayushman Padhy"
// Negative index not allowed hai, js usko internally 0 consider karta hai.
// start >= end, it swaps them automatically => substring(end, start).


// 8. substr(start, length) - String mein koi bhi characters ek given length tak extract karta hai.
// **DEPRECATED** [Legacy Method]
console.log(name.substr(0, 5)); // "Sai A"
console.log(name.substr(5)); // "yushman Padhy"
console.log(name.substr()); // "Sai Ayushman Padhy"
console.log(name.substr(-7, 10)); // "n Padhy"
console.log(name.substr(-15, 5)); // " Ayush"
console.log(name.substr(-15)); // " Ayushman Padhy"
// negative index hai toh consider karega.


// 9. includes(searchStr) - String mein koi bhi character, present hai ya nhi check karte hain.
console.log(name.includes("Ayushman")); // true
console.log(name.includes("z")); // false


// 10. at(index) - String mein koi bhi character ko extract karne ke liye use karte hain.
console.log(name.at(0)); // "S"
console.log(name.at(-1)); // "y"
console.log(name.at(-15)); // "S"



// C. Case & Whitespace

// 1. toUpperCase() - String ko uppercase mein convert karne ke liye use karte hain.
console.log(name.toUpperCase()); // "SAI AYUSHMAN PADHY"


// 2. toLowerCase() - String ko lowercase mein convert karne ke liye use karte hain.
console.log(name.toLowerCase()); // "sai ayushman padhy"


// 3. trim() - String ke both starting & ending whitespace remove karne ke liye use karte hain.
const newStr = "    Sai Ayushman Padhy    ";
console.log(newStr); // "    Sai Ayushman Padhy    "
console.log(newStr.trim()); // "Sai Ayushman Padhy"
console.log(name.trim()); // "Sai Ayushman Padhy"


// 4. trimStart() - String ke starting whitespace remove karne ke liye use karte hain.
console.log(newStr.trimStart()); // "Sai Ayushman Padhy    "
console.log(name.trimStart()); // "Sai Ayushman Padhy"


// 5. trimEnd() - String ke ending whitespace remove karne ke liye use karte hain.
console.log(newStr.trimEnd()); // "    Sai Ayushman Padhy"
console.log(name.trimEnd()); // "Sai Ayushman Padhy"



// D. Splitting & Joining

// 1. split(separator, limit) - String ko kisi specific delimiter par split karne ke liye use karte hain.
console.log(name.split(" ")); // ["Sai", "Ayushman", "Padhy"]
console.log(name.split("a")); // [ 'S', 'i Ayushm', 'n P', 'dhy' ]
console.log(name.split("a", 2)); // [ 'S', 'i Ayushm' ]


// 2. replace(searchStr, newStr) - String mein koi bhi character ko first match pe kisi dusre character ke sath replace karne ke liye use karte hain.
console.log(name.replace("Ayushman", "Ayush")); // "Sai Ayush Padhy"
console.log(name.replace("a", "#")); // "S#i Ayushman Padhy"


// 3. replaceAll(searchStr, newStr) - String mein koi bhi character ko kisi dusre character ke sath replace karne ke liye use karte hain.
console.log(name.replaceAll("a", "&")); // "S&i Ayushm&n P&dhy"


// 4. padStart(targetLength, padStr) - String ke starting pad karne ke liye use karte hain.
console.log(name.padStart(10, "abc")); // "Sai Ayushman Padhy"
console.log(name.padStart(20, "abc")); // "abSai Ayushman Padhy"
console.log(name.padStart(23, "abc")); // "abcabSai Ayushman Padhy"
// Naya string targetLength se bda nhi ho skta hai !


// 5. padEnd(targetLength, padStr) - String ke ending pad karne ke liye use karte hain.
console.log(name.padEnd(10, "abc")); // "Sai Ayushman Padhy"
console.log(name.padEnd(20, "abc")); // "Sai Ayushman Padhyab"
console.log(name.padEnd(23, "abc")); // "Sai Ayushman Padhyabcab"
// Naya string targetLength se bda nhi ho skta hai !



// E. Miscellaneous

// 1. loacaleCompare(compareString, locales, {sensitivity: "options"}) - String ko compare karne ke liye use karte hain.
      /* -1 => if the string comes before the compared string.
         0  => if the strings are equal.
         1  => if the string comes after the compared string.
      */
      /* locales (optional) - A locale code
         "en-US" => English (United States)
         "hi-IN" => Hindi (India)
         "ko-KR" => Korean (Korea)
         "de-DE" => German (Germany)
      */
      /* options (optional) -Additional comparison rules
         "variant"           => Both case & accent-sensitive (default).
         "base"              => Case & accent-insensitive ("a" == "Á").
         "accent"            => Accent-sensitive ("a" != "á")
         "case"              => Case-sensitive ("a" != "A").
      */
const string1 = "apple";
const string2 = "banana";

console.log(string1.localeCompare(string2)); // -1 ("apple" comes before "banana")
console.log(string2.localeCompare(string1)); // 1 ("banana" comes after "apple")
console.log("apple".localeCompare("apple")); // 0 (equal)

console.log("ä".localeCompare("z", "de-DE")); // -1 (ä comes before 'z' in German)

console.log("résumé".localeCompare("Resume", "en-US", { sensitivity: 'base' })); // 0 (ignores case & accents)
console.log("résumé".localeCompare("Resume", "en-US", { sensitivity: 'case' })); // -1 (case-sensitive)

// "numeric" => Numeric-sensitive ("2" < "12").
console.log("10".localeCompare("2", "en-US")); // -1 (lexical order: "1" < "2")
console.log("10".localeCompare("2", "en-US", { numeric: true })); // 1 (numeric order: 10 > 2)

// "ignorePunctuation" => Punctuation-insensitive ("a" == "a.")
console.log("hello!".localeCompare("hello", "en-US")); // 1 (punctuation affects order)
console.log("hello!".localeCompare("hello", "en-US", { ignorePunctuation: true })); // 0 (ignores "!")


// **Jyada important nhi hai & symbols ache se show bhi nhi hote kabhi kabhi !!**
// 2. toLocaleUpperCase() - String ko local format mein Uppercase ko convert karta hai.
console.log("ıstanbul".toLocaleUpperCase("tr-TR")); // "İSTANBUL" (correct in Turkish)
console.log("straße".toLocaleUpperCase("de-DE")); // "STRASSE" (German ß handling)


// **Jyada important nhi hai & symbols ache se show bhi nhi hote kabhi kabhi !!**
// 3. toLocaleLowerCase() - String ko local format mein Lowercase ko convert karta hai.
console.log("İSTANBUL".toLocaleLowerCase("tr-TR")); // "istanbul" (correct in Turkish)
console.log("STRASSE".toLocaleLowerCase("de-DE")); // "straße" (German ß handling)