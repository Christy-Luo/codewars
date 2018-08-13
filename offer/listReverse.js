/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
 * @param {*} head 
 */
function printListFromTailToHead(head)
{
    if(head == null) return [];
    var pre = head, cur = head;
    var arr = [];  
    while(cur.next != null){
        arr.push(cur.val);
        cur = cur.next;
    }
    arr.push(cur.val);
    return arr.reverse();
}