const name = "Sai Ayushman Padhy";
const repoCount = 10;

// Scratched "name" ko ignore kijiye, yeh js ka linting problem hai.
console.log(name + " has " + repoCount + " repositories."); // String Concatenation

// Isse better method hai template literals ka use karna:
console.log(`${name} has ${repoCount} repositories.`); // String Interpolation
// Template literals mein backticks (`) ka use hota hai.

/* String interpolation is a way to embed variables or expressions directly inside a string,
   without using concatenation (+). 
   It makes strings more readable and dynamic.
*/

/* String interpolation keliye ham template literals use karte hein, 
   aur ismein variables/expressions ko ${} ke andar likhte hain.
*/

const gameName = new String("Call of Duty");
/* new String() se string object create hota hai, lekin yeh jyada use nahi hoti hai.
   Iska use karne se string primitive type nahi hota, balki ek String object banta hai.
   Isliye, isse jyada use nahi karte hain.
*/

/* Ab yeh "gameName" ek String object hai, 
   Isliye iski harr ek character apne index ke sath,
   key-value pair ke roop mein store hoti hai.
   Like, 0: "C", 1: "a", 2: "l", 3: "l", 4: " ", 5: "o", 6: "f", 7: " ", 8: "D", 9: "u", 10: "t", 11: "y".
   Isliye, iski length bhi hoti hai, aur yeh String.prototype se inherit hota hai.
*/

console.log(gameName); // [String: 'Call of Duty']
console.log(typeof gameName); // object (String object)


// To access each character of the string, we can use indexing:
console.log(name[15]); // "d"
console.log(gameName[3]); // "l"
/* String indexing zero-based hoti hai, matlab pehla character index 0 par hota hai.
   Backwards indexing bhi hoti hai, matlab last character ko -1 se access kar sakte hain:
*/

console.log(name[-1]); // undefined
// JavaScript mein negative indexing ka support nahi hai, isliye yeh undefined return karega.


console.log(gameName.__proto__); // String.prototype // Output: {} (Empty object nhi h)
// String.prototype mein bohot saare methods hote hain jo strings ko manipulate karne mein madad karte hain.
// String methods ka use karke strings ko manipulate kar sakte hain.

/* Aaj kal ham .__proto__ ka use nahi karte hain, kyunki yeh outdated hai.
   Directly baas <stringName>.<methodName> ka use karte hain,
   for string manipulation.
*/

console.log(gameName.length); // 12
console.log(gameName.toUpperCase()); // "CALL OF DUTY"
console.log(gameName.charAt(2)); // "l"
console.log(gameName.indexOf('t')); // 10

const newString = gameName.substring(0, 6); // "Call o" - yeh 0 se 6 tak ke characters ko return karega.
console.log(newString); 

const anotherString = gameName.slice(-7, 10); // "of Du"
console.log(anotherString);

const newStringOne = "   Hello World!  ";
console.log(newStringOne);

console.log(newStringOne.trim()); // trim() method se string ke starting aur ending spaces remove ho jate hain.

const url = "https://sai.com/sai%20ayushman"

console.log(url.replace("%20", "-")); // replace() method se string mein kisi specific substring ko replace kar sakte hain.

console.log(url.includes("sundar")); // includes() method se check kar sakte hain ki string mein koi specific substring hai ya nahi.

console.log(gameName.split(" ")); // split() method se string ko kisi specific delimiter par tod sakte hain.