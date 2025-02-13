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
  console.log(!fromDate);
  if (!fromDate) {
    findFromDate = expensesData.reduce((accum: Date, expense: Expense) => {
      const date: Date = new Date(expense.date);
      if (accum < date) return accum;
      else return date;
    }, new Date(new Date().toISOString().slice(0, 10)));
    console.log(findFromDate);
  } else {
    findFromDate = new Date(fromDate);
  }
  if (!untilDate) {
    findUntilDate = new Date();
  } else {
    findUntilDate = new Date(untilDate);
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
