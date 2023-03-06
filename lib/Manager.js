//Manager class including constructor and methods.
//This class is used to construct Manager objects and inherits from the Employee class.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    //This method is derived from example code in an article on Linux Hint: Syed Minhal Abbas, 
    //"How to Get Class Name in JavaScript", Linux Hint, https://linuxhint.com/get-class-name-javascript/,
    //last viewed: 6 March 2023.
    getRole() {
        return Manager.name;
    }
}


module.exports = Manager;