/**
 * Extract the domain name from a URL
 */

function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

/**
 * (?:x) 匹配 'x' 但是不记住匹配项
 * (x?=y) 匹配'x'仅仅当'x'后面跟着'y'
 * (x?!y) 匹配'x'仅仅当'x'后面不跟着'y'
 * [^xyz] 匹配任何没有包含在方括号中的字符
 */
function domainName(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
    let reg = /^(https\:\/\/|http\:\/\/)?(www\.)?([\w\d-]+)(\..+$)/;
    var matches = url.match(reg);
    var domain = matches && matches[3];
    return domain;
  }