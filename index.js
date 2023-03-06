const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Variable to store Manager, Engineer and Intern objects, which are then passed through the render()
//function to generate an html file.
const newEmployees = [];

//An array of question objects to gather information for generating a Manager object through inquirer
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

//An array of question objects to gather information for generating a Engineer object through inquirer
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

//An array of question objects to gather information for generating a Intern object through inquirer
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

//A question object for inquirer to determine whether more members are to be added to the team
const moreEmployees = {   
    type: 'list',
    name: 'moreEmployees',
    message: 'Do you wish to add further team members?',
    choices: ['I wish to add an engineer.', 'I wish to add an intern.', 'I have finished adding team members.']
}   

//A function to ask the user for information regarding the team manager; to convert the response data into an object
//and to push this object to the newEmployees array. Once the Manager object has been created the addEmployees() function
//is called to determine whether other employees need to be added to the team.
function init() {
    inquirer
    .prompt(managerQuestions).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber); 
        newEmployees.push(manager);
        addEmployees();
    })
}

//A function using inquirer and the questions from the moreEmployees array to determine whether more employees need to be 
//added to the team. 
function addEmployees() {
    inquirer
    .prompt(moreEmployees).then((data) => {
        //Conditional employing user data to determine whether functions are run either to add a new Engineer or a new 
        //Intern. If no further team member need to be added, the render function is called using the newEmployees array
        //as an argument. From this an html file is created (team.html) using fs.writeFile and stored in the output folder.
        if (data.moreEmployees === 'I wish to add an engineer.') {
            newEngineer();
        } else if (data.moreEmployees === 'I wish to add an intern.') {
            newIntern();
        }   else {
            const fileContents = render(newEmployees);
            fs.writeFile(outputPath, fileContents, (err) =>
            err ? console.log(err) : console.log('Success!')
            );
        }
    })
}

//A function to ask the user for information regarding an engineer; to convert the response data into an object
//and to push this object to the newEmployees array. Once the Engineer object has been created the addEmployees() function
//is called to determine whether other employees need to be added to the team.
function newEngineer() {
    inquirer
    .prompt(engineerQuestions).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.gitHub); 
        newEmployees.push(engineer);
        addEmployees();
    })

}

//A function to ask the user for information regarding an intern; to convert the response data into an object
//and to push this object to the newEmployees array. Once the Intern object has been created the addEmployees() function
//is called to determine whether other employees need to be added to the team.
function newIntern() {
    inquirer
    .prompt(internQuestions).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school); 
        newEmployees.push(intern);
        addEmployees();
    })

}

//The init function is called to begin the process of asking the user about the different members of the development team.
init();

