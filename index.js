// Require
const inquirer = require('inquirer');
const fs = require('fs');

// Questions to ask
const questions = [
    {
        type: 'input',
        name: 'company',
        message: `Enter Company's Name`,
        default: 'Frantik Inc',
    },
    {
        type: 'input',
        name: 'name',
        message: `Enter Employee's Name`,
        default: 'brian',
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Employee's ID Number`,
        default: '007',
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Employee's Email Address`,
        default: '007@secretemail.com',
    },
]

const managerQuestions = [
    {
        type: 'input',
        name: 'office',
        message: `Enter the Manager's Office Number`,
        default: '1007'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: `Enter Engineer's Github Username`,
        default: 'brianalegre'
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: `Enter Intern's School Name`,
        default: 'UCI'
    },
]



// CLI Prompts
inquirer.prompt(questions).then((data) => {
    // createReadme(data);
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});