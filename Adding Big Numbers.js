/**
 * Adding Big Numbers
 * 计算两个数相加，数是string类型的，返回的结果也是string
 */

function add(a, b) {
    a = a.split('');
    b = b.split('');
    let c = 0,
        res = '';
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        // 判断要不要进一位
        c = c > 9;
    }
    return res
}