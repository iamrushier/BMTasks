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
                        <td class="expense-cost">${expense.cost}</td>
                        <td>${
                          expense.category[0].toUpperCase() +
                          expense.category.slice(1)
                        }</td>
                        <td>${expense.date}</td>
                        <td>
                          <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                          </button>
                        </td>`;
  tableRow.setAttribute("expense-id", expense.id);
  tableBody.appendChild(tableRow);
}

function renderExpensesData(expenses: Expense[]): void {
  tableBody.innerHTML = "";
  expenses.forEach((expense, index) => {
    appendTableRow(expense, index + 1);
  });
  updateTotalExpenses();
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
    id: String(Date.now()),
    title,
    cost,
    category,
    description,
    date,
  };
}

function updateTotalExpenses(): void {
  const category = (<HTMLSelectElement>(
    document.querySelector("#category-filter")
  )).value;
  const fromDate = (<HTMLInputElement>document.querySelector("#from-date"))
    .value;
  const untilDate = (<HTMLInputElement>document.querySelector("#until-date"))
    .value;

  const expenseElements = <NodeListOf<HTMLElement>>(
    document.querySelectorAll(".expense-cost")
  );
  const totalExpense = [...expenseElements].reduce(
    (acc, el) => acc + parseFloat(el.textContent || "0"),
    0
  );
  const totalExpensesDiv = <HTMLElement>(
    document.querySelector("#total-expenses")
  );
  if (totalExpensesDiv) {
    totalExpensesDiv.textContent = `${
      category[0].toUpperCase() + category.slice(1)
    } Expenses: ₹${totalExpense.toFixed(2)}, ${
      (fromDate && untilDate && `From ${fromDate} to ${untilDate}`) ||
      (fromDate && `From ${fromDate}`) ||
      (untilDate && `Until ${untilDate}`) ||
      "All time"
    }`;
  }
}

export { appendTableRow, renderExpensesData, extractNewExpense };
