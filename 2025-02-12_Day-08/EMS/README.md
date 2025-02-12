# Instructions: Employee Management System

1. **Create an `Employee` interface that includes the following properties:**

   - `id`: `number`
   - `name`: `string`
   - `position`: `string`
   - `salary`: `number`

2. **Create a `Manager` interface that extends `Employee` and adds:**

   - `teamSize`: `number`

3. **Create a `Department` class that:**

   - Has a private property `employees`: `Employee[]`
   - Contains methods:
     - `addEmployee(employee: Employee): void`
       - Adds an employee to the department.
     - `removeEmployee(id: number): void`
       - Removes an employee by `id`.
     - `getTotalSalary(): number`
       - Returns the total salary of all employees.
     - `listEmployees(): void`
       - Logs the list of employees.

4. **Implement a `GenericStorage<T>` class that:**

   - Uses a generic array to store items of type `T`
   - Has methods:
     - `add(item: T): void`
       - Adds an item to the storage.
     - `remove(item: T): void`
       - Removes an item from storage.
     - `getAll(): T[]`
       - Returns all stored items.

5. **Create a utility function `updateSalary<T extends Employee>(employee: T, newSalary: number): T`**

   - This function should return a new employee object with the updated salary while keeping other properties unchanged.
