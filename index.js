var inquirer = require("inquirer");
var mainPage = require("./views/mainPage");

inquirer.prompt([mainPage]).then((answers) => {
  console.log(answers);
});
