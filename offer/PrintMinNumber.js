/**
 * 输入一个正整数数组，
 * 把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323
 */
function PrintMinNumber(numbers) {
    if(numbers.length<=0) return '';
    numbers.sort(function(a,b){
        let stra = String(a);
        let strb = String(b);
        let lena = stra.length;
        let lenb = strb.length;
        for (let i = lena;i < lenb;i++) {
            stra += stra[lena-1];
        }
        for (let i = lenb;i < lena;i++) {
            strb += strb[lenb-1];
        }
        return stra>strb;
    });
    let res = '';
    for (let i=0;i<numbers.length;i++){
        res += numbers[i];
    }
    return Number(res);
}