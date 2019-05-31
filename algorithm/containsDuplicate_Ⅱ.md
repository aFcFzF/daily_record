``` bash
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
```

``` js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {};
    for (const [idx, val] of nums.entries()) {
        if (map[val] != undefined && idx - map[val] <= k) return true;
        map[val] = idx;
    }
    return false;
};
```