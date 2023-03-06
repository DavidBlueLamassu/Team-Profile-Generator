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

    getRole() {
        return Engineer.name;
    }
}

module.exports = Engineer;