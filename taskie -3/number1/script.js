// 1.Print odd numbers in an array

// a.annonymous function

var printOddNumbers = function(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
};

console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// b. IFFE function

(function(arr) {
    var oddNumbers = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    console.log(oddNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2. Convert all the strings to title caps in a string array

// a.annonymous function

var convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
};

console.log(convertToTitleCaps(['hello', 'world', 'javascript', 'anonymous']));

// b. IFFE function

(function(arr) {
    var titleCapsArray = arr.map(function(str) {
        return str.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
    console.log(titleCapsArray);
})(['hello', 'world', 'javascript', 'iife']);

// 3. Sum of all numbers in an array

// a.annonymous function

var sumOfArray = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};

console.log(sumOfArray([1, 2, 3, 4, 5]));

// b. IFFE function

(function(arr) {
    var sum = arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// 4. Return all the prime numbers in an array

// a.annonymous function

var returnPrimes = function(arr) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(isPrime);
};

console.log(returnPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// b. IFFE function

(function(arr) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    var primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

// 5. Return all the palindromes in an array

// a.annonymous function

var returnPalindromes = function(arr) {
    var isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };

    return arr.filter(isPalindrome);
};

console.log(returnPalindromes(['madam', 'racecar', 'hello', 'world', 'level']));

// b. IFFE function

(function(arr) {
    var isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    
    var palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
})(['madam', 'racecar', 'hello', 'world', 'level']);


// 6. Return median of two sorted arrays of the same size

// a.annonymous function

var returnMedian = function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    var mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};

console.log(returnMedian([1, 3, 5], [2, 4, 6]));

// b. IFFE function

(function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    var mid = merged.length / 2;
    var median = (merged[mid - 1] + merged[mid]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);


// 7. Remove duplicates from an array

// a.annonymous function

var removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// b. IFFE function

(function(arr) {
    var uniqueArray = arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);


// 8. Rotate an array by k times

// a.annonymous function

var rotateArray = function(arr, k) {
    var rotatedArray = arr.slice();
    for (var i = 0; i < k; i++) {
        rotatedArray.unshift(rotatedArray.pop());
    }
    return rotatedArray;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// b. IFFE function

(function(arr, k) {
    var rotatedArray = arr.slice();
    for (var i = 0; i < k; i++) {
        rotatedArray.unshift(rotatedArray.pop());
    }
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);



