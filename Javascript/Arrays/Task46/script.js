
//initialize array
let temperature = [-3, 14, 22, 5, -10, 0];

//iterate using forEach
let temp = temperature.forEach(function(degree){
    console.log(degree);
})

let tempr = temperature.forEach(degree => console.log(degree));

//convert to fahrenheit
temperature.forEach(function(cels){
    console.log((cels * 9/5) + 32);
})

temperature.forEach(cels => console.log((cels * 9/5) + 32));

//using map()
let temperaturesInFahrenheit = temperature.map(function(cels){
    return (cels * 9/5) + 32;
})

console.log(temperaturesInFahrenheit);

let tempInFahren = temperature.map(cels => (cels * 9/5) + 32)
console.log(tempInFahren);

//using filter
let belowFreezing = temperature.filter(function(degree){
    return degree < 0;
})

console.log(belowFreezing);

let blwfreezing = temperature.filter(degree => degree < 0);
console.log(blwfreezing);



