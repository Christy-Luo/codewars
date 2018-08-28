// 把只包含质因子2、3和5的数称作丑数（Ugly Number）
// 例如6、8都是丑数，但14不是，因为它包含质因子7。 
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数

function GetUglyNumber_Solution(index)
{
    if (index == 0) return 0;
    let ugly = [1];
    let count = 1;
    let a2 = 0,a3 = 0,a5 = 0;
    while (count < index) {
        ugly[count] = Math.min(2*ugly[a2], Math.min(3*ugly[a3], 5*ugly[a5]));
        if(ugly[count] == 2*ugly[a2]) a2++;
        if(ugly[count] == 3*ugly[a3]) a3++;
        if(ugly[count] == 5*ugly[a5]) a5++;
        count ++;
    }
    return ugly[index-1];
}