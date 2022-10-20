/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    const dfs = function(l, r) {
        if (!l && !r) return null;
        if (!l) return r;
        if (!r) return l;
        l.val += r.val;
        l.left = dfs(l.left, r.left);
        l.right = dfs(l.right, r.right);
        return l;
    }
    return dfs(root1, root2)
};