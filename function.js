function Next() {
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    var z = document.getElementById("value3").value;
    if (x == "" || x == null||y== "" || y== null||z == "" || z == null) {
      alert("Please fill the empty priority");
     return false;
    }
   
    document.getElementById("disapper").style.display ="block";

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
        var task1score = 0;
        task1score = task1score + a * a;
        task1score = task1score + b * b;
        task1score = task1score + c * c;
        task1score = task1score + d * d;
        task1score = task1score + e * e;
        task1score = task1score + f * f;


        var task2score = 0;
        task2score = task2score + g * g;
        task2score = task2score + h * h;
        task2score = task2score + i * i;
        task2score = task2score + j * j;
        task2score = task2score + k * k;
        task2score = task2score + l * l;


        var task3score = 0;
        task3score = task3score + m * m;
        task3score = task3score + n * n;
        task3score = task3score + o * o;
        task3score = task3score + p * p;
        task3score = task3score + q * q;
        task3score = task3score + r * r;

        document.getElementById("data1").innerHTML = task1score;
        document.getElementById("data2").innerHTML = task2score;
        document.getElementById("data3").innerHTML = task3score;
    }

    if ((task1score >= task2score) && (task1score >= task3score)) {
        if (task2score >= task3score) {
            document.getElementById("main3").innerHTML = 3;
            document.getElementById("main2").innerHTML = 2;
            document.getElementById("main1").innerHTML = 1;

        }
        else {
            document.getElementById("main2").innerHTML = 3;
            document.getElementById("main3").innerHTML = 2;
            document.getElementById("main1").innerHTML = 1;

        }
    }
    else if ((task2score >= task1score) && (task2score >= task3score)) {
        if (task1score >= task3score) {
            document.getElementById("main3").innerHTML = 3;
            document.getElementById("main1").innerHTML = 2;
            document.getElementById("main2").innerHTML = 1;

        }
        else {
            document.getElementById("main1").innerHTML = 3;
            document.getElementById("main3").innerHTML = 2;
            document.getElementById("main2").innerHTML = 1;

        }
    }
    else if ((task3score >= task1score) && (task3score >= task2score)) {
        if (task1score >= task2score) {
            document.getElementById("main2").innerHTML = 3;
            document.getElementById("main1").innerHTML = 2;
            document.getElementById("main3").innerHTML = 1;

        }
        else {
            document.getElementById("main1").innerHTML = 3;
            document.getElementById("main2").innerHTML = 2;
            document.getElementById("main3").innerHTML = 1;
        }
    }
}