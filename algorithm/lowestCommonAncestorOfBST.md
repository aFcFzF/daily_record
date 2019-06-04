``` js
const buildTree = arr => {
	if (!arr.length) return null;
    function TreeNode (val) {
        this.val = val;
        this.left = this.right = null;
    };
	let i = 0;
	const len = arr.length;
	const root = new TreeNode(arr[i++]);
	const stack = [root];
	while (stack.length) {
		const item = stack.shift();
		const [l, r] = [arr[i++], arr[i++]];
		l !== undefined && (stack.push(item.left = new TreeNode(l)));
		r !== undefined && (stack.push(item.right = new TreeNode(r)));
	}
	return root;
}
``` 

``` js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = node => {
        if ((p.val <= node.val && q.val >= node.val) || (p.val >= node.val && q.val <= node.val)) {
            return node;
        }
        else if (p.val <= node.val) {
            return dfs(node.left);
        }
        else {
            return dfs(node.right);
        }
    };  
    return dfs(root);
};
```