/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */

function rectCover(number)
{
    var first = 1, second = 2, third;
    if(number === 0) return 0;
    if(number === 1) return 1;
    if(number === 2) return 2;
    for(var i=3;i<=number;i++){
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}
function rectCover(number)
{
    if(number === 0) return 0;
    var a1 = 1, a2 = 2;
    while(--number){
        a2 += a1;
        a1 = a2 - a1;      
    }
    return a1;

}