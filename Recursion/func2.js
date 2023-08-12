function func2(n) {
    if (n == 0) return;


    func2(Math.floor(n / 2));
    console.log(n % 2 + " ");
}
func2(18);