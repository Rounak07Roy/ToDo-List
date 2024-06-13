*Working of the To-Do List Component*
The To-Do List component allows users to:

Add a Task: Users can add a new task with a status (Pending/Completed).
Remove a Task: Users can remove tasks from the list.
Mark Task as Completed/Pending: Users can toggle the completion status of tasks.
Filter Tasks: Users can filter tasks to view All, Completed, or Pending tasks.
Persist Data: The tasks are stored in localStorage to persist data across page reloads.


Testing Guidance--
Run the Application:

npm start

This will start the development server and open the application in your default browser.

Add Tasks:

Type a task in the input box.
Select a status (Pending/Completed) from the dropdown next to the input.
Click "Add Task".
Expected Result: The task should appear in the list with the specified status (Pending or Completed).
Remove Tasks:

Click the "Remove" button next to a task.
Expected Result: The task should be removed from the list.
Mark Task as Completed/Pending:

Click on the task text.
Expected Result: The task should toggle between Completed and Pending status, indicated by a strikethrough for completed tasks.
Filter Tasks:

Use the filter dropdown to select "All", "Completed", or "Pending".
Expected Result: The list should display tasks based on the selected filter criteria.
LocalStorage Persistence:

Add several tasks and note their statuses.
Refresh the browser.
Expected Result: All tasks should persist with their correct statuses.
Input Validation:

Try to add a task without typing anything in the input box.
Expected Result: An alert should appear stating "Task cannot be empty", and the task should not be added.
