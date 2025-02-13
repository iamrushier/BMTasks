console.log("Index.ts loaded");
import "bootstrap/dist/css/bootstrap.min.css";
import { Expense, expenseTrackerKey } from "./types";
import { addExpenseCallback, filterExpenseCallback } from "./eventHandlers";
import { getFromLocalStorage } from "./storage";
import { renderExpensesData } from "./ui";

const addNewButton: HTMLButtonElement = document.querySelector(
  "#add-new-expense"
) as HTMLButtonElement;
const filterButton: HTMLButtonElement = document.querySelector(
  "#filter-btn"
) as HTMLButtonElement;

addNewButton.addEventListener("click", addExpenseCallback);
filterButton.addEventListener("click", filterExpenseCallback);

const expensesData: Expense[] = getFromLocalStorage<string, Expense[]>(
  expenseTrackerKey
);
renderExpensesData(expensesData);
