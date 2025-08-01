// map(callback) - Har element ko transform karta hai, naya array return karta hai.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = numbers.map( (num) => num * 10 );
console.log(newNums);  // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]


/* map ka kaam forEach se karna ho toh :
        let newNums = [];
        numbers.forEach( (num) => {
            newNums.push(num * 10);
        } );
        console.log(newNums);  
        
        Output :
            // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
*/



// Chaining of map and filter methods :

newNums = numbers
                .map( (num) => num * 10)
                .map( (num) => num + 1 );
console.log(newNums);
// [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]


newNums = numbers
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 );
console.log(newNums);
// [ 41, 51, 61, 71, 81, 91, 101 ]