

function fun1(x, y) {
    if (x == 0)
        return y
    else
        return fun1(x - 1, x + y)
}
console.log(fun1(2, 4));
console.log(fun1(2, 3));
console.log(fun1(1, 2));
console.log(fun1(0, 9));

