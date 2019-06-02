二叉树全部路径

``` js
const buildTree = function (arr) {
	function TreeNode(val) {
		this.val = val;
		this.left = this.right = null;
	}
	const q = [];
	let i = 0;
	const root = new TreeNode(arr[i++]);
	q.push(root);
	while (q.length) {
		const item = q.shift();
		const [l, r] = [arr[i++], arr[i++]];
		l != null && (q.push(item.left = new TreeNode(l)));
		r != null && (q.push(item.right = new TreeNode(r)));
	}
	return root;
};

buildTree([1, 2, 3, null, 5]);
```

``` js
var binaryTreePaths = function(root) {
    const paths = [];
    const dfs = (node, p = '') => {
        if (!node) return;
        const symbol = p === '' ? '' : '->';
        p += `${symbol}${node.val}`;
		!node.left && !node.right && paths.push(p);
        dfs(node.left, p);
        dfs(node.right, p);
    };
    dfs(root);
    return paths;
};
```