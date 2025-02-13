interface Expense {
  title: string;
  cost: number;
  category: string;
  description: string;
  date: Date;
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
