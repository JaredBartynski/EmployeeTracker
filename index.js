require("dotenv").config();
const inquirer = require("inquirer");
const myslq = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "employeeTracker_db",
});

connection.connect((err) => {
  if (err) throw err;

  displayMenu();
});

// Build a command-line application that at a minimum allows the user to:

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles

const displayMenu = () => {
  inquirer
    .prompt([
      {
        name: "menuChoice",
        message: "What would you like to do?",
        type: "list",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Departments",
          "View Roles",
          "View Employees",
          "Update Employee Roles",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menuChoice) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Update Employee Roles":
          updateRoles();
          break;
        default:
          connection.end();
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "Department",
        type: "input",
        message: "Enter a new department",
      },
    ])
    .then((postAnswers) => {
      connection.query(
        "INSERT INTO department(name) VALUES(?)",
        [postAnswers.name, postAnswers.category, parseint],
        function (err, postData) {
          if (err) throw err;

          console.log(postData);
          displayMenu();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "Role",
        type: "input",
        message: "Enter a new role",
      },
    ])
    .then((postAnswers) => {
      connection.query(
        "INSERT INTO Role(name) VALUES(?)",
        [postAnswers.name, postAnswers.category, parseint],
        function (err, postData) {
          if (err) throw err;

          console.log(postData);
          displayMenu();
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "Employee",
        type: "input",
        message: "Enter a new Employee",
      },
    ])
    .then((postAnswers) => {
      connection.query(
        "INSERT INTO Role(name) VALUES(?)",
        [postAnswers.name, postAnswers.category, parseint],
        function (err, postData) {
          if (err) throw err;

          console.log(postData);
          displayMenu();
        }
      );
    });
};

const viewDepartments = () => {
  connection.query("SELECT * FROM department", function (err, department) {
    return department;
  });
};

const viewRoles = () => {
  connection.query("SELECT * FROM role", function (err, role) {
    return role;
  });
};

const viewEmployees = () => {
  connection.query("SELECT * FROM employee", function (err, employee) {
    return employee;
  });
};

// select all employees from the database
const getEmployee = () => {
  connection.query("SELECT * FROM product", function (err, employeeData) {
    if (err) throw err;
    // use loop to loop through employeeData to get specific info. eployeeData. firstName + lastName.
    console.log(employeeData);

    // const firstName = employeeData.map(item => item.firstName);

    // const firstName = employeeData.map(item => item.lastName);

    // const employeeId = employeeData.map(item => item.Id);
  });
};
