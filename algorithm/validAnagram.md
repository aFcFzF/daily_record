Given two strings s and t , write a function to determine if t is an anagram of s.

``` bash
Input: s = "anagram", t = "nagaram"
Output: true
```

``` bash
Input: s = "rat", t = "car"
Output: false
```

``` js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    for (const i of s) {
        const val = map[i];
        map[i] =  val ? val + 1 : 1;
    }
    for (const i of t) {
        if (!map[i]) return false;
        const val = map[i];
        map[i] && (map[i] = val - 1);
    }
    return true;
};
```