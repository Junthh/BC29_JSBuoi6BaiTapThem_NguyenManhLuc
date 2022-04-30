
function check(n) {
    var kt = true;
    if (n < 2) {
        kt = false;
    }
    else if (n == 2) {
        kt = true;
    }
    else if (n % 2 == 0) {
        kt = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                kt = false;
                break;
            }
        }
    }

    return kt;
}




document.getElementById("subMit_1").onclick = function () {
    var n = document.getElementById("enNumber_1").value*1;
    var content = "";
    for (var i = 1; i <= n; i++) {
        if (check(i)){
            content += i + " ";
        }
    }
    document.getElementById("show_1").innerHTML = content;
}

