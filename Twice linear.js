/**
 * Twice linear
 * 数组u(0) = 1, u(1) = 2 * u(0) + 1, u(2) = 3 * u(0) + 1
 * 7 = 2 * 3 + 1, 9 = 2 * 4 + 1, 10 = 3 * 3 + 1, 需要去重
 * Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
 */

function dblLinear(n) {
    var ai = 0,
        bi = 0,
        eq = 0;
    var sequence = [1];
    while (ai + bi < n + eq) {
        var y = 2 * sequence[ai] + 1;
        var z = 3 * sequence[bi] + 1;
        if (y < z) {
            sequence.push(y);
            ai++;
        } else if (y > z) {
            sequence.push(z);
            bi++;
        } else {
            sequence.push(y);
            ai++;
            bi++;
            eq++;
        }
    }
    return sequence.pop();
}

function dblLinear(n) {
    let u = [1],
        x = 0,
        y = 0;// 用两个指针记录，优先插入小的值
    for (let i = 0; i < n; i++) {
        let nextX = 2 * u[x] + 1,
            nextY = 3 * u[y] + 1;
        if (nextX <= nextY) {
            u.push(nextX);
            x++;
            if (nextX == nextY) y++;
        } else {
            u.push(nextY);
            y++;
        }
    }
    return u[n];
}