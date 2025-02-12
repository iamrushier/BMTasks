var Department = /** @class */ (function () {
    function Department(employees) {
        this.employees = [];
        if (employees)
            this.employees = employees;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.removeEmployee = function (id) {
        this.employees = this.employees.filter(function (employee) { return employee.id !== id; });
    };
    Department.prototype.getTotalSalary = function () {
        var totalSalary = this.employees.reduce(function (accumulator, currEmp) { return accumulator + currEmp.salary; }, 0);
        return totalSalary;
    };
    Department.prototype.listEmployees = function () {
        console.log("\nEmployee Details:");
        console.log("ID\tName\tPosition");
        this.employees.forEach(function (employee) {
            console.log("".concat(employee.id, "\t").concat(employee.name, "\t").concat(employee.position));
        });
        console.log("-".repeat(30));
    };
    return Department;
}());
var department = new Department();
department.addEmployee({
    id: 1,
    name: "Amar",
    position: "Developer",
    salary: 60000,
});
department.addEmployee({
    id: 2,
    name: "Kajal",
    position: "Designer",
    salary: 55000,
});
department.listEmployees();
// Employee Details:
// ID      Name    Position
// 1       Amar    Developer
// 2       Kajal   Designer
// ------------------------------
console.log("Total Cost to Company: \u20B9".concat(department.getTotalSalary()));
// Total Cost to Company: ₹115000
department.removeEmployee(3);
department.removeEmployee(1);
department.listEmployees();
// Employee Details:
// ID      Name    Position
// 2       Kajal   Designer
// ------------------------------
//***************************************************************//
function updateSalary(employee, newSalary) {
    var newEmp = structuredClone(employee);
    newEmp.salary = newSalary;
    return newEmp;
}
var emp = {
    id: 1,
    name: "Smith",
    position: "Developer",
    salary: 60000,
};
var updatedEmp = updateSalary(emp, 70000);
console.log(emp);
// { id: 1, name: 'Smith', position: 'Developer', salary: 60000 }
console.log(updatedEmp);
// { id: 1, name: 'Smith', position: 'Developer', salary: 70000 }
