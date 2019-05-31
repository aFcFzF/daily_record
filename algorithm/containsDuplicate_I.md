Contains Duplicate I

``` js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = {};
    let len = nums.length;
    while (len--) {
        const v = nums[len]
        if (map[v]) return true;
        map[v] = true;
    }
    return false;
};
```