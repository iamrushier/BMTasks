// import expenseStorage from "./index";
import { addNewExpense, filterExpenses, deleteExpense } from "./expenseManager";
import { Expense } from "./types";
import { extractNewExpense, renderExpensesData } from "./ui";

function addExpenseCallback(event: Event): void {
  const newExpense: Expense = extractNewExpense();
  if (newExpense.cost === 0 || newExpense.title === "") {
    alert("Please fill all the fields");
    return;
  }
  const expensesData: Expense[] = addNewExpense(newExpense);
  renderExpensesData(expensesData);
}
const categoryElement = <HTMLSelectElement>(
  document.querySelector("#category-filter")
);
const fromDateElement = <HTMLInputElement>document.querySelector("#from-date");
const untilDateElement = <HTMLInputElement>(
  document.querySelector("#until-date")
);
function filterExpenseCallback(event: Event): void {
  const target = event.target as HTMLElement;

  if (!target.classList.contains("filter-choice")) return;

  if (target.classList.contains("clear-filter-btn")) {
    clearFilters();
  }
  const category = categoryElement.value;
  const fromDate = fromDateElement.value;
  const untilDate = untilDateElement.value;
  const expensesData: Expense[] = filterExpenses(category, fromDate, untilDate);
  renderExpensesData(expensesData);
}
function clearFilters(): void {
  categoryElement.value = "all";
  categoryElement.selectedIndex = 0;
  fromDateElement.value = "";
  untilDateElement.value = "";
}
function deleteExpenseCallback(event: Event): void {
  const target = event.target as HTMLElement;
  if (!target.classList.contains("delete-btn")) return;
  const row = target.closest("tr");
  if (!row) return;
  const id: string = row.getAttribute("expense-id") || "";
  const userConfirmed = window.confirm("Sure to delete this expense?");
  if (!userConfirmed) return;
  const expensesData: Expense[] = deleteExpense(id);
  clearFilters();
  renderExpensesData(expensesData);
}

export { addExpenseCallback, filterExpenseCallback, deleteExpenseCallback };
