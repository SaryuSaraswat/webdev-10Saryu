let fname = document.getElementById("name");
let submit = document.getElementById("submit");

submit.addEventListener("click" , function(){
    let name = fname.value.trim();
    if(!name){
        name = "Guest";
    }
    alert(`Hello ${name}!`);
} )



