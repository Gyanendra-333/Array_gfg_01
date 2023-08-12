function func1(n) {
    if (n == 1) return 0;

    else return 1 + func1(Math.floor(n / 2));
}
console.log(func1(32));