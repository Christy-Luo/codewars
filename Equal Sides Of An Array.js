/**
 * Equal Sides Of An Array
 * 找到数组中的一个数，数的左边的和等于右边的和
 * eg: {1,2,3,4,3,2,1} res = 3,返回的是index
 */

function findEvenIndex(arr) {
    let res = -1;
    let sum = arr.reduce((x, y) => x + y);
    arr.reduce(function (total, num, index) {
        let temp = total + num;
        res = temp === (sum - temp + num) ? index : res;
        return temp;
    }, 0);
    return res;
}