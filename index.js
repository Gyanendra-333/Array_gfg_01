function reverseArr(arr, start, end) {

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
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
reverseArr(arr, 0, n - 1,);

printArr(arr, n);
console.log("Reverse Array is = ");
printArr(arr, n);