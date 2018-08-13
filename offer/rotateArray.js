function minNumberInRotateArray(rotateArray) {
    var len = rotateArray.length;
    if (len <= 0) return 0;
    var minX = Infinity;
    for (var i = 0; i < len; i++) {
        minX = Math.min(minX, rotateArray[i]);
    }
    return minX;
}