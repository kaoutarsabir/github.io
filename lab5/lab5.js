const max = function(a, b) {
    if (a > b)
        return a;
    else
        return b;
};

const result1 = max(50, 44);
console.log(result1);

const maxOfThree = function(a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else return c;
};

const result2 = maxOfThree(2, 4, 10);
console.log(result2);

const isVowel = function(c) {
    if (c === "a" || c === "e" ||
        c === "i" || c === "u" ||
        c === "y")
        return true;
    else
        return false;
}
const result3 = isVowel('a');
console.log(result3);

const sum = function(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
        r += arr[i];
    }
    return r;
}
const result4 = sum([1, 2, 3, 4]);
console.log(result4);

const multi = function(arr) {
    let r = 1;
    for (let i = 0; i < arr.length; i++) {
        r *= arr[i];
    }
    return r;
}
const result5 = multi([1, 2, 3, 4]);
console.log(result5);

const reverse = function(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}
const result6 = reverse('abc');
console.log(result6);

const findLongestWord = function(arr) {
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (longest < arr[i])
            longest = arr[i];
    }
    return longest;
}
const result7 = findLongestWord(['abc', '', 'abcde']);
console.log(result7);

const filterLongestWord = function(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            result.push(arr[i]);
        }
    }
    return result;
}
const result8 =
    filterLongestWord(['abc', 'abcd', 'abcde'], 3);
console.log(result8);

const a = [1, 3, 5, 3, 3];

const result9 = a.map((elem, i, arr) => elem * 10);
console.log(result9);

const result10 = a.filter((elem, i, arr) => elem === 3);
console.log(result10);

const result11 = a.reduce((acc, el) => acc *= el, 1);
console.log(result11);