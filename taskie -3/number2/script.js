// Print odd numbers in an array

// Arrow functions

// 1. Print odd numbers in an array

const printOddNumbers = arr => arr.filter(num => num % 2 !== 0);

console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2. Convert all the strings to title caps in a string array

const convertToTitleCaps = arr => arr.map(str => 
    str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
);

console.log(convertToTitleCaps(['hello', 'world', 'javascript', 'arrow']));

// 3. Sum of all numbers in an array

const sumOfArray = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sumOfArray([1, 2, 3, 4, 5]));

// 4. Return all the prime numbers in an array

const returnPrimes = arr => {
    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(isPrime);
};

console.log(returnPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// 5. Return all the palindromes in an array

const returnPalindromes = arr => {
    const isPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(isPalindrome);
};

console.log(returnPalindromes(['madam', 'racecar', 'hello', 'world', 'level']));
