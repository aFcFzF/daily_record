检测一个数是否是2的幂

例如： 208  false
``` bash
js中，所有的数字变量默认都是有符号整数。高位0表示整数，1表示负数。
例如：
const signed_32 = '1'.repeat(31);
signed_32 << 1 // 溢出

利用无符号右移： >>>
```
思路1： `10000 and 01111 === 0` 或者
思路2： 32位最大2次幂数 % 该 ccc数 === 0 （32位最大2的幂是  1 << 30）

解1：
``` js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0 || (n & n - 1) !== 0) return false;
    return true;
};
```

解2：
``` js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n > 0 && (1 << 30) % n === 0) return true;
    return false;
};
```