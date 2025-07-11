const coding = ["js", "python", "java", "c++", "c#"];

let values = coding.forEach( (item) => {
    console.log(item);
} );
console.log(values); 
/* Output :
        "js"
        "python"
        "java"
        "c++"
        "c#"
        undefined
*/

values = coding.forEach( (item) => {
    return item;
} );
console.log(values); 
// Output : undefined


/* NOTE :
     forEach function kabhi bhi return value nahi deta hai, isliye 'undefined' hi milega.
*/


// filter(callback) - Condition true hone par element return karta hai

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = numbers.filter( (num) => num > 4 );
console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]


newNums = numbers.filter( (num) => {
    return num > 4;
});
console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]


/* filter ka kaam forEach se karna ho toh :
        let newNums = [];
        numbers.forEach( (num) => {
            if (num > 4) {
                newNums.push(num);
            }
        } );
        console.log(newNums);  
        
        Output :
            // [ 5, 6, 7, 8, 9, 10 ]
*/


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (book) => book.genre === "History" );
console.log(userBooks);
/* Output :
        [
            { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
            { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
        ]
*/


userBooks = books.filter( (book) => { return book.publish >= 2000 } );
console.log(userBooks);
/* Output :
        [
            { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
            { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
        ]
*/


userBooks = books.filter( (book) => {
    return book.publish >= 1995 && book.genre === "History";
} );
console.log(userBooks);
/* Output :
        [
            { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
        ]
*/