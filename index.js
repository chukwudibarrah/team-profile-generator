const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const OUTPUT_DIR = path.resolve("./OUTPUT_DIR/", "output");
const outputPath = path.join("OUTPUT_DIR", "team.html");

const render = require("./src/page-template");
let teamG = [];

// Write Code to gather information about the development team members
const promptUser = (team) =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's role",
        name: "role",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
      },
      {
        type: "email",
        message: "What is the manager's email address",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "selectNext",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team and exit",
        ],
      },
    ])
    .then((team) => {
      console.log(Object.values(team));
      let mgr = new Manager (team.name, team.id, team.email, team.officeNumber);
      teamG.push(mgr);
      if (`${team.selectNext}` === "Add an engineer") {
        engineerPrompts();
      } else if (`${team.selectNext}` === "Add an intern") {
        internPrompts();
      } else {
        // render(Object.values(team));
        let html = render(teamG);
        console.log('html = ', html);
      }
    });

const engineerPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerID",
      },
      {
        type: "email",
        message: "What is the engineer's email address",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "selectNext",
        choices: [
          "Add an another engineer",
          "Add an intern",
          "Finish building the team and exit",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (`${response.selectNext}` === "Add an engineer") {
        let engr = new Engineer (response.engineerName, response.engineerID, response.engineerEmail, response.github);
      teamG.push(engr);
        engineerPrompts();
      } else if (`${response.selectNext}` === "Add an intern") {
        let intern = new Intern (response.internNname, response.internID, response.internEmail, response.school);
      teamG.push(intern);
        internPrompts();
      } else {
        let html = render(teamG);
        console.log('html = ', html);
      }
    });
};

const internPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "internID",
      },
      {
        type: "email",
        message: "What is the intern's email address",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school do they attend?",
        name: "school",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "selectNext",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team and exit",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (`${response.selectNext}` === "Add an engineer") {
        let engr = new Engineer (response.engineerName, response.engineerID, response.engineerEmail, response.github);
      teamG.push(engr);
        engineerPrompts();
      } else if (`${response.selectNext}` === "Add an intern") {
        let intern = new Intern (response.internNname, response.internID, response.internEmail, response.school);
      teamG.push(intern);
        internPrompts();
      } else {
        let html = render(teamG);
        console.log('html = ', html);
      }
    });
};

// // Render HTML
// `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>My team</title>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
//     <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/themes/smoothness/jquery-ui.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
//     <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
// </head>

// <body>
//     <div class="container-fluid d-flex justify-content-center page-top py-5"
//         style="background-color: rgb(228, 84, 84); color: white">
//         <h1 class="page-title">
//             My team
//         </h1>
//     </div>
//     <section class="container-fluid d-flex my-5 px-5 justify-content-center">
//         <div class="row gap-5">
//             <div class="col-3 card shadow bg-body-tertiary rounded" style="width: 15rem; padding: 0;">
//                 <div class="card-body" style="background-color: rgb(27, 123, 225); color: white;">
//                     <h5 class="card-title">${response.managerName}</h5>
//                     <p class="card-text"><i class="bi bi-cup-hot-fill"></i> Manager</p>
//                 </div>
//                 <ul class="list-group p-3 list-group-flush" style="font-size: small;">
//                     <li class="list-group-item">${response.managerID}</li>
//                     <li class="list-group-item"><a href="mailto:${response.managerEmail}">${response.managerEmail}</a></li>
//                     <li class="list-group-item">${response.managerOfficeNo}</li>
//                 </ul>
//             </div>
//             <div class="col-3 card shadow bg-body-tertiary rounded" style="width: 15rem; padding: 0;">
//                 <div class="card-body" style="background-color: rgb(27, 123, 225); color: white;">
//                     <h5 class="card-title">${response.engineerName}</h5>
//                     <p class="card-text"><i class="bi bi-eyeglasses"></i> Engineer</p>
//                 </div>
//                 <ul class="list-group p-3 list-group-flush" style="font-size: small;">
//                     <li class="list-group-item">${response.engineerID}</li>
//                     <li class="list-group-item"><a href="mailto:${response.engineerEmail}">${response.engineerEmail}</a></li>
//                     <li class="list-group-item"><a href=https://www.github.com/${response.github}>${response.github}</a></li>
//                 </ul>
//             </div>
//             <div class="col-3 card shadow bg-body-tertiary rounded" style="width: 15rem; padding: 0;">
//                 <div class="card-body" style="background-color: rgb(27, 123, 225); color: white;">
//                     <h5 class="card-title">${response.internName}</h5>
//                     <p class="card-text"><i class="bi bi-mortarboard-fill"></i> Intern</p>
//                 </div>
//                 <ul class="list-group p-3 list-group-flush" style="font-size: small;">
//                     <li class="list-group-item">${response.internID}</li>
//                     <li class="list-group-item"><a href="mailto:${response.internEmail}">${response.internEmail}</a></li>
//                     <li class="list-group-item">${response.school}</li>
//                 </ul>
//             </div>
//         </div>
//     </section>

//     <script src="assets/js/style.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
//         crossorigin="anonymous"></script>
// </body>

// </html>`
module.exports = promptUser();