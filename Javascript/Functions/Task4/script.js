document.getElementById("btn-1").addEventListener("click", printDbl);
document.getElementById("btn-2").addEventListener("click", printSqr);
document.getElementById("btn-3").addEventListener("click", printIncr);

function printDbl(){
    let a = document.getElementById("ip-1").value;
    a = Number(a).toFixed(2);
    document.getElementById("db").innerHTML = a;
}

function printSqr(){
    let a = document.getElementById("ip-2").value;
    let sqr = Math.abs(Number(a) * Number(a));
    document.getElementById("sqr").innerHTML = sqr;
}

function printIncr(){
    let a = document.getElementById("ip-3").value;
    let num = Number(a);
    num++;
    let inc = num;
    document.getElementById("incr").innerHTML = inc;
}
