const mainPage = [
  {
    type: "list",
    name: "mainPage",
    message: "Choose a page",
    choices: ["lessons", "students", "teachers", "exit"],
  },
];

const teachers = function () {};
const exit = function () {
  process.exit();
};

module.exports = { mainPage, teachers, exit };
