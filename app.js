/*                  Question-01. 
Write a function that displays current date & time in your
browser. */

// var current_Date = new Date();
// document.write(`Current date and time is: ${current_Date} <br>`);


/*                  Question-02. 
Write a function that takes first & last name and then it
greets the user using his full name. */

// var firstName = prompt("Enter your first name");
// var LastName = prompt("Enter your last name");

// function full_Name() {
//     document.write(`Hello ${firstName} ${LastName}`);
// };

// full_Name();


/*                  Question-03. 
Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

// function sum(num1, num2) {
//     var sum_of_given_numbers = num1 + num2;
//     document.write(`The sum of given numbers is: ${sum_of_given_numbers}`);
//     // return sum;
// }
// sum(5,8);


/*                  Question-04. 
Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

// function calculator(num1, num2, operation) {
//     var sign = operation;
//     if (sign == '+') {
//         document.write(`The sum of given number is: ${num1 + num2}`);
//     }
//     else if (sign == '-') {
//         document.write(`The subtraction of given number is: ${num1 - num2}`);
//     }
//     else if (sign == '*') {
//         document.write(`The multiplication of given number is: ${num1 * num2}`);
//     }
//     else if (sign == '/') {
//         document.write(`The division of given number is: ${num1 / num2}`);
//     }
//     else if (sign == '%') {
//         document.write(`The remainder of given number is: ${num1 % num2}`);
//     }
//     else {
//         document.write(`Enter valid number`);
//     }
// };

// calculator(10, 5, '*');


/*                  Question-05. 
Write a function that squares its argument. */

// function squares(num3) {
//     var square = num3 * num3;
//     document.write(`The square of given number is: ${square}`);
// }

// squares(5);


/*                  Question-06. 
Write a function that computes factorial of a number. */

// function facteriol(n) {
//     if (n === 0 || n === 1) {
//         document.write(`The factorial of 1 is: 1`);
//     }

//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//         document.write(`The factorial of given number is: ${result}`);
//     }
// facteriol(6);


/*                  Question-07. 
Write a function that take start and end number as inputs
& display counting in your browser. */

// function startCounting(start, end) {
//     if (start <= end) {
//         for (let i = start; i <= end; i++) {
//             document.write(`${i} <br>`);
//         }
//     }
//     else {
//         for (let i = start; i >= end; i--) {
//             document.write(`${i} <br>`);
//         }
//     }
// }

// startCounting(17, 6);


/*                  Question-08. 
Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(side) {
//         return side ** 2;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuseSquare = baseSquare + perpendicularSquare;
//     document.write(`The hypotenuse of right trangle is: ${hypotenuseSquare}`);
// }

// calculateHypotenuse(4, 3);


/*                  Question-09. 
Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */

// function calculateArea(width, height) {
//     return width * height;
// }

// const area = calculateArea(4, '8');
// document.write(`The area of rectangle is: ${area} m^2.`);


/*                  Question-10. 
Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */

// function palindrome(name) {
//     var lowerCase = name.toLowerCase();
//     var splitName = lowerCase.split('');
//     var rvrsName = splitName.reverse();
//     var joinName = rvrsName.join('');

//     if (lowerCase == joinName) {
//         document.write(`${lowerCase} is palindrome.`);
//     }
//     else {
//         document.write(`${lowerCase} is not palindrome.`);
//     }
// };

// palindrome("MaDam");


/*                  Question-11. 
Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

// function capitalizeWords(str) {
//   var words = str.split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];

//     var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

//     words[i] = capitalizedWord;
//   }

//   var capitalizedString = words.join(" ");

//   return capitalizedString;
// }

// var inputString = "the quick brown fox jump over the table";
// var outputString = capitalizeWords(inputString);
// document.write(outputString);


/*                  Question-12.
Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

// function findLongestWord(str) {
//     var splitWord = str.split(' ');

//     var longestWord = "";
//     var longestWordLength = 0;

//     for (let i = 0; i < splitWord.length; i++) {
//         var word = splitWord[i];
//         var wordLength = word.length;
//     }
//     if (word.length > longestWord) {
//         longestWord = word;
//         longestWordLength = longestWord.length;
//         document.write(`longest word is: ${longestWord}`);
//     }
// }

// findLongestWord('the we developer');


/*                  Question-13. 
Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o' */

// function countingLetter(string, letter) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string.chatAt(i) == letter) {
//             count++;
//         }
//     }
//     return count;

// }

// var letter = 'o';
// var string = 'JSResourceS.com';
// var occurrences = countingLetter(string, letter);
// document.write(`The ${letter} is ${count} times repeat in ${string}`);



// function countOccurrences(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// const string = 'JSResourceS.com';
// const letter = 'o';
// const occurrences = countOccurrences(string, letter);
// document.write(`Number of occurrences of ${letter} in ${string}: ${occurrences}`);


/*                  Question-14. 
The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */

// function calcCircumference(r) {
//     var circumference = 2 * (3.142) * r;
//     return circumference;
// }

// var r = +prompt("Enter radius for circumferrence of circle.");
// var toFixed = r.toFixed(3);
// var radius_For_Circumferrence = calcArea(toFixed);
// document.write(`The area of circle is: ${radius_For_Circumferrence}cm <br>`);

// function calcArea(radius) {
//     var area = (3.142)*(radius ** 2);
//     return area;
// }

// var radius = +prompt("Enter radius for area of circle.");
// var to_Fixed = radius.toFixed(3);
// var radius_For_Area = calcArea(to_Fixed);
// document.write(`The area of circle is: ${radius_For_Area}cm^2`);