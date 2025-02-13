interface Expense {
  id: string;
  title: string;
  cost: number;
  category: string;
  description: string;
  date: string;
}
enum Category {
  Food,
  Trvels,
  Bills,
  Shopping,
  Others,
}
const expenseTrackerKey: string = "ExpenseData";
export { Expense, Category, expenseTrackerKey };
