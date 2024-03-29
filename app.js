
// Module 3 Labs
// JS Intermediate
//
//1. Create a function that takes a string as a parameter and returns the string with the first character of
//  each word changed into a capital letter,as in the example below. Test it with different strings.

// UpperCase
// const str = 'los angeles';

// const upperCaseStr = str.toUpperCase();

// console.log(upperCaseStr)

// LowerCase
const str = 'LOS ANGLES';

const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr)


//2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text,
// with an ellipsis (…) added to the end if it was too long, or the original text otherwise.
// Write another variant of the truncate function that uses a conditional operator.

function truncate(str, length) {

if (str.length > length) {

      return str.slice(0, length) + '...';

    } else return str;

      }

function truncate(str, length) {
    return str.length > length
      ? str.slice(0, length) + '...'
      : str;
  }
console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...



//3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Add 2 new values to the end
// Add 2 new values to the beginning
// Sort the values alphabetically
// Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
// Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string.
// Try to make it work regardless of upper/lower case.

// //push
// const animals = ['Tiger', 'Giraffe'];
// animals.push("Pig", "dog");

// console.log(animals)

// unshift
// const animals = ['Tiger', 'Giraffe'];
// animals.unshift("Pig", "dog");

// console.log(animals)

// Sorts
// let animals = ["Tiger", "Giraffe", "Pig", "dog"];
// let sortedNames = animals.sort();

// console.log(sortedNames);

// Replace
let animal = ["Tiger", "Giraffe", "Pig", "dog"];
animal.splice(1, 1, "Hores");

console.log(animal);

// startWith
// let animal = ["Tiger", "Giraffe", "Pig", "dog"];
// animal.startWith("Tiger", 3);

// console.log(animal.startWith("Tiger",2));

// upper
// let animal = ("Tiger Giraffe Pig dog");

// const upperCaseStr = animal.toUpperCase();

// console.log(upperCaseStr)

// lower case
// let animal = ("TIGER GIRAFFE PIG DOG");

// const lowerCaseStr = animal.toLowerCase();

// console.log(lowerCaseStr);



//4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// camelCase
// camelCase =
function camelCase(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display


//5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

// let twentyCents = 0.20
// let tenCents = 0.10
//
//
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

// let twentyCents = 0.20 // need to add this
// let tenCents = 0.10    // need to add this
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
//
// console.log(fixedTwenty + fixedTen) //why is this not working?

//1. Explain why the above code returns the wrong answer
//2. Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
    return parseFloat((float1 + float2).toFixed(2));
  }

//3. Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.
function currencyOperation(float1, float2, operation) {
    let result;
    switch (operation) {
      case '+':
        result = float1 + float2;
        break;
      case '-':
        result = float1 - float2;
        break;
      case '*':
        result = float1 * float2;
        break;
      case '/':
        result = float1 / float2;
        break;
      default:
        console.log('Invalid operation');
        break;
    }
    return parseFloat(result.toFixed(2));
  }

//4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
//5. (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
//
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below:

// function currencyAddition(float1, float2, numDecimals) {
//     const multiplicationFactor = Math.pow(10, numDecimals);
//     const result = (float1 + float2) * multiplicationFactor;
//     return Math.round(result) / multiplicationFactor;
//   }

//   const result = currencyAddition(0.1, 0.2, 2); // 0.3

//   function currencyOperation(float1, float2, operation, numDecimals = 2) {
//     const multiplicationFactor = Math.pow(10, numDecimals);
//     let result;

//     switch (operation) {
//       case '+':
//         result = (float1 + float2) * multiplicationFactor;
//         break;
//       case '-':
//         result = (float1 - float2) * multiplicationFactor;
//         break;
//       case '*':
//         result = (float1 * float2) * multiplicationFactor * multiplicationFactor;
//         break;
//       case '/':
//         result = (float1 / float2) * multiplicationFactor / multiplicationFactor;
//         break;
//       default:
//         throw new Error(`Invalid operation: ${operation}`);
//     }

//     return Math.round(result) / multiplicationFactor;
//   }

//   const sum = currencyOperation(0.1, 0.2, '+'); // 0.3
//   const difference = currencyOperation(0.3, 0.1, '-'); // 0.2
//   const product = currencyOperation(0.1, 0.2, '*'); // 0.02




//6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own.

//First Way
// let colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// let uniquecolours = [...new Set(colours)];
//
// console.log(uniquecolours);

// let testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// let uniqueScores = [...new Set(testScores)];
//
// console.log(uniqueScores);

// Second Way
//
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
//
// function unique(arr) {
//
    // const unique = [];
//
    // for (let i of arr) {
    //
        // const isDuplicate = unique.includes(i);
//
        // if (!isDuplicate) {
            // unique.push(i);
        // }
    // }
//
    // return unique
// }
// console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]

// console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// function unique(duplicatesArray) {
// const uniques = [];
// duplicatesArray.forEach(element => {
// if (!uniques.includes(element)) {
// uniques.push(element);
// }
// });
//or using a for...of
// for (let element of duplicatesArray) {
// if (!uniques.includes(element)) {
// uniques.push(element);
// }
// }
// return uniques;
// }
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


//7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.

