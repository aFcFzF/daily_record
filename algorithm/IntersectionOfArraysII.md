Given two arrays, write a function to compute their intersection.

``` bash
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
```

### methods1: 
``` js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = {};
    const map2 = {};
    nums1.forEach(e => map1[e] == null ? map1[e] = 1 : map1[e]++);
    nums2.forEach(e => map2[e] == null ? map2[e] = 1 : map2[e]++);
    const result = [];
    Object.entries(map1).forEach(([k, v]) => {
        let len = v && map2[k] && (v > map2[k] ? map2[k] : v);
        while (len--) result.push(+k);
    });
    return result;
};
```

### methods2:
``` js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let [l, r] = [0, 0];
    const result = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] > nums2[r]) r++;
        else if (nums1[l] < nums2[r]) l++;
        else {
            result.push(nums1[l]);
            l++;
            r++;
        }
    }
    return result;
};
```