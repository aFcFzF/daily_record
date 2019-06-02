Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

``` bash
Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.
```

``` js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        num = (num + '').split('').reduce((a, b) => a + +b, 0);
    }
    return num;
};
```