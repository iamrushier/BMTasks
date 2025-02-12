interface IEmployee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

interface IManager extends IEmployee {
  teamSize: number;
}

class Department {
  private employees: IEmployee[] = [];
  constructor(employees?: IEmployee[]) {
    if (employees) this.employees = employees;
  }
  public addEmployee(employee: IEmployee): void {
    this.employees.push(employee);
  }
  public removeEmployee(id: number): void {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }
  public getTotalSalary(): number {
    const totalSalary: number = this.employees.reduce(
      (accumulator, currEmp) => accumulator + currEmp.salary,
      0
    );
    return totalSalary;
  }
  public listEmployees(): void {
    console.log("\nEmployee Details:");
    console.log("ID\tName\tPosition");
    this.employees.forEach((employee) => {
      console.log(`${employee.id}\t${employee.name}\t${employee.position}`);
    });
    console.log("-".repeat(30));
  }
}

const department = new Department();
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
console.log(`Total Cost to Company: ₹${department.getTotalSalary()}`);
// Total Cost to Company: ₹115000
department.removeEmployee(3);
department.removeEmployee(1);
department.listEmployees();
// Employee Details:
// ID      Name    Position
// 2       Kajal   Designer
// ------------------------------

//***************************************************************//

function updateSalary<T extends IEmployee>(employee: T, newSalary: number): T {
  const newEmp = structuredClone(employee);
  newEmp.salary = newSalary;
  return newEmp;
}

const emp: IEmployee = {
  id: 1,
  name: "Smith",
  position: "Developer",
  salary: 60000,
};
const updatedEmp = updateSalary(emp, 70000);
console.log(emp);
// { id: 1, name: 'Smith', position: 'Developer', salary: 60000 }
console.log(updatedEmp);
// { id: 1, name: 'Smith', position: 'Developer', salary: 70000 }
