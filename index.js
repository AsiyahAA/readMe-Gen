const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Project Installation:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Project Usage:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Project License:',
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "none"]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Project Contributors:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Project Tests:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub Username:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter Email:',
      },
  ])
  .then(ans=>{
    console.log(ans);
    const mdString = `# ${ans.title}
![license badge](https://img.shields.io/badge/license-${ans.license}-blue.svg)

## Table of Contents
[Description](#description) \n
[Installation](#installation) \n
[Usage](#usage) \n
[License](#license) \n
[Contributors](#contributing) \n
[Tests](#tests) \n
[GitHub](#github) \n
[Questions?](#questions) \n

## Description
${ans.description}

## Installation
${ans.installation}

## Usage
${ans.usage}

## License
This project is covered by ${ans.license} license.

## Contributors
${ans.contributing}

## Tests
${ans.tests}

## GitHub
Checkout my [GitHub](https://github.com/${ans.github})

## Questions?
Contact me via Email ${ans.questions}`


    const userAns = ans.title
    // const lowerCase = lower.toLowerCase()
    fs.writeFile(`./output/${userAns}.md`,
    mdString, (err,data) => {if(err){throw err}
})

})