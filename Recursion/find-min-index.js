
// minimum index finder

function minIndex(arr, s, e) {
    var sml = Number.MAX_SAFE_INTEGER;
    var mindex;
    for (let i = s; i < e; i++) {
        if (sml > arr[i]) {
            sml = arr[i];
            mindex = i;
        }
    }
    return mindex;
}

function fun2(arr, start_index, end_index) {
    if (start_index >= end_index)
        return;
    var min_index;
    var temp;

    // minIndex() returns index of minimum value in
    // array arr[start_index...end_index]
    min_index = minIndex(arr, start_index, end_index);

    // swap the element at start_index and min_index
    temp = arr[start_index];
    arr[start_index] = arr[min_index];
    arr[min_index] = temp;

    fun2(arr, start_index + 1, end_index);
}
let arr = [2, 4, 1, 8, 5, 3];
