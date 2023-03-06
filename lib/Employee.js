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

    //This method is derived from example code in an article on Linux Hint: Syed Minhal Abbas, 
    //"How to Get Class Name in JavaScript", Linux Hint, https://linuxhint.com/get-class-name-javascript/,
    //last viewed: 6 March 2023.
    getRole() {
        return Employee.name;
    }
}

module.exports = Employee;