
//initialize an array
var numbers = [1, 2, 3, 4, 5];

//iterate using forEach
numbers.forEach(function(num){
    console.log(num);
})

//iterate using forEach and multiply by 2
numbers.forEach(function(nums){
    console.log(nums * 2);
})


//square numbers using map
let squares = numbers.map(function(num){
    return num*num;
})
console.log(squares);

let squareNumbers = numbers.map(num => num * num)
console.log(squareNumbers);


//filter

//even number
let evenNumber = numbers.filter(function(num){
    return num % 2 == 0;
})
console.log(evenNumber);

evenNum = numbers.filter(num => num % 2 == 0);
console.log(evenNum);


