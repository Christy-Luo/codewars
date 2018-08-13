/**
 * FindGreatestSumOfSubArray
 * 最大子数组和
 */

function FindGreatestSumOfSubArray(array) {
    var sum = -Infinity,
        temp = 0;
    for (var i = 0; i < array.length; i++) {
        temp = temp + array[i];
        sum = Math.max(sum, temp);
        if (temp < 0) temp = 0;
    }
    return sum;
}