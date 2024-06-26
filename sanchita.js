// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO

const containsY = (str) => {
    if (str.includes('y')) {
        console.log('YES');
    } else {
        console.log('NO');
    }
};

// Example 
containsY('Crazyy');  // Output: YES
containsY('Hello');   // Output: NO
containsY('laptop');  // output: No

// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach
// function getFactorial(num) {
// logic
// return the value;
// }

const getFactorial = (num) => {
    let result = 1;
      // Loop from 1 to 'num'
    for (let i = 1; i <= num; i++) {       // Multiply 'result' by the current value of 'i'
        result *= i;
    }
    return result;  // Return the final factorial value
};

// Example 
console.log(`5! = ${getFactorial(5)}`);  // Output: 120
console.log(`10! = ${getFactorial(10)}`);  // Output:3628800

//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];
// function getHighestAverageStudent() { // return string
    // returns the student name with highest average marks
// }

const studentList = [
    { name: 'Mike', marks: [80, 50, 60, 100] },
    { name: 'Daniel', marks: [40, 80, 100, 100] },
    { name: 'Stacy', marks: [20, 100, 50, 70] },
];

const getHighestAverageStudent = () => {
    let highestAverage = -1;
    let highestAverageStudent = '';

    for (const student of studentList) {  // Calculate the average marks for the current student
        const average = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;
        if (average > highestAverage) {
            highestAverage = average;
            highestAverageStudent = student.name;
        }
    }
    // Return an object containing the student name and their highest average marks
    return { name: highestAverageStudent, averageMarks: highestAverage };
};

// Example 

const highestAverageStudent = getHighestAverageStudent();
console.log(`Student with highest average marks: ${highestAverageStudent.name} (${highestAverageStudent.averageMarks})`);

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

const findHighestOccurrences = (arr) => {
    const occurrences = new Map();
    let highestCount = 0;
    let highestNumber = null;

    for (const num of arr) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
        if (occurrences.get(num) > highestCount) {
            highestCount = occurrences.get(num);
            highestNumber = num;
        }
    }

    return { number: highestNumber, count: highestCount };
};

// Example 
const numbers = [20, 4, -10, 4, 11, 20, 4, 2];
const { number, count } = findHighestOccurrences(numbers);
console.log(`Number with highest occurrences: ${number} (Count: ${count})`); // Output: 4(3)

//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]
// aba abba  abca  acca a 

const findUniqueNumber = (arr) => {
    const occurrences = new Map();

    for (const num of arr) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
    }

    for (const [num, count] of occurrences) {
        if (count === 1) {
            return num;
        }
    }

    return null; // No unique number found
};

// Example 
const numbers2 = [20, 20, 11, 4, 11, 20, 2, 4];
console.log(`Unique number in the array: ${findUniqueNumber(numbers2)}`);  // Output: 2

//6. You have an arryay of palindromes and not palindromes, and you have to return only palindromes array
// ['abc', 'aba', 'ccc', 'dca', 'a']
// ['aba', 'ccc', 'a']
const isPalindrome = (s) => {
    s = s.replace(/ /g, '').toLowerCase();    // The replace() method allows you to search for a specific part of a string (called a substring) and replace it with another substring.
    return s === s.split('').reverse().join('');
};

const filterPalindromes = (arr) => {          // The filter() method iterates over each element of an array.
    return arr.filter((word) => isPalindrome(word));
};

// Example 
const inputArray = ['abc', 'aba', 'ccc', 'dca', 'a'];
const palindromes = filterPalindromes(inputArray);
console.log('Palindromes:', palindromes);  // Output: ['aba', 'ccc', 'a']