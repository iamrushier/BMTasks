class Employee {
  public name: string;
  public readonly id: number;
  private salary: number;

  constructor(name: string, id: number, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  get Salary(): number {
    return this.salary;
  }
  public calculateBonus(): number {
    return 5000.0;
  }
}

class Manager extends Employee {
  public teamSize: number;
  constructor(name: string, id: number, salary: number, teamSize: number) {
    super(name, id, salary);
    this.teamSize = teamSize;
  }
  public calculateBonus(): number {
    return super.calculateBonus() + this.Salary * 0.15;
  }
}
class Engineer extends Employee {
  public experience: number;
  constructor(name: string, id: number, salary: number, experience: number) {
    super(name, id, salary);
    this.experience = experience;
  }
  public calculateBonus(): number {
    return super.calculateBonus() + this.Salary * 0.1;
  }
}
class Intern extends Employee {
  public workMonths: number;
  constructor(name: string, id: number, salary: number, workMonths: number) {
    super(name, id, salary);
    this.workMonths = workMonths;
  }
  public calculateBonus(): number {
    return super.calculateBonus() + this.Salary * 0.01;
  }
}

const emp1: Manager = new Manager("Swamy", 2, 70000, 25);
const emp2: Engineer = new Engineer("Naruto", 3, 45000, 3);
const emp3: Intern = new Intern("Binny", 4, 10000, 6);

console.log(
  `Manager ${emp1.name} has salary ${
    emp1.Salary
  } & gets bonus ₹${emp1.calculateBonus()}`
);
console.log(
  `Engineer ${emp2.name} has salary ${
    emp2.Salary
  } & gets bonus ₹${emp2.calculateBonus()}`
);
console.log(
  `Intern ${emp3.name} has salary ${
    emp3.Salary
  } & gets bonus ₹${emp3.calculateBonus()}`
);
