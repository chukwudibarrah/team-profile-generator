// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.role = role;
    }
    getRole() {
        return ('Employee');
    }
    getName(name) {
        return this.name;
    }
    getId(id) {
        return this.id;
    }
    getEmail(email) {
        return this.email;
    }
}

module.exports = Employee;