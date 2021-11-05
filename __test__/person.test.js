const Person = require("../stuff/person");

describe("Person", () => {
  test("should have a person class", () => {
    const KKE = Person();
    expect(KKE).toBeInstanceOf(Person);
  });
});
