document.getElementById("btn-1").addEventListener("click", calculate);

function calculate(){
    let a = document.getElementById("ip-1").value;
    let b = document.getElementById("ip-2").value;
    a = Number(a);
    b = Number(b);
    document.getElementById("sum").innerHTML = a + b;
    document.getElementById("sub").innerHTML = a - b;
    document.getElementById("product").innerHTML = a * b;
}

