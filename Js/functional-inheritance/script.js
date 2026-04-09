
function User (name, age) {
    this.name = name;
    this.age = age;
    this.showDetails = function() {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
    } 
}

function Employee (name, age, department) {
    User.call(this, name, age);
    this.department = department;
    this.showDept = function() {
        this.showDetails();
        console.log("Department: ", this.department);
    }
}

Employee.prototype = Object.create(User.prototype);
Employee.prototype.constructor = Employee; // keep your constructor
let e1 = new Employee("Rohit", 22, "Engineer");

// e1.showDetails();
e1.showDept();