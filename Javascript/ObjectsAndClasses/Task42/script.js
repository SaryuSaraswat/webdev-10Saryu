function employee (name, email, age, department, position, salary){
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = salary;
    this.greeting = function(){
        return `Hello, I am ${name}, ${position}`;
    }
    this.displaySalary = function(){
        return `Salary :$${salary}`;
    }
}

const employee1 = new employee("Sumant", "sumant2001@gmail.com", 21, "production", "mechanical engineer",35000);
console.log(employee1);
console.log(employee1.greeting());
console.log(employee1.displaySalary());

const manager = new employee("xyz", "xyz@gmail.com", 34, "maintenance", "manager", 50000);
console.log(manager);
console.log(manager.greeting());
console.log(manager.displaySalary());

