//Employee class including constructor and methods. 
//This is the parent class for the Manager, Engineer and Intern classes
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
       return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return Employee.name;
    }
}

module.exports = Employee;