/**
 * Persistent Bugger.
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