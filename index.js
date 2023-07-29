function reverseArr(start, end, arr) {

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        temp = arr[end];
        start++;
        end--;
    }

}
function printArr(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}
let n = 6;
let arr = [1, 2, 3, 4, 5, 6];

printArr(arr, n);
reverseArr(0, n - 1, arr);
console.log("Reverse Array is = ");
printArr(arr, n);