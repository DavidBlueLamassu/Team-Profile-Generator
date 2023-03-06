//Intern class including constructor and methods.
//This class is used to construct Intern objects and inherits from the Employee class.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school =  school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return Intern.name;
    }
}

module.exports = Intern;