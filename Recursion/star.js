
function printStar(n) {
    let i = 0;
    if (n > 1) printStar(n - 1);

    for (let i = 0; i < n; i++)
        console.log("*");
}
printStar(4);