### 将有序数组转换为二叉搜索树(前提是数组要对哈)

``` js
const sortedToBST = arr => {
    const proc =(l, r) => {
        if (l > r) return null;
        const m = l + r >> 1;
        const node = new TreeNode(arr[m]);
        node.left = proc(l, m - 1);
        node.right = proc(m + 1, r);
        return node;
    };
    
    return proc(0, arr.length - 1);
};

const arr = [-10, -3, 0, 5, 7, 9, 11, 13];
const tree = sortedToBST(arr);
```