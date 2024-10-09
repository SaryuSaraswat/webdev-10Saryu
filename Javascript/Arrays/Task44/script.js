//define and log the colors
const colors = ['red', 'green', 'blue'];
console.log(colors[0]);

//modify and add color
colors[1] = 'yellow';
console.log(colors[1]);

colors.push('purple');
console.log(colors[colors.length-1]);

//iterate using loops
//for loop
for(let i = 0; i<colors.length; i++){
    console.log(colors[i]);
}

//while loop
let i = 0;
while(i < colors.length){
    colors[i];
    i++;
}


//check array properties
console.log(typeof(colors[0]));
console.log(colors.length);


//array methods
colors.push('black');
colors.pop();
console.log(colors.indexOf('blue'));

//add and iterate over properties

colors.owner = 'Saryu';
console.log(colors);

for(let prop in colors){
    console.log(`${prop}: ${colors[prop]}`);
}
