## Technical Questions

#### How long did you spend on the coding test? 
It took me one full day for planning, designing and coding while doing the test.

#### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
#### useState Hook:
The useState hook is used in React to manage state in functional components. It allows you to declare a state variable and a function to update it. When the state changes, React triggers a re-render of the component.
#### Code snippet:
const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low',
        status: 'incomplete',
    });
#### useEffect Hook:
The useEffect hook is used to perform side effects in functional components, such as fetching data, manipulating the DOM, or setting up subscriptions. It runs after the component renders and can be configured to run under specific conditions.
#### Code snippet:
useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
#### How would you track down a performance issue in production? Have you ever had to do this?


####If you had more time, what additional features or improvements would you consider adding to the task management application?
