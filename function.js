function Next() {
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    var z = document.getElementById("value3").value;
    if (x == "" || x == null||y== "" || y== null||z == "" || z == null) {
      alert("Please fill the empty priority");
      return false;
    }
  }
function Submit() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var g = document.getElementById("g").value;
    var h = document.getElementById("h").value;
    var i = document.getElementById("i").value;
    var j = document.getElementById("j").value;
    var k = document.getElementById("k").value;
    var l = document.getElementById("l").value;
    var m = document.getElementById("m").value;
    var n = document.getElementById("n").value;
    var o = document.getElementById("o").value;
    var p = document.getElementById("p").value;
    var q = document.getElementById("q").value;
    var r = document.getElementById("r").value;

    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "" || h == "" || i == "" || j == "" || k == "" || l == "" || m == "" || n == "" || o == "" || p == "" || q == "" || r == "")
        alert("Some field is left empty");
    else {
        var task_Score = 0;
        task_Score = task_Score + a * a;
        task_Score = task_Score + b * b;
        task_Score = task_Score + c * c;
        task_Score = task_Score + d * d;
        task_Score = task_Score + e * e;
        task_Score = task_Score + f * f;


        var task1Score = 0;
        task1Score = task1Score + g * g;
        task1Score = task1Score + h * h;
        task1Score = task1Score + i * i;
        task1Score = task1Score + j * j;
        task1Score = task1Score + k * k;
        task1Score = task1Score + l * l;


        var task2Score = 0;
        task2Score = task2Score + m * m;
        task2Score = task2Score + n * n;
        task2Score = task2Score + o * o;
        task2Score = task2Score + p * p;
        task2Score = task2Score + q * q;
        task2Score = task2Score + r * r;

        document.getElementById("data").innerHTML = task_Score;
        document.getElementById("data2").innerHTML = task1Score;
        document.getElementById("data3").innerHTML = task2Score;
    }

    if ((task_Score >= task1Score) && (task_Score >= task2Score)) {
        if (task1Score >= task2Score) {
            document.getElementById("main3").innerHTML = 3;
            document.getElementById("main2").innerHTML = 2;
            document.getElementById("main").innerHTML = 1;

        }
        else {
            document.getElementById("main2").innerHTML = 3;
            document.getElementById("main3").innerHTML = 2;
            document.getElementById("main").innerHTML = 1;

        }
    }
    else if ((task1Score >= task_Score) && (task1Score >= task2Score)) {
        if (task_Score >= task2Score) {
            document.getElementById("main3").innerHTML = 3;
            document.getElementById("main").innerHTML = 2;
            document.getElementById("main2").innerHTML = 1;

        }
        else {
            document.getElementById("main").innerHTML = 3;
            document.getElementById("main3").innerHTML = 2;
            document.getElementById("main2").innerHTML = 1;

        }
    }
    else if ((task2Score >= task_Score) && (task2Score >= task1Score)) {
        if (task_Score >= task1Score) {
            document.getElementById("main2").innerHTML = 3;
            document.getElementById("main").innerHTML = 2;
            document.getElementById("main3").innerHTML = 1;

        }
        else {
            document.getElementById("main").innerHTML = 3;
            document.getElementById("main2").innerHTML = 2;
            document.getElementById("main3").innerHTML = 1;
        }
    }
}