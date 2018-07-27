/**
 * Duplicate Encoder
 * 将有相同出现过一次的字母转成(，出现多次的转成)
 * "din" => "((("
 * "recede" => "()()()"
 * "Success" => ")())())"
 * "(( @" => "))(("
 */

function duplicateEncode(word){
    word.toLowerCase().split('').map((val,index,arr)=>{
        return arr.indexOf(val) === arr.lastIndexOf(val) ? '(' : ')';
    });
}

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

/**
 * 新开一个map去存储
 */
function duplicateEncode(word){
    let newword = word.toLowerCase();
    let map = new Map();
    for(let i=0;i<newword.length;i++){
      if(map.has(newword[i])){
        let val = map.get(newword[i]);
        map.set(newword[i], val+1);
      }else{
        map.set(newword[i], 1);
      }      
    }
    return newword.split('').map(w=>map.get(w)===1?'(':')').join('');
}