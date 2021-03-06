/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * @param {*} pRoot1 
 * @param {*} pRoot2 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    if (pRoot1 == null || pRoot2 == null) return false;
    return (isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2));
}

function isSubtree(pRoot1, pRoot2) {
    if (pRoot2 == null) return true;    
    if (pRoot1 == null) return false;
    return ((pRoot1.val == pRoot2.val) && isSubtree(pRoot1.left, pRoot2.left) && isSubtree(pRoot1.right, pRoot2.right));
}