const addLessonPage = [
  {
    type: "list",
    name: "chooseSubject",
    message: "What subject would you like to add?",
    choices: ["english", "math", "thai", "science"],
  },
  {
    type: "list",
    name: "whichTeacher",
    message: "Who is the teacher?",
    choices: ["Paul", "Eve", "Tom", "Dick"],
  },
  {
    type: "list",
    name: "whichStudent",
    message: "Who is the student?",
    choices: ["Dek", "Lek", "Nim", "PAPAPAAAA"],
  },
  {
    type: "input",
    name: "date",
    message: "Whats the date of the lesson? DD/MM/YYYY",
    validate(answer) {
      if (!answer) {
        return "Please, fill in a valid format";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "time",
    message: "Whats the time of the lesson? HH:MM",
    validate(answer) {
      if (!answer) {
        return "Please, fill in a valid time";
      }
      return true;
    },
  },
];
module.exports = addLessonPage;
