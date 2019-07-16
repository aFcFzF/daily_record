有空节点

``` js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root || (root && !root.left && !root.right)) {
        return 0;
    }
    let l = [];
    const dfs = node => {
        if (node.left) {
            const {left, right, val} = node.left;
            !left && !right && l.push(val);
            dfs(node.left);
        }
        node.right && dfs(node.right);
    };
    dfs(root);
    return l.reduce((a, b) => a + b, 0);
};
```