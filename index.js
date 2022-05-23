// Require
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/intern')

// Store Employees
const allEmployees = [];


// First Questions to ASK
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter Manager's Name`,
        default: 'brian',
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter Manager's ID Number`,
        default: '007',
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Manager's Email Address`,
        default: '007@secretemail.com',
    },
    {
        type: 'input',
        name: 'office',
        message: `Enter the Manager's Office Number`,
        default: '1007'
    },
]


// Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter Engineer's Name`,
        default: 'brian',
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Engineer's ID Number`,
        default: '007',
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Engineer's Email Address`,
        default: '007@secretemail.com',
    },
    {
        type: 'input',
        name: 'github',
        message: `Enter Engineer's Github Username`,
        default: 'brianalegre'
    },
]

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter Intern's Name`,
        default: 'brian',
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Intern's ID Number`,
        default: '007',
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Intern's Email Address`,
        default: '007@secretemail.com',
    },
    {
        type: 'input',
        name: 'school',
        message: `Enter Intern's School Name`,
        default: 'UCI'
    },
]

// Create Manager
function createManager() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            // Create a manager with the Class Manager
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.office
            )
            // Push Manager info to allEmployees
            allEmployees.push(manager)
        })
}

// Create Engineer
function createEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((data) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
            )
            allEmployees.push(engineer)
        })
}

// Create Intern
function createIntern() {
    inquirer
        .prompt(internQuestions)
        .then((data) => {
            const intern = new intern(
                data.name,
                data.id,
                data.email,
                data.school
            )
            allEmployees.push(intern)
        })
}



// Application Flow
// Create Manager
// Prompt to add Engineer, Itern, or Finish
// Create HTML



// CLI Prompts
// inquirer.prompt(questions).then((data) => {
//     // createReadme(data);
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
// });