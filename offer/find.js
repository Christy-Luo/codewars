/**
 * 在一个二维数组中（每个一维数组的长度相同）
 * 每一行都按照从左到右递增的顺序排序
 * 每一列都按照从上到下递增的顺序排序
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 */

 /**
  * 从右上角开始查找
  */
function Find(target, array)
{
    var m = array.length;
    var n = array[0].length;
    console.log(m);
    console.log(n);
    return findTarget(target, array, 0, m, n);
}
function findTarget(target, array, m1, m, n){
    if(m1 > (m - 1) || n < 1) return false;
    var num = array[m1][n-1];
    console.log(num);
    if(target == num) return true;
    else if(target < num) return findTarget(target, array, m1, m, n-1);
    else return findTarget(target, array, ++m1, m, n);
}

Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]])