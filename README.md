# Tuck-Template-Engine README
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

This is a Team Profile Generator tool that is used via the Command Line interface via Node.js  Using this generator you will end up with a high quailty HTML file with the team members the user inputs via CLI.  This file is exported is called `team.html` and will be located in `/output`.

## Table of Contents

[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Tests](#Tests)
[Questions](#Questions)

## Installation

Download and install [Node.js LTS](https://nodejs.org/en/download/) if not already installed<br/><br/>Clone this repo or your fork<br/>`git clone git@github.com:jamesjtuckbc/Tuck-Template-Engine.git && cd Tuck-Template-Engine`<br/><br/>Install dependencies<br/>`npm i`<br/><br/>Run the application<br/>`node index.js`

## Usage

Run `node app.js`<br/><br/>Add Manager information:<br/><ol><li>ID</li><li>Name</li><li>Email Address</li><li>Office Number</li></ol>You will then be prompted to add any team members. If you select yes you will recieve prompts to add <br/><br/><ol><li>ID</li><li>Name</li><li>Email Address</li><li>Employee Role</li></ol>Based on the Role selected you will encounter the following prompts:<br/><ul><li>`Engineer` -GitHub Username</li><li>`Intern` - School they are attending</li></ul><br/><br/> When you are done adding to the team select `No` for `Add additional team members?`<br/><br/>The html file will be avalible at `/output/team.html`

## License

This work is covered under [The MIT License](https://opensource.org/licenses/MIT)

## Tests

To run tests `npm run test`<br/>The following files will be tested:<br/><ul><li>Employee.js</li><ul><li>`Can instantiate Employee instance`</li><li>`Can set name via constructor arguments`</li><li>`Can set id via constructor argument`</li><li>`Can set email via constructor argument`</li><li>`Can get name via getName()`</li><li>`Can get id via getId()`</li><li>`Can get email via getEmail()`</li><li>`getRole() should return "Employee"`</li></ul><br/><li>Engineer.js</li><ul><li>`Can set GitHUb account via constructor`</li><li>`getRole() should return "Engineer"`</li><li>`Can get GitHub username via getGithub()`</li></ul><br/><li>Intern</li><ul><li>`Can set school via constructor`</li><li>`getRole() should return "Intern"`</li><li>`Can get school via getSchool()`</li></ul><br/><li>Manager</li><ul><li>`Can set office number via constructor argument`</li><li>`getRole() should return "Manager"`</li><li>`Can get office number via getOffice()`</li></ul><br/><li>Validate.js</li><ul><li>`Is id valid`</li><li>`is id invalid?`</li><li>`Is name valid`</li><li>`is name invalid?`</li><li>`Is email valid`</li><li>`is email invalid?`</li><li>`Is office number valid`</li><li>`is office number invalid?`</li></ul></ul>


## Questions

Please reach-out to me on [GitHub](http://www.github.com/jamesjtuckbc) or email me at: [jamesjtuck@gmail.com](mailto:jamesjtuck@gmail.com)

---
© 2020 Jorgen Tuck