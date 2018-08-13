/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    var len = pre.length;
    return createTree(pre, vin, 0, len - 1, 0);
}
function createTree(pre, vin, left, right, rootIndex){
    var val = pre[rootIndex];
    var midIndex = vin.indexOf(val); 
    var root = new TreeNode(val);
    if(midIndex > left) root.left = createTree(pre, vin, left, midIndex - 1, rootIndex + 1 );
    if(midIndex < right) root.right = createTree(pre, vin, midIndex + 1, right, rootIndex + midIndex - left + 1 );
    return root;
}


function reConstructBinaryTree(pre, vin){
    var len = pre.length;
    if(len <= 0) return null;
    var val = pre[0];
    var root = new TreeNode(val);
    var index = vin.indexOf(val);
    root.left = reConstructBinaryTree(pre.slice(1,index+1), vin.slice(0, index));
    root.right = reConstructBinaryTree(pre.slice(index+1), vin.slice(index+1));
    return root;
}