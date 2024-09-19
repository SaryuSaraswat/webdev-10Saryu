
//define student object
let student = {};

student.name = "Alice";
student.email = "alice2003@gmail.com";
student.age = 21;

console.log(student.name);

//update student age
student.age = 10;
console.log(student.age);

//add method 
student.greet = "Hello, Alice !!";
student.greetFun = function(){
    return this.greet;
}
console.log(student.greetFun());

//add nested object
student.address = {
    city : "Mathura",
    country : "India",
    pincode : 370421
}
console.log(student.address.country);

student.address.pincode = 370422;
console.log(student.address.pincode);

//create friend's object
let friend = {};
friend.name = "Bob";
friend.email = "bob2004@gmail.com";
friend.age = 20;
friend.address = "Karnataka";
friend.greet = "Hello, bob!";
friend.greetFun = function(){
    return this.greet;
}

console.log(friend.greetFun());
console.log(friend);

//create topper object
let topper = {};
topper.name = "Baloo";
topper.email = "baloo2004@gmail.com";
topper.age = 22;
topper.address = "Gujrat";
topper.greet = "Hello, baloo!";
topper.greetFun = function(){
    return this.greet;
}

console.log(topper);

//function Constructor
function Students (name, email, age, country, city, pincode){
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
        country : country,
        city : city,
        pincode : pincode
    };
    this.greet = function(){
        return `Hello, ${this.name}`;
    }
    this.getFullAdress = function(){
        return `${this.address.country} ${this.address.city} - ${this.address.pincode}`;
    }
}


const student1 = new Students("xyz", "xyz@gmail.com", 21, "India", "Mathura", 368450);
console.log(student1.greet());
console.log(student1.getFullAdress());
console.log(student1);

const student2 = new Students("abc", "abc@gmail.com", 22, "India", "Bangalore", 345789);
console.log(student2.greet());
console.log(student2.getFullAdress());
console.log(student2);

