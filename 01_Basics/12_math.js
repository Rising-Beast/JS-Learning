console.log(Math); // Math object
/* Math object is a built-in object in JavaScript, and it is not a constructor.
   Math object provides mathematical constants and functions.
   Return type for all Math methods is always a number.
*/


// MATH PROPERTIES (Constants) :
console.log(Math.PI); // 3.141592653589793                   // Pi constant
console.log(Math.E); // 2.718281828459045                    // Euler's number
console.log(Math.LN2); // 0.6931471805599453                 // Natural logarithm of 2
console.log(Math.LN10); // 2.302585092994046                 // Natural logarithm of 10
console.log(Math.SQRT2); // 1.4142135623730951               // Square root of 2
console.log(Math.SQRT1_2); // 0.7071067811865476             // Square root of 1/2
console.log(Math.LOG2E); // 1.4426950408889634               // Logarithm base 2 of E
console.log(Math.LOG10E); // 0.4342944819032518              // Logarithm base 10 of E


// MATH METHODS :

// 1. Basic Arithmetic
console.log(Math.abs(-5)); // 5
console.log(Math.sign(56)); // 1                             // 1 => (positive number); 0 => (zero); -1 => (negative number)
console.log(Math.sqrt(20)); // 4.47213595499958              // Square root of 20
console.log(Math.cbrt(27)); // 3                             // Cube root of 27
console.log(Math.hypot(3, 4)); // 5                          // Hypotenuse of a right triangle with sides 3 and 4


// 2. Rounding
console.log(Math.ceil(4.2)); // 5                            // Round up
console.log(Math.floor(4.8)); // 4                           // Round down
console.log(Math.round(4.5)); // 5                           // Round to nearest integer
console.log(Math.trunc(4.9)); // 4                           // Remove decimal part


// 3. Random Numbers
console.log(Math.random());                                  // 0 <= Random number < 1 (Floating point number)
console.log((Math.random() * 10) + 1);                       // 1 <= Random number < 11 (Floating point number)
console.log(Math.floor(Math.random()*10) + 1);               // 1 <= Random number < 11 (Integer number)

const min = 40;
const max = 65;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// min <= Random number <= max


// 4. Exponents & Logarithms
console.log(Math.pow(2, 3)); // 8                            // 2^3
console.log(Math.exp(2)); // 7.38905609893065                // e^2
console.log(Math.expm1(2)); // 6.38905609893065              // exp(2) - 1
console.log(Math.log(10)); // 2.302585092994046              // Natural logarithm of 10
console.log(Math.log10(100)); // 2                           // Logarithm base 10 of 100
console.log(Math.log2(8)); // 3                              // Logarithm base 2 of 8
console.log(Math.log1p(10)); // 0.6931471805599453           // log(10 + 1)


// 5. Trigonometry (Input in Radian)
console.log(Math.sin(Math.PI/2)); // 1                       // sine
console.log(Math.cos(Math.PI)); // -1                        // cosine
console.log(Math.tan(Math.PI/4)); // 0.9999999999999999      // tangent


// 6. Maximum & Minimum
console.log(Math.max(1, 85, -8928, 3, 2485)); // 2485        // Maximum number out 
console.log(Math.min(-4589, -9102, 0)); // -9102             // Minimum number
// Jitne chahein utne numbers isme input de skte h !


// 7. Arc Trigonometry (Output in Radian)
console.log(Math.asin(1)); // 1.5707963267948966             // Arc sine
console.log(Math.acos(0)); // 1.5707963267948966             // Arc cosine
console.log(Math.atan(1)); // 0.7853981633974483             // Arc tangent
console.log(Math.atan2(1, 1)); // 0.7853981633974483         // Arc tangent of y/x (Quadrant aware)


// 8. Hyperbolic Trigonometry
console.log(Math.sinh(1)); // 1.1752011936438014             // Hyperbolic sine
console.log(Math.cosh(1)); // 1.5430806348152437             // Hyperbolic cosine
console.log(Math.tanh(1)); // 0.7615941559557649             // Hyperbolic tangent
console.log(Math.asinh(1)); // 0.881373587019543             // Inverse hyperbolic sine
console.log(Math.acosh(1)); // 0                             // Inverse hyperbolic cosine
console.log(Math.atanh(0.5)); // 0.5493061443340549          // Inverse hyperbolic tangent


// 9. Bitwise 
console.log(Math.clz32(2)); // 30                            // Number of leading zeros in 32-bit binary representation
console.log(Math.imul(2, 3)); // 6                           // 32-bit Integer multiplication