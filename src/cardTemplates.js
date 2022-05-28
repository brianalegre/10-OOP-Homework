// create the team
const createTeam = team => {

    // create the manager html
    const cardManager = manager => {
        return `
        <div class="employee-card">
        <div class="header">
            <h2 class="title">${manager.getName()}</h2>
            <h3 class="title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="list">
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const cardEngineer = engineer => {
        return `
        <div class="employee-card">
    <div class="header">
        <h2 class="title">${engineer.getName()}</h2>
        <h3 class="title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="body">
        <ul class="list">
            <li> ID: ${engineer.getId()}</li>
            <li> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const cardIntern = intern => {
        return `
        <div class="employee-card">
    <div class="header">
        <h2 class="title">${intern.getName()}</h2>
        <h3 class="title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="body">
        <ul class="list">
            <li>ID: ${intern.getId()}</li>
            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li>School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => cardManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => cardEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => cardIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return /*html*/ ` 
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Company | Org Chart </title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>My Team</h1>
    <div class="container">
        <div>
            <div>
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};