/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
var stack1 = [],
    stack2 = [];

function push(node) {
    stack1.push(node);
}

function pop() {
    if (stack2.length === 0) {
        while (stack1.length > 0) {
            stack2.push(stack1.pop());
        }
    }
    if (stack2.length > 0) return stack2.pop();
    else return null;
}