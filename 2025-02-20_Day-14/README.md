Assignment Instructions

1. Create Context and Reducer for Task Management
   Use useContext to create a TaskContext for global state management.
   Use useReducer to handle actions like adding, deleting, and toggling tasks.
   Task Actions:
   a. ADD_TASK → Adds a new task
   b. REMOVE_TASK → Removes a task
   c. TOGGLE_TASK → Marks a task as completed/incomplete
2. Use useMemo to Optimize Task Filtering
   Display total completed tasks using useMemo.
   Memoize calculations so they don’t re-run unnecessarily.
3. Use useCallback to Optimize Event Handlers
   Optimize addTask and toggleTask functions using useCallback.
   Ensure that these functions don’t unnecessarily re-render child components.
