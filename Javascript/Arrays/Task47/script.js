
//initialize
let fruits = ["apple", "banana", "cherry", "date"];

//iterate using forEach
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
})

fruits.forEach(fruit => console.log(fruit.toUpperCase()));

//calculate total characters using forEach
let totalChar = 0;
fruits.forEach(function(fruit){
    totalChar += fruit.length;
})
console.log(totalChar);


//using map()
let reversedFruits = fruits.map(function(fruit){
    return fruit.split('').reverse().join('');
})

console.log(reversedFruits);


let revFruits = fruits.map(fruit => fruit.split('').reverse().join(''))
console.log(revFruits);


//filter
let longFruits = fruits.filter(function(fruit){
    return fruit.length > 5;
})
console.log(longFruits);

let lngfruits = fruits.filter(fruit => fruit.length > 5)
console.log(lngfruits);

//using map() and filter()
let containsA = fruits.filter(function(fruit){
    if(fruit.includes('a')) return fruit;
})

console.log(containsA);




