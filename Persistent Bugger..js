/**
 * Persistent Bugger.
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 * 一直到4只有一位数，总共进行了3次
 */

const persistence = num => {
    return `${num}`.length > 1 ?
        1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) :
        0;
}

function persistence(num) {
    let count = 0;
    while (num > 9) {
        num = String(num).split('').reduce((x, y) => (+x) * (+y));
        count++
    }
    return count;
}