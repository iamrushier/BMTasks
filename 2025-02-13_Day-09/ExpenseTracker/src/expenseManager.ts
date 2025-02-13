import { getFromLocalStorage, saveToLocalStorage } from "./storage";
import { Expense, expenseTrackerKey } from "./types";

function addNewExpense(expense: Expense): Expense[] {
  const oldExpensesData: Expense[] = getFromLocalStorage<string, Expense[]>(
    expenseTrackerKey
  );
  oldExpensesData.push(expense);
  const newExpensesData: Expense[] = structuredClone(oldExpensesData);
  saveToLocalStorage(expenseTrackerKey, newExpensesData);
  return newExpensesData;
}
function filterExpenses(
  category: string,
  fromDate: string,
  untilDate: string
): Expense[] {
  const expensesData: Expense[] = getFromLocalStorage<string, Expense[]>(
    expenseTrackerKey
  );
  let findFromDate: Date;
  let findUntilDate: Date;
  if (!fromDate) {
    findFromDate = expensesData.reduce((accum: Date, expense: Expense) => {
      const date: Date = new Date(expense.date);
      if (accum < date) return date;
      else return accum;
    }, new Date());
  } else {
    findFromDate = new Date(fromDate);
  }
  if (!untilDate) {
    findUntilDate = new Date();
  } else {
    findUntilDate = new Date(fromDate);
  }
  return structuredClone(
    expensesData
      .filter(
        (expense) =>
          category.toLowerCase() === "all" || category === expense.category
      )
      .filter((expense) => {
        const expenseDate: Date = new Date(expense.date);
        return findFromDate <= expenseDate && expenseDate <= findUntilDate;
      })
  );
}
export { addNewExpense, filterExpenses };
