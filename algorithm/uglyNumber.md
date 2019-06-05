Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.


Example 1:
``` bash
Input: 6
Output: true
Explanation: 6 = 2 × 3
```

Example 2:
``` bash
Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
```
Example 3:
``` bash
Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.
```
Note:

1 is typically treated as an ugly number.
Input is within the 32-bit signed integer range: [−231,  231 − 1].

``` js
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) return false;
    while (num > 0) {
		if (num === 1) return true;
        if (!(num % 2)) num /= 2;
        else if (!(num % 3)) num /= 3;
        else if (!(num % 5)) num /= 5;
        else return false
    }
    return true
};
```