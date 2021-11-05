const lessonList = require("../index");

const viewLessonsPage = [
  {
    type: "list",
    name: "viewLessonsPage",
    message: JSON.stringify(lessonList),
    choices: ["Main Menu"],
  },
];

module.exports = viewLessonsPage;
