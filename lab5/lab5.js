// TEST FUNCTION
function myTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myTestArray(expected, found) {
    if (expected.length != found.length) {
        return "TEST FAILED";
    } else if (expected.join("-") !== found.join("-")) {
        return "TEST FAILED";
    } else {
        return "TEST SUCCEEDED";
    }
}
console.log('----- max function : ----- ');
// Define a function max() that takes two numbers as arguments
// and returns the largest of them. Use the if-then-else construct 
// available in Javascript.
const max = function(a, b) {
    if (a > b)
        return a;
    else
        return b;
};
console.log("Expected output of max(20,10) is 20");
console.log(myTest(20, max(20, 10)));

console.log('----- maxOfThree function : ----- ');
// Define a function maxOfThree() that takes three numbers
// as arguments and returns the largest of them.
const maxOfThree = function(a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else return c;
};
console.log("Expected output of maxOfThree(2, 4, -10) is 4");
console.log(myTest(4, maxOfThree(2, 4, -10)));

console.log('----- isVowel function : ----- ');
// Write a function isVowel() that takes a character(i.e.a string of length 1)
// and returns true if it is a vowel, false otherwise.
const isVowel = function(c) {
    if (c === "a" || c === "e" ||
        c === "i" || c === "u" ||
        c === "y")
        return true;
    else
        return false;
}
console.log("Expected output of isVowel('a') is true");
console.log(myTest(true, isVowel('a')));
console.log("Expected output of isVowel('b') is false");
console.log(myTest(false, isVowel('b')));

console.log('----- sum and multi functions : ----- ');
// Define a function sum() and a function multiply() that sums
// and multiplies(respectively) all the numbers in an
// array of numbers.For example, sum([1, 2, 3, 4])
// should return 10, and multiply([1, 2, 3, 4]) should return 24.
const sum = function(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
        r += arr[i];
    }
    return r;
}
console.log("Expected output of sum([1, 2, 3, 4]) is 10");
console.log(myTest(10, sum([1, 2, 3, 4])));

const multi = function(arr) {
    let r = 1;
    for (let i = 0; i < arr.length; i++) {
        r *= arr[i];
    }
    return r;
}
console.log("Expected output of multi([1, 2, 3, 4]) is 24");
console.log(myTest(24, multi([1, 2, 3, 4])));

console.log('----- reverse function : ----- ');
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
const reverse = function(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}
console.log("Expected output of reverse('abc') is 'cba'");
console.log(myTest('cba', reverse('abc')));


console.log('----- findLongestWord function : ----- ');
// Write a function findLongestWord() that takes an array
// of words and returns the length of the longest one.
const findLongestWord = function(arr) {
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (longest < arr[i])
            longest = arr[i];
    }
    return longest;
}
console.log("Expected output of findLongestWord(['abc', '', 'abcde']) is 'abcde'");
console.log(myTest('abcde', findLongestWord(['abc', '', 'abcde'])));

console.log('----- filterLongestWord function : ----- ');
const filterLongestWord = function(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("Expected output of filterLongestWord(['abc', 'abcd', 'abcde'], 3) is ['abcd', 'abcde']");
console.log(myTestArray(['abcd', 'abcde'], filterLongestWord(['abc', 'abcd', 'abcde'], 3)));


console.log('----- map - filter - reduce functions : ----- ');
// Modify the array [1, 3, 5, 3, 3] with the map/filter/reduce as follows:
// a) multiply each element by 10; 
// b) return array with all elements equal to 3; 
// c) return the product of all elements;

const myMap = function(arr) {
    return arr.map((e, i, a) => e * 10);
}
const myFilter = function(arr) {
    return arr.filter((e, i, a) => e === 3);
}
const myReduce = function(arr) {
    return arr.reduce((acc, e) => acc *= e, 1);
}

console.log("Expected output of myMap([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]");
console.log(myTestArray([10, 30, 50, 30, 30], myMap([1, 3, 5, 3, 3])));

console.log("Expected output of myMap([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]");
console.log(myTestArray([3, 3, 3], myFilter([1, 3, 5, 3, 3])));

console.log("Expected output of myMap([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]");
console.log(myTest(135, myReduce([1, 3, 5, 3, 3])));