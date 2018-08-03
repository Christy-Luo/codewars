/**
 * Binary multiple of 3
 * multipleof3Regex.test('000') should be true
 * multipleof3Regex.test('001') should be false
 * multipleof3Regex.test('011') should be true
 * multipleof3Regex.test('110') should be true
 * multipleof3Regex.test(' abc ') should be false
 * runoo*b，可以匹配 runob、runoob、runoooooob 等，* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）。
 */

var multipleOf3Regex = /^(1(01*0)*1|0)*$/;