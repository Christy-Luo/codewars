/**
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,
 */

 // 快排  复杂度 O（nlogn）
function GetLeastNumbers_Solution(input, k) {
    if ((k > input.length) || (k <= 0)) return [];
    input.sort(function (a, b) {
        return a - b;
    })
    return input.slice(0, k);
}

// 堆排 复杂度O（nlogk）维护一个大小为k的大顶堆，需要logk，但是总共有n个数