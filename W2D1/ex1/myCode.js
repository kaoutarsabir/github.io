'use strict';

function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function sum(arr) {
    return arr.reduce((cur, val) => cur + val);
}

function reverse(str) {
    const arr = str.split('');
    const len = arr.length - 1;
    const revArr = arr.map((val, ind) => arr[len - ind]);
    return revArr.join('');
}

function filterLongestWord(arr, num) {
    let result = [];
    arr.map((value) => {
        if (value.length > num) {
            result.push(value);
        }
    });
    return result;
}