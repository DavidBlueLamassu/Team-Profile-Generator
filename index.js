const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const newEmployees = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the team manager's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the team manager's e-mail address?`,
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is the team manager's office number`,
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?',
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the engineer's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the engineer's e-mail address?`,
    },
    {
        type: 'input',
        name: 'gitHub',
        message: `What is the engineer's GibHub username?`,
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?',
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the intern's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the intern's e-mail address?`,
    },
    {
        type: 'input',
        name: 'school',
        message: `What was the intern's school?`,
    },
]

const moreEmployees = {   
    type: 'list',
    name: 'moreEmployees',
    message: 'Do you wish to add further team members?',
    choices: ['I wish to add an engineer.', 'I wish to add an intern.', 'I have finished adding team members.']
}   

function init() {
    inquirer
    .prompt(managerQuestions).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber); 
        newEmployees.push(manager);
        console.log(newEmployees);
        addEmployees();
    })
}

function addEmployees() {
    inquirer
    .prompt(moreEmployees).then((data) => {
        console.log(data.moreEmployees)
        if (data.moreEmployees === 'I wish to add an engineer.') {
            newEngineer();
        } else if (data.moreEmployees === 'I wish to add an intern.') {
            newIntern();
        }   else {
            console.log(newEmployees);
            classTest();
            const fileContents = render(newEmployees);
            console.log(fileContents);
            fs.writeFile(outputPath, fileContents, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
        }
    })
}

function newEngineer() {
    inquirer
    .prompt(engineerQuestions).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.gitHub); 
        newEmployees.push(engineer);
        console.log(newEmployees);
        addEmployees();
    })

}

function newIntern() {
    inquirer
    .prompt(internQuestions).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school); 
        newEmployees.push(intern);
        console.log(newEmployees);
        addEmployees();
    })

}

const classTest = () => {
    for (i = 0; i < newEmployees.length; i++) {
        let testRun = newEmployees[i].getRole();
        console.log(testRun);
    }
}

init();

