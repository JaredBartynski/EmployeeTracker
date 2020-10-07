const inquirer = require("inquirer");
const myslq = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker_db"
});

connection.connect(err =>{
  if(err)
    throw err;

  displayMenu();
});

const displayMenu = () => {
  inquirer.prompt([
    {
      name:
      type:
      choices:
      message: 
    }




  ]).then(answers => {
    answers.menuChoice = choice;

    switch(meuChoice){
      case "POST":
        postEmployee();
        break;
      case "BID":
        bidItem();
        break;
      default:
        connection.end();
    }
  });
};

const postEmployee = () => {
  inquirer.prompt([
    {
    name: post employee name
    type: post employee job
    message:
    },


  ])

};




// post into sql
// .then(postAnswers =>{
//   connection.query("INSERT INTO products(name, categoryname, bidprice) VALUES(?, ?, ?)", [postAnswers.name, postAnswers.category, parseint)], function(err, postData) {
//     if(err)
//       throw err;
    
//       console.log(postData);
//    displayMenu();
//   }
// }); 



// select all employees from the database
const getEmployee = () => {
connection.query("SELECT * FROM product", function(err, employeeData){
  if(err)
    throw err;
    // use loop to loop through employeeData to get specific info. eployeeData. firstName + lastName.
    console.log(employeeData);

    // const firstName = employeeData.map(item => item.firstName);

    // const firstName = employeeData.map(item => item.lastName);

    // const employeeId = employeeData.map(item => item.Id);

    

});
}