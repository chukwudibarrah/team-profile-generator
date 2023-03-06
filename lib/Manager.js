// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// import * as Employee from './Employee';

class Manager extends Employee{
    constructor(name, id, email, officeNumber, role){
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return ('Manager');
    }
    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    }
}
module.exports = Manager;