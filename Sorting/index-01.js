
// function bubbleSort(arr, n) {
//     let i, j, temp, swapped;

//     for (let i = 0; i < n - 1; i++) {

//         swapped = false;
//         for (let j = 0; j < n - i - 1; j++) {

//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true;
//             }
//         }
//         if (swapped == false) break;
//     }
// }
// function printArray(arr, size) {
//     let i;
//     for (let i = 0; i < size; i++) {
//         console.log(arr[i] + " ");
//     }
// }
// let arr = [10, 50, 30, 60, 20, 70, 80, 40];
// let n = arr.length;
// bubbleSort(arr, n);
// console.log("Sorted Array is : ");
// printArray(arr, n);




function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function selectionSort(arr, n) {
    let i, j, min_idx;

    for (let i = 0; i < n - 1; i++) {
        min_idx = i;

        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[min_idx]) {
                min_idx = j;
                swap(arr, min_idx, i);
            }
        }
    }
}
function printArray(arr, size) {
    let i;
    for (let i = 0; i < size; i++) {
        console.log(arr[i] + " ");
    }
}
let arr = [10, 40, 46, 35, 40, 20];
let n = arr.length;
selectionSort(arr, n);
console.log("Sorted array id : ");
printArray(arr, n);