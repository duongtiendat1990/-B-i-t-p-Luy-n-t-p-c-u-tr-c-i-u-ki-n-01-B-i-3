function Check() {
    let number = document.getElementById("number").value;
    sign = number / 0;
    switch (sign) {
        case -Infinity:
            document.getElementById("result").innerHTML = 'Negative';
            break;
        case +Infinity:
            document.getElementById("result").innerHTML = 'Positive';
            break;
        default:
            document.getElementById("result").innerHTML = 0;
    }
}