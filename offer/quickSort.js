function quickSort(arr, left, right) {
    var flag = arr[right];
    var p = left;
    for (var i = left; i <= right; i++) {
        if (arr[i] <= flag) {
            var temp = arr[p];
            arr[p] = arr[i];
            arr[i] = temp;
            p++;
        }
    }
    if (left < p - 2) quickSort(arr, left, p - 2);
    if (right > p) quickSort(arr, p, right);
}

var arr = [2, 0, 25, 9, 62, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);