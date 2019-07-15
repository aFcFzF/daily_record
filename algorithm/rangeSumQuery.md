Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.

``` js
class NumArray {
    constructor(nums) {
        this.count =[];
        nums.reduce((a, b) => (count.push(a + b), a + b), 0);
    }

    sumRange(i, j) {
        return !i ? this.count[j - i] : this.count[j] - (this.count[i - 1] || 0);
    }
}
```