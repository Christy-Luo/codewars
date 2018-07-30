/**
 * Find the unique number
 * 找到数组中唯一不一样的值
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 */

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

function findUniq(arr) {
    arr.sort();
    let start = arr[0],
        end = arr[arr.length - 1];
    return start === arr[1] ? end : start;
}