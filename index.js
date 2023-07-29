// function findMinMax(arr, n) {
//     minmax = new Array();
//     // let i, min, max;
//     if (n == 1) {
//         minmax.min = arr[0];
//         minmax.max = arr[0];
//         return minmax;
//     }
//     if (arr[0] > arr[1]) {
//         minmax.min = arr[1];
//         minmax.max = arr[0];
//     }
//     else {
//         minmax.min = arr[0];
//         minmax.max = arr[1];
//     }
//     for (let i = 2; i < n; i++) {
//         if (arr[i] > minmax.max) {
//             minmax.max = arr[i];
//         }
//         else if (arr[i] < minmax.min) {
//             minmax.min = arr[i];
//         }
//     }
//     return minmax;
// }
// let arr = [2000, 20, 38, 34, 40];
// let n = 5;
// minmax = findMinMax(arr, n);
// console.log("Min Number = ", minmax.min);
// console.log("Max Number is = ", minmax.max);