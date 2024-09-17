
document.getElementById("subox1").addEventListener("click", function(){
    let sideTBase = document.getElementById("InTA").value;
    let sideTHeight = document.getElementById("InTB").value;
    let costT = document.getElementById("InCostT").value;

    let areaT = areaTriangle(sideTBase, sideTHeight);

    let totalCostT = areaT * costT;
    document.getElementById("ansTriangle").innerHTML = totalCostT.toFixed(2);

});

document.getElementById("subox2").addEventListener("click", function(){
    let sideRHeight = document.getElementById("InRA").value;
    let sideRWidth = document.getElementById("InRB").value;
    let costR = document.getElementById("InCostR").value;

    let areaR = areaRectangle(sideRHeight, sideRWidth);

    let totalCostR = areaR * costR;
    document.getElementById("ansRectangle").innerHTML = totalCostR.toFixed(2);
});

document.getElementById("subox3").addEventListener("click", function(){
    let sideC = document.getElementById("InCA").value;
    let costC = document.getElementById("InCostC").value;

    let areaC = areaCircle(sideC);

    let totalCostC = areaC * costC;
    document.getElementById("ansCircle").innerHTML = totalCostC.toFixed(2);
});

function areaRectangle(a ,b){
    return a*b;
}

function areaTriangle(a, b){
    return 0.5*a*b;
}

function areaCircle(a){
    return Math.PI* a * a;
}


const box1 = document.getElementById("box1");
box1.style.display = 'none';
const box2 = document.getElementById("box2");
box2.style.display = 'none';
const box3 = document.getElementById("box3");
box3.style.display = 'none';

document.getElementById("btnT").addEventListener("click", function(){
    resetBoxes();
    box1.style.display = 'block';
});

document.getElementById("btnR").addEventListener("click", function() {
    resetBoxes();  
    box2.style.display = 'block';  
});

document.getElementById("btnC").addEventListener("click", function() {
    resetBoxes(); 
    box3.style.display = 'block';  
});

document.getElementById("submit").addEventListener("click", function() {
    resetBoxes();  
});

function resetBoxes() {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'none';
}
