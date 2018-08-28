/**
 * 根据后序遍历的数组结果检测是否是BST树
 * 二叉查找树  左儿子的节点数小于根小于右儿子
 * @param {*} sequence 
 */
function VerifySquenceOfBST(sequence)
{
    let len = sequence.length;
    if(len <= 0) return false;
    if(len === 1) return true;
    return judge(sequence, 0, len - 1);
}

function judge(sequence, start, end) {
    if(start >= end) return true;
    let i = start;
    while(sequence[i] < sequence[end] && i < end - 1) i++;
    for(let j = i + 1; j < end ; j++) {
        if(sequence[j] < sequence[end]) return false;
    }
    return judge(sequence, start, i) && judge(sequence, i + 1, end - 1);
}