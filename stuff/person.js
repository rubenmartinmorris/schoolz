class Person {
  constructor(nickname) {
    console.log(`A new person has been created`);
    this.nickname = nickname;
  }
  addDetails(firstName, lastName, preFix, lineID, eMail, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.preFix = preFix;
    this.lineID = lineID;
    this.eMail = eMail;
    this.phoneNumber = phoneNumber;
  }
  viewDetails() {
    console.log(
      `This is ${this.nickname}. ${this.preFix} ${this.firstName} ${this.lineID}, ${this.eMail} ${this.phoneNumber}`
    );
  }
  addSubject(subject) {
    this.subject.push(subject);
  }
}

class Teacher extends Person {
  constructor(nickname) {
    super();
    this.nickname = nickname;
    this.subject = [];
  }
}

class Student extends Person {
  constructor(nickname) {
    super();
    this.nickname = nickname;
    this.subject = [];
  }
}

module.exports = { Person, Teacher, Student };
