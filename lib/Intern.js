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

    //This method is derived from example code in an article on Linux Hint: Syed Minhal Abbas, 
    //"How to Get Class Name in JavaScript", Linux Hint, https://linuxhint.com/get-class-name-javascript/,
    //last viewed: 6 March 2023.
    getRole() {
        return Intern.name;
    }
}

module.exports = Intern;