/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示
 * @param {*} n 
 */
function NumberOf1(n) {
    var num = n.toString(2).split('');
    var res = num.filter(x => x === '1').length;
    return n < 0 ? res + 33 - num.length : res;
}

function NumberOf1(n) {

}