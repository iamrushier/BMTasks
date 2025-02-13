// import expenseStorage from "./index";
import { addNewExpense, filterExpenses } from "./expenseManager";
import { Expense } from "./types";
import { extractNewExpense, renderExpensesData } from "./ui";

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
