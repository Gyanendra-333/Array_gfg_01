// function printFun(test) {

//     if (test < 1) return 1;

//     else {
//         console.log(test + " ");
//         printFun(test - 1);
//         console.log(test + " ");
//         return;
//     }
// }
// let test = 4;
// printFun(test);



// Fibnacci number find

// function findFibnacciNum(n) {
//     if (n == 0) return 0;
//     if (n == 1 || n == 2) return 1;

//     else {
//         return findFibnacciNum(n - 1) + findFibnacciNum(n - 2);
//     }
// }
// let n = 8;
// console.log("Fibnacci number is : ");

// for (let i = 0; i < n; i++) {
//     console.log(findFibnacciNum(i) + " ");
// }


// Find Factorial

function fact(n) {
    if (n == 0 || n == 1) return 1;

    else {
        return n * fact(n - 1);
    }
}
let n = 9;
console.log("Factorial of " + n + " is : " + fact(n));