class Employee {
  // TODO - Write Employee class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email) {
    this.name = name,
      this.id = id,
      this.email = email
  }
  getName() {
    return this.name
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return `Employee`
  }
}

module.exports = Employee;


// Employee
// Name
// ID
// Email Address
// getName()
// getEmail()
// getRole()
//   Returns Employee
