const addStudentPage = [
  {
    type: "input",
    name: "studentNickname",
    message: "Whats the nickname of the student?",
    validate(answer) {
      if (!answer) {
        return "Please, fill in a valid format";
      }
      return true;
    },
  },
];
module.exports = addStudentPage;
