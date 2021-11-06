const inquirer = require("inquirer");
const { mainPage, teachers, exit } = require("./views/mainPage");
const lessonsPage = require("./views/lessonsPage");
const addLessonPage = require("./views/addLessonPage");
const { Person, Teacher, Student, Lesson } = require("./stuff/person");
const viewLessonsPage = require("./views/viewLessonsPage");
const { lessonsList, studentsList } = require("./data/lists");
const studentsPage = require("./views/studentsPage");
const viewStudentsPage = require("./views/viewStudentsPage");
const addStudentPage = require("./views/addStudentPage");

let objectLessonList = [];
lessonsList.forEach((lesson) =>
  objectLessonList.push(
    new Lesson(
      lesson.subject,
      lesson.teacher,
      lesson.student,
      lesson.date,
      lesson.time
    )
  )
);

let objectStudentsList = [];
studentsList.forEach((student) =>
  objectStudentsList.push(new Student(student.nickname))
);

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
//MainPage to Lessons
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
    lessonsList.push(lesson);
    console.log(lesson, lessonsList);
    fs = require("fs");
    fs.writeFile(
      "./data/lists.js",
      `const lessonsList = ${JSON.stringify(lessonsList)}\n
        const studentsList = ${JSON.stringify(studentsList)}
      \n\nmodule.exports = {lessonsList,studentsList}`,

      function (err) {
        if (err) return console.log(err);
        console.log("Hello World > helloworld.txt");
      }
    );

    startUp();
  });
}

function viewLessons() {
  console.log("viewLessons called");

  inquirer.prompt(viewLessonsPage).then((answers) => {
    if (answers.viewLessonsPage === "Main Menu") {
      console.log(objectLessonList);
      console.log(objectLessonList[0].constructor.name);

      startUp();
    }
  });
}

// MainPage to students
function students() {
  inquirer.prompt(studentsPage).then((answers) => {
    if (answers.studentsPage === "view students") {
      viewStudents();
    }
    if (answers.studentsPage === "add student") {
      console.log("add student called");

      addStudent();
    }
  });
}
function addStudent() {
  console.log(`in addStudent called`);

  inquirer.prompt(addStudentPage).then((answers) => {
    console.log(
      `The following student has been added: \nSubject: ${answers.studentNickname}\n`
    );
    const student = new Student(answers.studentNickname);
    studentsList.push(student);
    console.log(student, studentsList);
    fs = require("fs");
    fs.writeFile(
      "./data/lists.js",
      `const lessonsList = ${JSON.stringify(lessonsList)}\n
        const studentsList = ${JSON.stringify(studentsList)}
      \n\nmodule.exports = {lessonsList,studentsList}`,

      function (err) {
        if (err) return console.log(err);
        console.log("Hello World > helloworld.txt");
      }
    );

    startUp();
  });
}

function viewStudents() {
  console.log("viewStudents called");

  inquirer.prompt(viewStudentsPage).then((answers) => {
    if (answers.viewStudentsPage === "Main Menu") {
      console.log(objectStudentsList);
      console.log(objectStudentsList[0].constructor.name);

      startUp();
    }
  });
}

startUp();
