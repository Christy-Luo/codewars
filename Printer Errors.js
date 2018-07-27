/**
 * Printer Errors
 * 计算字符串中非[a-m]的个数
 * eg: 
 * s="aaabbbbhaijjjm"  error_printer(s) => "0/14"
 * s="aaaxbbbbyyhwawiwjjjwwm"  error_printer(s) => "8/22"
 */

/**
 * 得到非a-m的字符串
 */
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

/**
 * 把属于a-m的替换掉
 */
function printerError(s) {
    return s.replace(/[a-m]/g, '').length + '/' + s.length;
}