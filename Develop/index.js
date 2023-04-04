//  packages included for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
//  an array of questions for user input
const questions = [
     {
          type: "input",
          name: "title",
          message: "Enter title of your project: ",
        },
        {
          type: "input",
          name: "description",
          message: "Enter description: ",
        },
        {
          type: "input",
          name: "installation",
          message: "Enter installation instruction: ",
        },
        {
          type: "input",
          name: "usage",
          message: "Enter usage information: ",
        },
        {
          type: "input",
          name: "contribution",
          message: "Enter contribution guidelines: ",
        },
        {
          type: "input",
          name: "test",
          message: "Enter test instructions: ",
        },
        {
          type: "input",
          name: "reponame",
          message: "Enter repo name: ",
        },
        {
          type: "input",
          name: "username",
          message: "Enter Github username: ",
        },
        {
          type: "input",
          name: "email",
          message: "Enter your email address: ",
        },
        {
          type: "list",
          name: "license",
          message: "Choose a license",
          choices: [
            { name: "No License", value: "" },
            "Academic Free License v3.0",
            "Apache license 2.0",
            "BSD 3-clause Clear license",
            "Creative Commons license family",
            "GN General Public License v3.0",
            "ISC",
            "MIT",
            "Open Software License 3.0",
          ],
        },
];
// function to write README file
function writeToFile(fileName, data) {
     try {
       fs.writeFileSync(path.join(__dirname, "/generated/", fileName), data);
       console.log("Readme file has been generated");
     } catch (error) {
       console.log("Error while writing file");
       console.error(error);
  }   
}

function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const mdData = generateMarkdown(answers);
    writeToFile("README.md", mdData);
  })
  .catch((err) => console.error(err));  
}

// function call to initialize app
init();
