/**
 * 将数字以降序排列
 * eg: 35428 => 85432
 */

function descendingOrder(n){
    return ~~(String(n).split('').sort().reverse().join(''));
}

/**
 * 第一版 - -
 * 麻烦的写法
 */
function descendingOrder(n){
    var a = [];
    var count = 0;
    var res = 0;
    while(n>0){
      a[count] = n%10;
      n = ~~(n/10);
      count++;
    }
    a.sort(function(a,b){
      return b-a;
    });
    for(var i=0;i<a.length;i++){
      res = res + Math.pow(10,count-i-1)*a[i];
    }
    return res;
  }