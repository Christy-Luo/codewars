/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 输入一个链表，输出该链表中倒数第k个结点。

function FindKthToTail(head, k)
{
    // write code here
    let cur = head, pre = head;
    let count = 0;
    while (pre != null) {
        if(count > (k - 1)){
            cur = cur.next;
        }
        pre = pre.next;
        count ++;
    }
    if (count < k) return null;
    return cur;
}