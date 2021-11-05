const { Person, Teacher, Student } = require("../stuff/person");

describe("Person", () => {
  test("should have a person class", () => {
    const KKE = new Person("Eve");
    expect(KKE).toBeInstanceOf(Person);
  });
  test("should have property nickname ", () => {
    const KKE = new Person("Eve");
    expect(KKE).toHaveProperty("nickname");
  });
  describe("addDetails", () => {
    const KKE = new Person("Eve");
    KKE.addDetails(
      "Eve",
      "Cutie",
      "Kru",
      "KhunKruhEve",
      "cutie@gmail.com",
      "01213337794"
    );
    test("should have properties", () => {
      expect(KKE).toHaveProperty("firstName");
      expect(KKE).toHaveProperty("lastName");
      expect(KKE).toHaveProperty("preFix");
      expect(KKE).toHaveProperty("lineID");
      expect(KKE).toHaveProperty("eMail");
      expect(KKE).toHaveProperty("phoneNumber");
    });
    test("should have named properties", () => {
      expect(KKE.firstName).toBe("Eve");
      expect(KKE.lastName).toBe("Cutie");
      expect(KKE.preFix).toBe("Kru");
      expect(KKE.lineID).toBe("KhunKruhEve");
      expect(KKE.eMail).toBe("cutie@gmail.com");
      expect(KKE.phoneNumber).toBe("01213337794");
    });
  });
  describe("viewDetails", () => {
    const KKE = new Person("Eve");
    KKE.addDetails(
      "Eve",
      "Cutie",
      "Kru",
      "KhunKruhEve",
      "cutie@gmail.com",
      "01213337794"
    );
    KKE.viewDetails();
    test("should have viewDetails method", () => {});
  });
});
describe("Teacher", () => {
  const Paul = new Teacher("Paul");
  test("should have properties nickname and subject", () => {
    expect(Paul).toHaveProperty("nickname");
    expect(Paul).toHaveProperty("subject");
  });
  test("should have properties named correctly", () => {
    expect(Paul.nickname).toBe("Paul");
    expect(Paul.subject).toEqual([]);
  });
  describe("addSubject", () => {
    test("subject to be added", () => {
      Paul.addSubject("english");
      expect(Paul.subject).toEqual(["english"]);
    });
    test("multiple subjects to be added", () => {
      Paul.addSubject("math");

      expect(Paul.subject).toEqual(["english", "math"]);
    });
  });
});
