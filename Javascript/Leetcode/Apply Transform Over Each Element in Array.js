var map = function(arr, fn) {
    const res = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) res[i] = fn(arr[i], i);
    return res;
};
