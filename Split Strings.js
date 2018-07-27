/**
 * Split Strings
 * 拆分字符串
 * solution('abc') // should return ['ab', 'c_']
 * solution('abcdef') // should return ['ab', 'cd', 'ef']
 */

/**
 * .可以匹配除换行和回车之外的任意字符
 */
function solution(str){
  return (str+'_').match(/../g);
}

function solution(str){
    let res = []; 
    if(str.length%2 != 0) str+='_';
    for(let i=0;i<str.length-1;){
      res.push(str.substr(i,2));
      i+=2
    }
    return res;
}