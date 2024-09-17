
function callBack(){
    const x = document.getElementById("x").value;
    document.getElementById("printX").innerHTML = x;

}

function squareNumbers(){
    const y = document.getElementById("y").value;
    let res = Math.abs(y) * Math.abs(y);
    document.getElementById("printY").innerHTML = res;
}

function sumOfTwoNumbers(){
    let  a = document.getElementById("a").value;
    let  b = document.getElementById("b").value;
    let sum = Number(a) + Number(b);

    document.getElementById("printSum").innerHTML = sum;
}

document.getElementById("btn1").addEventListener("click", callBack);
document.getElementById("btn2").addEventListener("click", squareNumbers);
document.getElementById("btn3").addEventListener("click", sumOfTwoNumbers);

// function higherOrderFunction(num, fun){
//     return fun(num);
// }
// function higherOrderFun(num1, num2, fun){
//     return fun(num1, num2);
// }

// console.log(higherOrderFunction(5, callBack));
// console.log(higherOrderFunction(5, squareNumbers));
// console.log(higherOrderFun(5, 7, sumOfTwoNumbers));


