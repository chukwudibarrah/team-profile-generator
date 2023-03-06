// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// import * as Employee from './Employee.js';

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        super(name, id, email, role);
        this.github = github;
    }
    getGithub(github) {
        return this.github;
    }
    getRole() {
        return ('Engineer');
    }
}
module.exports = Engineer;