console.log("Index.ts loaded");
import "bootstrap/dist/css/bootstrap.min.css";
import { Expense, expenseTrackerKey } from "./types";
import { addExpenseCallback, filterExpenseCallback } from "./eventHandlers";
import { getFromLocalStorage } from "./storage";
import { renderExpensesData } from "./ui";

const addNewButton: HTMLButtonElement = document.querySelector(
  "#add-new-expense"
) as HTMLButtonElement;
// const filterButton: HTMLButtonElement = document.querySelector(
//   "#filter-btn"
// ) as HTMLButtonElement;
const clearFilterButton: HTMLButtonElement = document.querySelector(
  "#clear-filter-btn"
) as HTMLButtonElement;
const filterOptionsContainer: HTMLDivElement = document.querySelector(
  ".filter-options-container"
) as HTMLDivElement;

addNewButton.addEventListener("click", addExpenseCallback);
// filterButton.addEventListener("click", filterExpenseCallback);
filterOptionsContainer.addEventListener("click", filterExpenseCallback);
filterOptionsContainer.addEventListener("change", filterExpenseCallback);

const expensesData: Expense[] = getFromLocalStorage<string, Expense[]>(
  expenseTrackerKey
);
renderExpensesData(expensesData);
