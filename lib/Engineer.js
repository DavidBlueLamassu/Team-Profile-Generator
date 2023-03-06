//Engineer class including constructor and methods.
//This class is used to construct Engineer objects and inherits from the Employee class.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    //This method is derived from example code in an article on Linux Hint: Syed Minhal Abbas, 
    //"How to Get Class Name in JavaScript", Linux Hint, https://linuxhint.com/get-class-name-javascript/,
    //last viewed: 6 March 2023.
    getRole() {
        return Engineer.name;
    }
}

module.exports = Engineer;