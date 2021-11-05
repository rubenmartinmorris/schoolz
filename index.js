const inquirer = require("inquirer");
const { mainPage, students, teachers, exit } = require("./views/mainPage");
const lessonsPage = require("./views/lessonsPage");
const addLessonPage = require("./views/addLessonPage");
const { Person, Teacher, Student, Lesson } = require("./stuff/person");
const viewLessonsPage = require("./views/viewLessonsPage");

const lessonList = [];

function startUp() {
  inquirer.prompt(mainPage).then((answers) => {
    if (answers.mainPage === "lessons") {
      lessons();
    }
    if (answers.mainPage === "students") {
      students();
    }
    if (answers.mainPage === "teachers") {
      teachers();
    }
    if (answers.mainPage === "exit") {
      exit();
    }
  });
}

function lessons() {
  inquirer.prompt(lessonsPage).then((answers) => {
    console.log(`add lesson ${answers.lessonsPage}`);
    if (answers.lessonsPage === "view lessons") {
      viewLessons();
    }
    if (answers.lessonsPage === "add lesson") {
      addLesson();
    }
  });
}

function addLesson() {
  inquirer.prompt(addLessonPage).then((answers) => {
    console.log(
      `The following lesson has been added: \nSubject: ${answers.chooseSubject}\nTeacher: ${answers.whichTeacher} \nStudent: ${answers.whichStudent} \nDate: ${answers.date}\n Time: ${answers.time}`
    );
    const lesson = new Lesson(
      answers.chooseSubject,
      answers.whichTeacher,
      answers.whichStudent,
      answers.date,
      answers.time
    );
    lessonList.push(lesson);
    console.log(lesson, lessonList);
    startUp();
  });
}

function viewLessons() {
  console.log("viewLessons called");

  inquirer.prompt(viewLessonsPage).then((answers) => {
    if (answers.viewLessonsPage === "Main Menu") {
      startUp();
    }
  });
}

startUp();

module.exports = lessonList;
