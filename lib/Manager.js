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

    getRole() {
        return Manager.name;
    }
}


module.exports = Manager;