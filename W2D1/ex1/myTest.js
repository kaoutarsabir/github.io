'use strict';

describe("sum", function() {
    it("sum all element of an array",
        function() {
            assert.equal(10, sum([1, 5, 4]));
        });
});
describe("reverse", function() {
    it("computes the reversal of a string",
        function() {
            assert.equal('cba', reverse('abc'));
        });
});
describe("filterLongestWord", function() {
    it("return the array of words that are longer than i",
        function() {
            assert.equal(['abcd', 'abcde'].join("-"),
                filterLongestWord(['ab', 'abc', 'abcd', 'abcde'], 3).join("-"));
        });
});