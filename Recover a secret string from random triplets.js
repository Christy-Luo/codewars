/**
 * Recover a secret string from random triplets
 * secret1 = "whatisup"
 * triplets1 = [
 *   ['t','u','p'],
 *   ['w','h','i'],
 *   ['t','s','u'],
 *   ['a','t','s'],
 *   ['h','a','p'],
 *   ['t','i','s'],
 *   ['w','h','s']
 * ]
 * 根据二维数组顺序，猜单词
 */

var recoverSecret = function (triplets) {
    // 获取二维数组的第一列的单词
    for (var [first] of triplets) {
        // 判断是不是每一行，该单词的位置都小于等于0，如果是的话，则代表它是第一个单词
        if (triplets.every(tuple => tuple.indexOf(first) <= 0)) {
            // 把第一个单词删除
            triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
            return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
        }
    }
    return '';
}

var recoverSecret = function (triplets) {
    let arr = triplets.join(',').split(',');
    let result = Array.from(new Set(arr)).join('');
    var flag = true;
    while (flag) {
        flag = false;
        for (let i = 0; i < triplets.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (result.indexOf(triplets[i][j]) > result.indexOf(triplets[i][j + 1])) {
                    flag = true
                    result = result.replace(triplets[i][j], triplets[i][j + 1]).replace(triplets[i][j + 1], triplets[i][j])
                }
            }
        }
    }
    return result;
}