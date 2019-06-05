Missing Number

``` js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l = 0;
	for (const [i, v] of nums.entries()) l = i ^ v ^ l;
	return l ^ nums.length;
};
```