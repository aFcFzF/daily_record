### 快乐数

``` js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const sqMap = Array.from({length: 10}, (_, i) => i ** 2);
    const record = new Set();
    const check = str => {
        let r = 0;
        str.split('').forEach(e => r += sqMap[e]);  
        if (record.has(r)) return false;
        if (r === 1) return true;
        record.add(r);
        return check(r + '');
    };
    return check(n + '');
};
```