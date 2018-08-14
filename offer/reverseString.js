/**
 * js字符串无法修改其中的某一个值
 * c++ 中可以将整个字符串倒转，再查找空格 挨个反转单词
 * @param {*} str 
 */
function reverseString(str) {
    return str.split(' ').reverse().join(' ');
}