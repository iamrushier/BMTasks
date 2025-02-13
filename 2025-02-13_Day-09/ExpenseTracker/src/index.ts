console.log("Index.ts loaded");
import "bootstrap/dist/css/bootstrap.min.css";
import { Expense, expenseTrackerKey } from "./types";
import {
  addExpenseCallback,
  deleteExpenseCallback,
  filterExpenseCallback,
} from "./eventHandlers";
import { getFromLocalStorage } from "./storage";
import { renderExpensesData } from "./ui";

const addNewButton: HTMLButtonElement = document.querySelector(
  "#add-new-expense"
) as HTMLButtonElement;

const filterOptionsContainer: HTMLDivElement = document.querySelector(
  ".filter-options-container"
) as HTMLDivElement;

const tableBody: HTMLElement = document.querySelector(
  "#table-body"
) as HTMLElement;

addNewButton.addEventListener("click", addExpenseCallback);
// filterButton.addEventListener("click", filterExpenseCallback);
filterOptionsContainer.addEventListener("click", filterExpenseCallback);
filterOptionsContainer.addEventListener("change", filterExpenseCallback);

// Attach a single event listener to the parent tbody
tableBody.addEventListener("click", deleteExpenseCallback);

const expensesData: Expense[] = getFromLocalStorage<string, Expense[]>(
  expenseTrackerKey
);
renderExpensesData(expensesData);
