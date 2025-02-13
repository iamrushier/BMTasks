// import expenseStorage from "./index";
import { addNewExpense, filterExpenses } from "./expenseManager";
import { Expense } from "./types";
import { extractNewExpense, renderExpensesData } from "./ui";

// const expenseTitleInput: HTMLInputElement = document.querySelector(
//   "#expense-title"
// ) as HTMLInputElement;
// const expenseCostInput: HTMLInputElement = document.querySelector(
//   "#expense-cost"
// ) as HTMLInputElement;
// const expenseCategoryInput: HTMLInputElement = document.querySelector(
//   "#expense-category"
// ) as HTMLInputElement;
// const expenseDescriptionInput: HTMLInputElement = document.querySelector(
//   "#expense-description"
// ) as HTMLInputElement;
// const expenseDateInput: HTMLInputElement = document.querySelector(
//   "#expense-date"
// ) as HTMLInputElement;

// const addNewButton: HTMLButtonElement = document.querySelector(
//   "#add-new-expense"
// ) as HTMLButtonElement;

// function addNewExpense() {
//   const expenseTitle: string = expenseTitleInput.value;
//   const expenseCost: number = Number(expenseCostInput.value);
//   const expenseCategory: string = expenseCategoryInput.value;
//   const expenseDescription: string = expenseDescriptionInput.value || "";
//   const expenseDate: Date = new Date(expenseDateInput.value);

//   const newExpense: Expense = {
//     title: expenseTitle,
//     cost: expenseCost,
//     category: expenseCategory,
//     description: expenseDescription,
//     date: expenseDate,
//   };
//   console.log(newExpense);
// }

// export default addNewExpense;

function addExpenseCallback(event: Event): void {
  const newExpense: Expense = extractNewExpense();
  const expensesData: Expense[] = addNewExpense(newExpense);
  renderExpensesData(expensesData);
}
function filterExpenseCallback(event: Event): void {
  const categoryElement = <HTMLSelectElement>(
    document.querySelector("#category-filter")
  );
  const fromDateElement = <HTMLInputElement>(
    document.querySelector("#from-date")
  );
  const untilDateElement = <HTMLInputElement>(
    document.querySelector("#until-date")
  );
  const category = categoryElement.value;
  const fromDate = fromDateElement.value;
  const untilDate = untilDateElement.value;
  const expensesData: Expense[] = filterExpenses(category, fromDate, untilDate);
  renderExpensesData(expensesData);
}
export { addExpenseCallback, filterExpenseCallback };
