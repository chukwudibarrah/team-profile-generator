// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// import * as Employee from './Employee';

class Intern extends Employee {
    constructor(name, id, email, school, role){
        super(name, id, email, role);
        this.school = school;
    }
    getSchool(school) {
        return this.school;
    }
    getRole() {
        return ('Intern');
    }
}
module.exports = Intern;