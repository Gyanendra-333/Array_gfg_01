
// Javascript implementation

function abc(s) {
    if (s.length == 0)
        return;

    abc(s.substring(1));
    abc(s.substring(1));
    console.log(s[0]);
}

abc("x7");
