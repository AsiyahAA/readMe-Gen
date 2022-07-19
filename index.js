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
        name: 'contents',
        message: 'Table of Contents:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Project Installation',
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
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
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
        name: 'questions',
        message: 'Enter GitHub Username:',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'Email for further contact (Enter Email Link):',
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
[Questions?](#questions) \n
[Contact](#contact) \n

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

## Questions?
[GitHub](https://github.com/${ans.questions})

## Contact
${ans.contact}`

    const userAns = ans.title
    // const lowerCase = lower.toLowerCase()
    fs.writeFile(`./output/${userAns}.md`,
    mdString, (err,data) => {if(err){throw err}
})

})