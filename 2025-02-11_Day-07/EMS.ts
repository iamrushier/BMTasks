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
        this.teamSize = teamSize
    }
    public calculateBonus(): number {
        return super.calculateBonus()+this.Salary * 0.10;
    }
}
class Engineer extends Employee {
    public experience: number;
    constructor(name: string, id: number, salary: number, experience: number) {
        super(name, id, salary);
        this.experience = experience
    }
    public calculateBonus(): number {
        return super.calculateBonus()+this.Salary * 0.05;
    }
}
class Intern extends Employee {
    public workMonths: number;
    constructor(name: string, id: number, salary: number, workMonths: number) {
        super(name, id, salary);
        this.workMonths = workMonths
    }
    public calculateBonus(): number {
        return super.calculateBonus()+this.Salary * 0.01;
    }
}


const emp1: Manager = new Manager("ST", 2, 70000, 25);
const emp2: Engineer = new Engineer("TU", 3, 45000, 3);
const emp3: Intern = new Intern("UV", 4, 10000, 6);

console.log(emp1.calculateBonus());
console.log(emp2.calculateBonus());
console.log(emp3.calculateBonus());