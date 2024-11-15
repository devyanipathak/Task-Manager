# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task-Manager Application:
- Tech stack used -> ReactJs (Frontend)
                  -> Local Storage (Storage)
  
- Features of Task-Manager:
  
  --Task Creation and Editing: Users can add tasks with details like title, description, due date, and priority (Low, Medium, High). They can also edit existing tasks as needed.
  
  -- Task Filtering: Users can filter tasks by their status (Incomplete, Completed, Overdue) and by priority level (Low, Medium, High, All) to organize their task list effectively.
  
  -- Search Functionality: A search bar enables users to find tasks by title, making it easier to locate specific tasks in a large list.
  
  -- Status-Responsive Display: Each task displays a background color based on its status: blue for Incomplete, coral for Completed, and peach for Overdue, making task management visually intuitive.
  
  -- Persistent Storage: Task data, filter settings, and search queries are saved in local storage, so users’ data and preferences are retained even if they close and reopen the app.
  
  -- Dynamic Button Styles: Active filter and priority buttons change appearance, providing users with a clear indicator of the current filter.
  
  -- Task Completion: Users can mark tasks as completed with a button, automatically updating the task’s status and appearance.
  
  -- Due Date Validation: Tasks with past due dates automatically switch to an "Overdue" status, helping users track overdue tasks.

- Setup instructions for getting started:
    -- Prerequisites:
        - Node.js (version 14 or higher) installed on your machine.
        - npm (comes with Node.js) as a package manager.
        - A code editor (such as Visual Studio Code).
  
   -- Setup Steps:
      - Install Dependencies
      - Install the required dependencies specified in the package.json file.
         -npm install
      - Run the project
         -npm run dev
        





