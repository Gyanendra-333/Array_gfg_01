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



// find the peak element in given array

// function findPeakElem(arr, n) {

//     // put initial condition
//     if (n == 1) return 0;
//     if (arr[0] >= arr[1]) return 0;
//     if (arr[n - 1] >= arr[n - 2]) return 0;

//     for (let i = 1; i < n - 1; i++) {
//         if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
//     }
// }
// let arr = [5, 40, 6, 5];
// let n = arr.length;
// console.log("Peak Element index is : ", + findPeakElem(arr, n));


// function countOfOccurance(arr, n, x) {
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         if (x == arr[i])
//             res++;
//     }
//     return res;
// }
// let arr = [1, 2, 3, 3, 2, 3, 4, 2, 3];
// let n = arr.length;
// let x = 3;
// console.log(countOfOccurance("Count of Occurance = " + arr, n, x));


// function findSubarraySum(arr, n, sum) {

//     for (let i = 0; i < n; i++) {
//         let currentSum = arr[i];

//         if (currentSum == sum) {
//             console.log("sum of subArray index " + i);
//             return;
//         }
//         else {
//             for (let j = i + 1; j < n; j++) {
//                 currentSum += arr[j];

//                 if (currentSum == sum) {
//                     console.log("sum of Subarray from indexs is " + i + " to " + j);
//                     return;
//                 }
//             }
//         }
//     }
//     console.log("Subarray not Found");
//     return;
// }
// let arr = [1, 3, 5, 7, 9, 2, 3];
// let n = arr.length;
// let sum = 15;
// findSubarraySum(arr, n, sum);



function arrangeNum(arr) {
    arr.sort();
}
let arr = [2, -3, 6, -6, -7, -9, 3, 7, 4, -2];
arrangeNum(arr);

for (let num of arr)

    console.log(num);