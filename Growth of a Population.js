/**
 * Growth of a Population
 * 计算增长到指定人口需要多少年
 * nb_year(1500, 5, 100, 5000) -> 15
 * nb_year(1500000, 2.5, 10000, 2000000) -> 10
 */

function nbYear(p0, percent, aug, p) {
    // your code
    let count = 0;
    while(p0<p){
      p0 = p0 + p0*percent/100 + aug;
      count ++;
    }
    return count;
}