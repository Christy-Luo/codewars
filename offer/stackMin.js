var stack = [];
var stackMin = [];
function push(node)
{
    stack.push(node);
    let len = stackMin.length;
    if(len === 0 || node < stackMin[len-1]) stackMin.push(node);
}
function pop()
{
    let node = stack.pop();
    let len = stackMin.length;
    if(node === stackMin[len-1]) stackMin.pop();
}
function top()
{
    let len = stack.length;
    return stack[len-1];
}
function min()
{
    let len = stackMin.length;
    return stackMin[len-1];
}