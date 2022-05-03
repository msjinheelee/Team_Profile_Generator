// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );


  function init () {

    const inquirer = require('inquirer');
    const fs = require('fs'); 
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');
    
    inquirer
      .prompt([
        { 
          type: "input",
          message: "What is the Title for your project?",
          name: "title",  
             },
        { 
          type: "input",
          message: "What is the Description of your project?",
          name: "description",  
             },
        {
           type: "input",
           message: "How do you Install your application?",
           name: "installation",
        },
        {
            type: "input",
            message: "How do you Use your application?",
            name: "usage",
        },
        {
            type: "input",
            message: "How can people Contribute to your project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address where users and contributors can send questions?",
            name: "email"
        },
      ])
      .then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
      });
    }
    
    init();


    function generateReadme(answers){
      let badge="";
      let licenseLink;
      if(answers.license)
      {
          badge = `(https://img.shields.io/badge/LICENSE-${answers.license.replaceAll(' ','%20')}-green)`;
      }
      switch (answers.license)
      {
          case 'Apache License 2.0':
              licenseLink = `This project is covered under ${answers.license}. 
              For more information [clickhere](https://opensource.org/licenses/Apache-2.0)`;
              break;
          case 'MIT License':
              licenseLink = `This project is covered under ${answers.license}. 
              For more information [click here](https://opensource.org/licenses/MIT)`;
              break;
          case 'Eclipse Public License 2.0':
              licenseLink = `This project is covered under ${answers.license}. 
              For more information [click here](https://opensource.org/licenses/EPL-2.0)`;
              break;
              
          default:
              licenseLink = `This project is covered under ${answers.license}.`;
              break;
      }
  
  
  
      return  `
  ![License: ${answers.license}]${badge}
  # ${answers.title}
  ## Description
  ${answers.description}
      
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation  
  ${answers.installation}
        
  ## Usage      
  ${answers.usage}
        
  ## Contribution
  ${answers.contribution}
  ## Tests
  ${answers.tests}
  ![gif showing installation](assets/screen1.gif)
  ${licenseLink}
  ## Questions
  Feel free to email at ${answers.email}, if you have any further questions relating to this project.
  Checkout more on [Github](https://github.com/${answers.github})
      `;
  }