/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39
 * @param {*} n
 * 使用循环 不适用递归
 */
function Fibonacci(n)
{
    var a1 = 0, a2 = 1;
    while(n--){
        a2 += a1;
        a1 = a2 - a1;      
    }
    return a1;
}

/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法
 */
function jumpFloor(number)
{
    if (number === 1 ) return 1;
    if (number === 2 ) return 2;
    return jumpFloor(number - 1) +  jumpFloor(number - 2);
}

function jumpFloor(number)
{
    var first = 1, second = 2, third;
    if(number === 1) return 1;
    if(number === 2) return 2;
    for(var i=3;i<=number;i++){
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}

/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
 */

function jumpFloorII(number)
{
    if(number == 1) return 1;
    return 2*jumpFloorII(number - 1);
}