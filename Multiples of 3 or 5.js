/**
 * Multiples of 3 or 5
 * 给定输入的值，找小于这个值并且是3和5的倍数的和
 * eg: 10 => 3,5,6,9和为3+5+6+9=23
 */
function solution(number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}

function solution(number) {
    var n3 = Math.floor(--number / 3),
        n5 = Math.floor(number / 5),
        n15 = Math.floor(number / 15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}

function solution(number) {
    let res = 0;
    for (let i = 1; i < number; i++) {
        if (3 * i < number) {
            res += 3 * i;
        }
        if (5 * i < number) {
            res += 5 * i;
        }
        if (15 * i < number) {
            res -= 15 * i;
        }
        if (3 * i >= number) {
            break;
        }
    }
    return res;
}