const { subjectsOffered, teachers } = require("../data/globals");
const { lessonsList, studentsList } = require("../data/lists");

const students = studentsList.map((student) => student.nickname);

const addLessonPage = [
  {
    type: "list",
    name: "chooseSubject",
    message: "What subject would you like to add?",
    choices: subjectsOffered,
  },
  {
    type: "list",
    name: "whichTeacher",
    message: "Who is the teacher?",
    choices: teachers,
  },
  {
    type: "list",
    name: "whichStudent",
    message: "Who is the student?",
    choices: students,
  },
  {
    type: "input",
    name: "date",
    message: "Whats the date of the lesson? DD/MM/YYYY",
    validate(answer) {
      if (
        !/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/.test(
          answer
        )
      ) {
        return "Please, fill in a valid format";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "time",
    message: "Whats the time of the lesson? HH:MM 24 hour format",
    validate(answer) {
      if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(answer)) {
        return "Please, fill in a valid time";
      }
      return true;
    },
  },
];
module.exports = addLessonPage;
