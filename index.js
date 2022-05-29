// Require
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/intern')
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');
const cardGen = require('./src/cardTemplates.js');

// Store Employees
const allEmployees = [];


// First Questions to Ask
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
        name: 'officeNumber',
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
        default: 'Kevin',
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Engineer's ID Number`,
        default: '008',
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Engineer's Email Address`,
        default: 'Kevin@secretemail.com',
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
        default: 'allec',
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Intern's ID Number`,
        default: '009',
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Intern's Email Address`,
        default: 'allec@secretemail.com',
    },
    {
        type: 'input',
        name: 'school',
        message: `Enter Intern's School Name`,
        default: 'UCI'
    },
]

// Finish Question
const choiceQuestion = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'choice',
        choices: ['Add a new Engineer', 'Add a new Intern', 'Exit'],
        default: ['Add a new Engineer']
    },
]


// Create Manager
function createManager() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            // Create a manager with the Class Manager
            // console.log(data)
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            )
            // Push Manager info to allEmployees
            allEmployees.push(manager)
            // console.log(allEmployees)
            choice()
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
            choice()
        })
}

// Create Intern
function createIntern() {
    inquirer
        .prompt(internQuestions)
        .then((data) => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            )
            allEmployees.push(intern)
            choice()
        })
}

function choice() {
    inquirer
        .prompt(choiceQuestion)
        .then((data) => {
            console.log(data)
            switch (data.choice) {
                case 'Add a new Engineer':
                    createEngineer()
                    break;
                case 'Add a new Intern':
                    createIntern()
                    break;
                default:
                    console.log(`Exiting Question Section...`)
                    console.log(`List of all employees created: `, allEmployees)
                    // console.log(allEmployees)
                    cards();
                    break;
            }
        })
}


// // Create Employee Card
// function employeeCard(allEmployees) {
//     return /*html*/`
//         <div class='card'>
//             <h2>${allEmployees.name}</h2>
//             <h3>${allEmployees.role}</h3>
//             <p>${allEmployees.id}</p>
//             <p>${allEmployees.email}</p>
//             <p>${allEmployees.officeNumber || allEmployees.github || allEmployees.school}</p>
//         </div>
//     `
// }

// function createHTML() {
//     return /*html*/ `
//     <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<meta charset="UTF-8" />
// 		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// 		<link rel="stylesheet" href="./assets/css/style.css" />
// 		<!-- <script defer src="./assets/js/script.js"></script> -->
// 		<title>Document</title>
// 	</head>
// 	<body>
//         <div class="container">
//             ${Manager.createCard()};
//         </div>
// 	</body>
// </html>
//     `
// }

// Start Application
function init() {
    createManager();
}

function cards() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, cardGen(allEmployees));
}

// Start Application
init();
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