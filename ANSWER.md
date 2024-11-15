## Technical Questions

#### How long did you spend on the coding test? 
I dedicated about 13-14 hours to the coding test, concentrating on developing the core features and ensuring an intuitive user interface. The task management functionalities were my main focus, and I made sure to fine-tune the task creation, editing, and deletion processes for a smooth user experience.

#### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.


In the latest version of React, hooks such as useState and useEffect have proven to be invaluable for efficiently managing state and handling side effects within functional components. These hooks make it much easier to work with dynamic task data and enable smooth updates for task operations, like creation and deletion.

For instance, useState is great for keeping track of task data, and useEffect allows me to handle side effects, such as updating the UI when a task is added or modified. By using these hooks together, I can ensure the app's state remains synchronized with the UI.

Here’s how I've applied useState and useEffect in my task management app:

## Code snippet:
useState hook:
```bash
  const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low',
        status: 'incomplete',
    });
```
useEffect hook:
```bash
useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
```


#### How would you track down a performance issue in production? Have you ever had to do this?


####If you had more time, what additional features or improvements would you consider adding to the task management application?
