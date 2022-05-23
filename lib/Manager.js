const Employee = require("./Employee");

class Manager extends Employee {
  // TODO - Write Manager class so it satisfies the test cases when running `npm run test`
  constructor(id, name, email, office) {
    super(id, name, email)
    this.office = office;
  }
}


module.exports = Manager;
