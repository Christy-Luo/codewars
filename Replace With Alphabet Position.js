/**
 * Replace With Alphabet Position
 * 把字母转成对应的数字
 */

function alphabetPosition(text) {
    return text.replace(/[^a-zA-Z]/g,'').toLowerCase().split('').map(x=>x.charCodeAt(0)-96).join(' ');
}