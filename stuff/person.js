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
    return `This is ${nickname}. ${this.preFix} ${this.firstName} ${this.lineID}, ${this.eMail} ${this.phoneNumber}`;
  }
}
