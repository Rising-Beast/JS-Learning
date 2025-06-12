let value = 15;
let negValue = -value;
console.log("Negative Value of", value, "is", negValue); // Negative Value of 15 is -15
// console.log() ham aise messages bhi print kar sakte hain with variables !

let num1, num2, num3;
num1 = num2 = num3 = 10; // Chained assignment
console.log("Value of num1, num2, and num3 is", num1, num2, num3); // 10 10 10

let addition = value + 5; // 15 + 5 = 20
let subtraction = value - 5; // 15 - 5 = 10
let multiplication = value * 2; // 15 * 2 = 30
let division = value / 3; // 15 / 3 = 5
let modulus = value % 4; // 15 % 4 = 3 (remainder of 15 divided by 4)
let exponentiation = value ** 2; // 15 ** 2 = 225 (15 raised to the power of 2)

let x = 10;
const y = x++; // Postfix increment
console.log("Value of x is", x, "and y is", y); // 11 10

x = 10;
const z = ++x; // Prefix increment
console.log("Value of x is", x, "and z is", z); // 11 11

let p = 10;
const q = p--; // Postfix decrement
console.log("Value of p is", p, "and q is", q); // 9 10

p = 10;
const r = --p; // Prefix decrement
console.log("Value of p is", p, "and r is", r); // 9 9

let str1 = "Hello";
let str2 = "World";
let concatenation = str1 + " " + str2;
console.log(concatenation); // Hello World

console.log(str1 * 2 ); // NaN (Not a Number, because you can't multiply a string by a number)

// Production grade code keliye, Precedence of operators ka itna kaam nahi hota,
// lekin samajhna zaroori hai ki kaunsa operator pehle chalega.

// Operator precedence in JavaScript (Highest to Lowest):
// 1  - Grouping: ()                                                         [N/A]
// 2  - Member Access / Function Call: .  []  ()                        [Left-to-Right]
// 3  - new (with arguments): new MyFunction()                          [Right-to-Left]
// 4  - Postfix Increment/Decrement: expr++  expr--                          [N/A]
// 5  - Unary Operators: ++expr  --expr  +  -  ~  ! typeof void delete  [Right-to-Left]
// 6  - Exponentiation: **                                              [Right-to-Left]
// 7  - Multiplicative: *  /  %                                         [Left-to-Right]
// 8  - Additive: +  -                                                  [Left-to-Right]
// 9  - Bitwise Shift: <<  >>  >>>                                      [Left-to-Right]
// 10 - Relational: <  <=  >  >=  in  instanceof                        [Left-to-Right]
// 11 - Equality: ==  !=  ===  !==                                      [Left-to-Right]
// 12 - Bitwise AND: &                                                  [Left-to-Right]
// 13 - Bitwise XOR: ^                                                  [Left-to-Right]
// 14 - Bitwise OR: |                                                   [Left-to-Right]
// 15 - Logical AND: &&                                                 [Left-to-Right]
// 16 - Logical OR: ||                                                  [Left-to-Right]
// 17 - Nullish Coalescing: ??                                          [Left-to-Right]
// 18 - Conditional (Ternary): condition ? expr1 : expr2                [Right-to-Left]
// 19 - Assignment: = += -= *= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??=  [Right-to-Left]
// 20 - Comma: ,                                                        [Left-to-Right]


// Ye niche wale jo sab likhen hain, yeh corporate mein bad practice hain !!
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + "3"); // 33
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33
console.log(1 + 2 + "3" + 4 + 5); // 3345
/* Jab ek string milgya then uske baad jitne bhi numbers aayenge,
   unhe string mein convert kar diya jayega.
*/

console.log(true); // true
console.log(false); // false
console.log(true + true); // 2 (true is converted to 1)
console.log(true + false); // 1 (true is converted to 1, false is converted to 0)

console.log(+"5"); // 5 (string "5" is converted to number 5)
console.log(+"abc"); // NaN (string "abc" cannot be converted to a number) 
console.log(+""); // 0 (empty string is converted to number 0)
console.log(+" "); // 0 (space is treated as empty string)

console.log(+true); // 1 (true is converted to 1)
console.log(+false); // 0 (false is converted to 0)
console.log(+null); // 0 (null is converted to 0)
console.log(+undefined); // NaN (undefined cannot be converted to a number)