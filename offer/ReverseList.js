/**
 * 反转链表，输出链表头
 */

function ReverseList(pHead) {
    let root = null;
    let cur = null;
    while(pHead != null){
        cur = pHead.next;
        pHead.next = root;
        root = pHead;
        pHead = cur;
    }
    return root;
}