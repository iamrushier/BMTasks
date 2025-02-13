import { Expense } from "./types";

const tableBody: HTMLElement = document.querySelector(
  "#table-body"
) as HTMLElement;

function appendTableRow(expense: Expense, rowNumber?: number): void {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `<th scope="row" class="row-number">${
    rowNumber ?? ""
  }</th>
                            <td>${expense.title}</td>
                            <td>${expense.cost}</td>
                            <td>${expense.category}</td>
                            <td>${expense.date}</td>`;
  tableBody.appendChild(tableRow);
}
function renderExpensesData(expenses: Expense[]): void {
  tableBody.innerHTML = "";
  expenses.forEach((expense, index) => {
    appendTableRow(expense, index + 1);
  });
}
function extractNewExpense(): Expense {
  const expenseTitleInput = <HTMLInputElement>(
    document.querySelector("#expense-title")
  );
  const expenseCostInput: HTMLInputElement = document.querySelector(
    "#expense-cost"
  ) as HTMLInputElement;
  const expenseCategoryInput: HTMLSelectElement = document.querySelector(
    "#expense-category"
  ) as HTMLSelectElement;
  const expenseDescriptionInput: HTMLInputElement = document.querySelector(
    "#expense-description"
  ) as HTMLInputElement;
  const expenseDateInput: HTMLInputElement = document.querySelector(
    "#expense-date"
  ) as HTMLInputElement;

  const title = expenseTitleInput.value;
  const cost: number = Number(expenseCostInput.value);
  const category: string = expenseCategoryInput.value;
  const description: string = expenseDescriptionInput.value;
  const date: string = new Date(expenseDateInput.value)
    .toISOString()
    .slice(0, 10);
  expenseTitleInput.value = "";
  expenseCostInput.value = "0";
  expenseCategoryInput.value = "food";
  expenseCategoryInput.selectedIndex = 0;
  expenseDescriptionInput.value = "";
  expenseDateInput.value = new Date().toISOString().slice(0, 10);
  return {
    title,
    cost,
    category,
    description,
    date,
  };
}

export { appendTableRow, renderExpensesData, extractNewExpense };
