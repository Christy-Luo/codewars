/**
 * 给定两个数组a,b，返回a数组中与b数组不相同的部分
 */

/**
 * 利用filter过滤掉a在b中存在的部分
 */
function array_diff(a, b) {
    return a.filter(x=>!b.includes(x));
}

/**
 * 第一版
 * 利用正则删除a在b中存在的部分
 */
function array_diff(a, b) {
    var astr = a.join('');
    for(var i=0;i<b.length;i++){
      var reg = new RegExp(b[i],"g");
      astr = astr.replace(reg,'');
    }
    return astr.split('');
  }