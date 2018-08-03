/**
 * Sum of Intervals
 */

function sumIntervals(intervals) {
    var numbers = [];
    intervals.forEach(function (interval) {
        for (var i = interval[0]; i < interval[1]; i++) {
            if (numbers.indexOf(i) == -1) numbers.push(i);
        }
    });
    return numbers.length;
}

function sumIntervals(intervals) {
    let res = [];
    intervals.map((arr) => {
        for (let i = arr[0]; i < arr[1]; i++) {
            res[i] = i;
        }
    });
    let num = res.filter(x => x > 0).length;
    return num;
}