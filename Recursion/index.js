function printFun(test) {

    if (test < 1) return 1;

    else {
        console.log(test + " ");
        printFun(test - 1);
        console.log(test + " ");
        return;
    }
}
let test = 4;
printFun(test);