const books = [
    {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
    },
    {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
    },
    {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: 1949
    },
    {
    id: 4,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932
    },
    {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951
    }];


// const object = books.find(obj => obj.id === 3);
// console.log(object)

//1. Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
const object = books.find(title => title.id === 3);

console.log(object)

//2. Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

// function isPrime(num) {
    // for (let i = 1951; num > i; i++) {
    //   if (num % i === 0) {
        // return false;
    //   }
    // }
    // return num > 1950;
//   }
//
//   console.log(books.filter(isPrime));

function isPrime() {
 return books.filter(book => book.year < 1950)
 //using filter to iterate through the array and return   the books that are less than 1950
}
  const vintageBooks = isPrime(books); //call the function and pass in the array
  console.log(vintageBooks); //print the result


//3. Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
function addGenre(books) {
    return books.map(function(book) {
      return Object.assign({}, book, { genre: 'classic' });
    });
  }

  const booksWithGenre = addGenre(books); //call the function and pass in the array
  console.log(booksWithGenre); //print the result

//4. (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.

let resultFind = books.filter(function getTitles(authorInitial) {
    return books.title === 'Brave New World';
}).map(function getTitles(authorInitial) {
    return books.name;
})

console.log("Books written by authors:");

resultFind.forEach(function (nameOfAuthor) {
    console.log(nameOfAuthor);
});

//5. (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
function latestBook(books) {
    let latestDate = new Date(0);
    let latestBook;

    books.forEach(function(book) {
      const date = new Date(book.year); //make sure that the item you are comparing is a date object
      if (date > latestDate) {
        latestDate = date;
        latestBook = book;
      }
    });

    return latestBook;
  }

  const latest = latestBook(books); //call the function and pass in the array
  console.log(latest); //print the result



//8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

//1. Create a new phoneBookDEF Map to store names beginning with D, E or F
// const phoneBookDEF = new Map();

//2. Initialise the contents of phoneBookDEF by passing in an array of keys/values
// const phoneBookDEF = new Map([  ['David', '555-0123'],
//   ['Edward', '555-1234'],
//   ['Francis', '555-2345']
// ]);

//3. Update the phone number for Caroline
// phoneBookDEF.set('Caroline', '555-5678');

//4. Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
// function printPhoneBook(contacts) {
//     for (let [name, phone] of contacts) {
//       console.log(`${name}: ${phone}`);
//     }
//   }

// //5. Combine the contents of the two individual Maps into a single phoneBook Map
// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// //6. Print out the full list of names in the combined phone book
// console.log([...phoneBook.keys()]);


// //7. Given the below salaries object, perform the following tasks.
// // Timothy의 급여를 40000으로 변경
// salaries["Timothy"] = 40000;

// // Salaries 객체에 'Lena' 추가
// salaries["Lena"] = 60000;

// // Salaries 객체에서 'David' 항목 삭제
// delete salaries["David"];

// // Salaries 객체에서 가장 높은 급여를 가진 사람의 이름 출력
// let maxSalary = 0;
// let maxSalaryName = '';
// for (let [name, salary] of Object.entries(salaries)) {
//   if (salary > maxSalary) {
//     maxSalary = salary;
//     maxSalaryName = name;
//   }
// }
// console.log(`가장 높은 급여를 받는 사람: ${maxSalaryName}`);


//1. Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// function sumSalaries(salaries) {
    // let totalSalary = 0;
    // for(let i in salaries) {
        // console.log(salaries[i]);
        // totalSalary += salaries[i]
    // }
    // return totalSalary
// }
// console.log(sumSalaries(salaries));
// Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
// function topEarner(salaries) {
//
// }

//10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:

const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')

//1. Print the total number of minutes that have passed so far today
// console.log((today.getHours() * 60) + today.getMinutes() + " Minutes have pass today");

//2. Print the total number of seconds that have passed so far today
// console.log((today.getHours() * 60 * 60) + today.getMinutes()*60 + + today.getSeconds() + " Seconds have pass today");

//3. Calculate and print your age as: 'I am x years, y months and z days old'
// const birthday = new Date("1979-06-16")
//
// let years = today.getFullYear() - birthday.getFullYear()
// let months = today.getMonth() - birthday.getMonth()
// let days = today.getDate() - birthday.getDate()
//
// console.log(`I am ${years} years old, ${months} months old, ${days} days old`);
// console.log("I am" + years + "years old" + months + "months old" + days + "days old");

//4. Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
const birthday = new Date("1979-06-16")

let years = today.getFullYear() - birthday.getFullYear()
let months = today.getMonth() - birthday.getMonth()
let days = today.getDate() - birthday.getDate()

function daysInBetween(date1, date2) {
    let differenceMs = date2 - date1
    let millsecondsPerDay = 24 * 60 * 60 * 1000
    let differenceDays = Math.floor(differenceMs / millsecondsPerDay)

    return differenceDays
}
console.log(daysInBetween(birthday,today));




//Great work, Kim, just some minor comments:

//-dont forget to call the function once you have defined it
//-filter makes it easy to find the books by the author or any criteria,
//keep an eye on the properties of the objects you are working with.


//Keep up the good work and always stay curious! :-)
