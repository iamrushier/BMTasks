var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.calculateBonus = function () {
        return 5000.0;
    };
    Object.defineProperty(Employee, "CompanyName", {
        get: function () {
            return this.companyName;
        },
        enumerable: false,
        configurable: true
    });
    Employee.companyName = "XZ Comp";
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary, teamSize) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.calculateBonus = function () {
        return _super.prototype.calculateBonus.call(this) + this.Salary * 0.15;
    };
    return Manager;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, id, salary, experience) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.experience = experience;
        return _this;
    }
    Engineer.prototype.calculateBonus = function () {
        return _super.prototype.calculateBonus.call(this) + this.Salary * 0.1;
    };
    return Engineer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(name, id, salary, workMonths) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.workMonths = workMonths;
        return _this;
    }
    Intern.prototype.calculateBonus = function () {
        return _super.prototype.calculateBonus.call(this) + this.Salary * 0.01;
    };
    return Intern;
}(Employee));
var emp1 = new Manager("Swamy", 2, 70000, 25);
var emp2 = new Engineer("Naruto", 3, 45000, 3);
var emp3 = new Intern("Binny", 4, 10000, 6);
console.log("Employees of ".concat(Employee.CompanyName, ":"));
console.log("Manager ".concat(emp1.name, " has salary ").concat(emp1.Salary, " & gets bonus \u20B9").concat(emp1.calculateBonus()));
console.log("Engineer ".concat(emp2.name, " has salary ").concat(emp2.Salary, " & gets bonus \u20B9").concat(emp2.calculateBonus()));
console.log("Intern ".concat(emp3.name, " has salary ").concat(emp3.Salary, " & gets bonus \u20B9").concat(emp3.calculateBonus()));
