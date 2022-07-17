// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = require('./utils/questions')
var inquirer = require('inquirer')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Your README has been created!');
        }
    })
};
// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile('README.md', generateMarkdown(data));
        })
};

// Function call to initialize app
init();
