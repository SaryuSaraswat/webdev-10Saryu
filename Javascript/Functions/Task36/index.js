
let submit = document.getElementById("submit");
let res = document.getElementById("res");

submit.addEventListener("click" , function(){
    let a = document.getElementById("width").value;
    let b = document.getElementById("height").value;
    let area = a * b;
    res.innerHTML = area;
    
})



// let calArea = function(a = 1, b = 1){//function expression
//     console.log(a * b);
// }
// calArea(5, 10);

// let calculateAreaFunction = (a = 1, b = 1) => { //arrow function
//     console.log(a * b);
// }
// calculateAreaFunction(5, 10);