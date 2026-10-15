function tinh(pheptinh) {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let kq;

    if (pheptinh == "+") {
        kq = a + b;
    } else if (pheptinh == "-") {
        kq = a - b;
    } else if (pheptinh == "*") {
        kq = a * b;
    } else if (pheptinh == "/") {
        kq = a / b;
    }

    document.getElementById("result").value = kq;
}