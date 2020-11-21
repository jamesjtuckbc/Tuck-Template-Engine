const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Validate = require("./lib/Validate");

const empId = [];
const employees = [];


const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Manager ID?',
                name: 'id',
                validate: (id) => Validate.valId(id),
            },
            {
                type: 'input',
                message: 'Manager name?',
                name: 'name',
                validate: (name) => Validate.valName(name),
            },
            {
                type: 'input',
                message: 'Manager email?',
                name: 'email',
                validate: (email) => Validate.valEmail(email),
            },
            {
                type: 'input',
                message: 'Manager office number?',
                name: 'officeNumber',
                validate: (officeNumber) => Validate.valOffNum(officeNumber),
            },
            {
                type: 'list',
                message: 'Add additional team members?',
                name: 'add',
                choices: ['Yes', 'No'],
            },
        ])
        .then(mgr => {
            empId.push(mgr.id);

            const mgrObj = new Manager(mgr.name, mgr.id, mgr.email, mgr.officeNumber);

            employees.push(mgrObj);

            if (mgr.add === 'Yes') {
                employee();
            } else {
                renderHTML();
            }
        })
};

const employee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee ID?',
                name: 'id',
                validate: (id) => {
                    return empId.includes(id) ? console.log(` - ID already in use`) : Validate.valId(id);
                },
            },
            {
                type: 'input',
                message: 'Employee name?',
                name: 'name',
                validate: (name) => Validate.valName(name),
            },
            {
                type: 'input',
                message: 'Employee email?',
                name: 'email',
                validate: (email) => Validate.valEmail(email),
            },
            {
                type: 'list',
                message: 'Employee role?',
                name: 'role',
                choices: ['Engineer', 'Intern'],
            },
        ])
        .then(emp => {
            console.log(emp.name);
            console.log(emp.role);
            switch (emp.role) {
                case 'Engineer':
                    console.log(emp.role);
                    engineerQuestions(emp);
                    break;
                case 'Intern':
                    console.log(emp.role);
                    InternQuestions(emp);
                    break;
            }
        })
};

const engineerQuestions = (emp) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'GitHub username?',
                name: 'github',
            },
            {
                type: 'list',
                message: 'Add additional team members?',
                name: 'add',
                choices: ['Yes', 'No'],
            },
        ])
        .then(eng => {
            empId.push(emp.id);

            const engObj = new Engineer(emp.name, emp.id, emp.email, eng.github);

            employees.push(engObj);

            if (eng.add === 'Yes') {
                employee();
            } else {
                renderHTML();
            }
        })
};

const InternQuestions = (emp) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What school are they attending?',
                name: 'school',
            },
            {
                type: 'list',
                message: 'Add additional team members?',
                name: 'add',
                choices: ['Yes', 'No'],
            },
        ])
        .then(int => {
            empId.push(emp.id);

            const intObj = new Intern(emp.name, emp.id, emp.email, int.school);

            employees.push(intObj);

            if (int.add === 'Yes') {
                employee();
            } else {
                renderHTML();
            }
        })
};

const renderHTML = () => {
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.writeFile(outputPath, render(employees), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    } else {
        fs.mkdirSync(OUTPUT_DIR);
        fs.writeFile(outputPath, render(employees), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
};

init();