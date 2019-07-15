### 移动0

``` js
/**
 * moveZero 要求原地移动
 * [0, 0, 0, 1, 2, 3]、[1, 0, 0, 2, 0, 3]、[1, 2, 3, 0, 0, 0]
 *
*/

const moveZero = arr => {
    const swap = (a, b) => a !== b && ([arr[a], arr[b]] = [arr[b], arr[a]]);
    let [slow, fast] = [0, 0];
    while (fast < arr.length) {
        if (arr[fast]) {
            swap(slow, fast);
            slow++;
        }
        fast++;
    }
};
```