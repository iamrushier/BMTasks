// Employee Management System
class Employee {
  #salary;
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.#salary = salary;
  }
  getSalary() {
    return this.#salary;
  }
  calculateBonus() {
    return 5000.0;
  }
}
class Manager extends Employee {
  constructor(name, id, salary, teamSize) {
    super(name, id, salary);
    this.teamSize = teamSize;
  }
  calculateBonus() {
    return this.getSalary() * 0.2;
  }
}
class Engineer extends Employee {
  constructor(name, id, salary, specialization) {
    super(name, id, salary);
    this.specialization = specialization;
  }
  calculateBonus() {
    return this.getSalary() * 0.15;
  }
}
class Intern extends Employee {
  constructor(name, id, salary, workMonths) {
    super(name, id, salary);
    this.workMonths = workMonths;
  }
  calculateBonus() {
    return 2000;
  }
}
const emp1 = new Manager("ST", 2, 70000, 25);
const emp2 = new Engineer("TU", 3, 45000, "Frontend");
const emp3 = new Intern("UV", 4, 10000, 6);

console.log(emp1.calculateBonus());
console.log(emp2.calculateBonus());
console.log(emp3.calculateBonus());
