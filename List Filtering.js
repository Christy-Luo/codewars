/**
 * List Filtering
 * 过滤掉数组中不是数字的
 */

function filter_list(l) {
    return l.filter(n => Number.isInteger(n));
}

/**
 * 判断是不是数字的方法
 */
function isNumber(obj) {
    return typeof obj === 'number' && !isNaN(obj)
}

/**
 * isFinite判断被传参数是否为有限数值
 * 强化（Number.isFinite）
 * isFinite(Infinity);  // false
 * isFinite(NaN);       // false
 * isFinite(-Infinity); // false
 * isFinite(0);         // true
 * isFinite(2e64);      // true, 在更强壮的Number.isFinite(null)中将会得到false
 * isFinite("0");       // true, 在更强壮的Number.isFinite('0')中将会得到false
 */
function isNumber(obj) {
    return typeof obj === 'number' && isFinite(obj)
}

function isNumber(obj) {
    return obj === +obj
}
