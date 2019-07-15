Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

``` js
var reverseString = function(s) {
    let [l, r] = [0, s.length - 1];
    const swap = (a, b) => a !== b && ([s[a], s[b]] = [s[b], s[a]]);
    while (l < r) swap(l++, r--);
};
```