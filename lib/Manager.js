const Employee = require("./Employee");

class Manager extends Employee {
  // TODO - Write Manager class so it satisfies the test cases when running `npm run test`
  constructor(id, name, email, officeNumber) {
    super(id, name, email)
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber
  }
  getRole() {
    return `Manager`
  }
  // createCard() {
  //   return /*html*/ `
  //   <div class="employeeCard">
  //     <div class="header">
  //       <h2 class="title">${Manager.getName()}</h2>
  //   </div>
  //   `

  // }
}

module.exports = Manager;
