/**
 * Rot13
 * test => grfg
 * Test => Grfg
 */
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));

function rot13(message) {
    return message.split('').map(x => {
        if (!/^[a-zA-Z]$/.test(x)) return x;
        let num = x.charCodeAt(0);
        if (num >= 97) {
            return String.fromCharCode((num - 97 + 13) % 26 + 97);
        }
        return String.fromCharCode((num - 65 + 13) % 26 + 65);
    }).join('');
}