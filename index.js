// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a discription of your project:',
  },
  {
    type: 'input', 
    name: 'usageInformation',
    message: 'How do you use your application?',
 },

  {
    type: 'input',
    name: 'installationInstructons',
    message: 'How do you install your application?',
  },

  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Who contributes to the project?',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'How do you test you project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose one of the following license...',
    choices: ['MIT','IBM','APACHE','GNU']
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your Github Username?',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your Email?',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
fs.writeFileSync(fileName, generateMarkdown(data))
}



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response)
    writeToFile('README.md',response)
  })
}

// Function call to initialize app
init();
