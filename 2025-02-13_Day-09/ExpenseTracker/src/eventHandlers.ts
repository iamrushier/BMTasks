// import expenseStorage from "./index";
import { addNewExpense, filterExpenses } from "./expenseManager";
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
function filterExpenseCallback(event: Event): void {
  const target = event.target as HTMLElement;

  if (!target.classList.contains("filter-choice")) return;

  const categoryElement = <HTMLSelectElement>(
    document.querySelector("#category-filter")
  );
  const fromDateElement = <HTMLInputElement>(
    document.querySelector("#from-date")
  );
  const untilDateElement = <HTMLInputElement>(
    document.querySelector("#until-date")
  );
  if (target.classList.contains("clear-filter-btn")) {
    console.log("Clearing filter");
    categoryElement.value = "all";
    categoryElement.selectedIndex = 0;
    fromDateElement.value = "";
    untilDateElement.value = "";
  }
  const category = categoryElement.value;
  const fromDate = fromDateElement.value;
  const untilDate = untilDateElement.value;
  const expensesData: Expense[] = filterExpenses(category, fromDate, untilDate);
  renderExpensesData(expensesData);
}
export { addExpenseCallback, filterExpenseCallback };
