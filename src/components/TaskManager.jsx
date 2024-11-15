import React, { useState, useEffect } from 'react';
import Task from './Task';

const TaskManager = () => {
    // const [tasks, setTasks] = useState(localStorage.getItem("tasks")===null?[]:localStorage.getItem("tasks"));
    const [tasks, setTasks] = useState(() => {
        // Retrieve item from localStorage or set to an empty array if key doesn't exist
        const savedTasks = localStorage.getItem('tasks');
        let temp = savedTasks ? JSON.parse(savedTasks) : [];
        const today = new Date().toISOString().split("T")[0];
        temp = temp.map((task) =>
            task.status === 'incomplete' && task.dueDate < today
                ? { ...task, status: 'overdue' }
                : task
        )
        return temp;
    });
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low',
        status: 'incomplete',
    });
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [filter, setFilter] = useState('incomplete');
    const [searchQuery, setSearchQuery] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('All');
    const [active, setActive] = useState('All');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) setTasks(storedTasks);

        const storedFilter = localStorage.getItem('filter');
        if (storedFilter) setFilter(storedFilter);

        const storedSearchQuery = localStorage.getItem('searchQuery');
        if (storedSearchQuery) setSearchQuery(storedSearchQuery);

        const storedPriorityFilter = localStorage.getItem('priorityFilter');
        if (storedPriorityFilter) {
            setPriorityFilter(storedPriorityFilter);
            // setActive(storedPriorityFilter)
        }
    }, []);
    // if (localStorage.getItem("key") !== null) {
    //     console.log("Key exists in localStorage");
    // } else {
    //     console.log("Key does not exist in localStorage");
    // }
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('filter', filter);
    }, [filter]);

    useEffect(() => {
        localStorage.setItem('searchQuery', searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        localStorage.setItem('priorityFilter', priorityFilter);
        // setActive(priorityFilter)
    }, [priorityFilter]);

    // useEffect(() => {
    //     const today = new Date().toISOString().split("T")[0];
    //     setTasks((tasks) =>
    //         Array.isArray(tasks) && tasks.map((task) =>
    //             task.status === 'incomplete' && task.dueDate < today
    //                 ? { ...task, status: 'overdue' }
    //                 : task
    //         )
    //     );
    // }, [tasks]);

    const addTask = () => {
        const today = new Date().toISOString().split("T")[0];
        if (newTask.title.trim() && newTask.description.trim()) {
            const newTaskObj = { id: Date.now(), ...newTask };
            if (newTaskObj.dueDate < today) newTaskObj.status = 'overdue'
            setTasks([...tasks, newTaskObj]);
            // setTasks(...(tasks||[]), newTaskObj);
            // console.log(tasks, "abc");
            // console.log(newTaskObj);

            setNewTask({ title: '', description: '', dueDate: '', priority: 'Low', status: 'incomplete' });
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        setEditingTaskId(null);
    };

    const markAsCompleted = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, status: 'completed' } : task
        ));
    };
    let filteredTasks = [];
    // useEffect(() => {
    filteredTasks = Array.isArray(tasks) && tasks
        .filter((task) => task.status === filter)
        .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter((task) => priorityFilter === 'All' || task.priority === priorityFilter)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    // }, [tasks])

    const filterHeader = {
        incomplete: "Incomplete Tasks",
        completed: "Completed Tasks",
        overdue: "Overdue Tasks",
    };
    return (
        <div className="grid grid-cols-12 min-h-screen bg-[#FFF6E3]">
            {/* Left Sidebar */}
            <aside className="col-span-3 p-6 bg-[#d3f4e6] shadow-md space-y-8">
                <h2 className="text-4xl font-serif text-center">Task Manager</h2>

                {/* Add Task Form */}
                <div className="space-y-4">
                    <input
                        type="text"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        placeholder="Task Title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        placeholder="Task Description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        value={newTask.dueDate}
                        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={newTask.priority}
                        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <button
                        onClick={addTask}
                        className="w-full py-4 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Add Task
                    </button>
                </div>

                {/* Filter Buttons */}
                <div className="mt-8 space-y-4">
                    <button
                        onClick={() => setFilter('incomplete')}
                        className="w-full h-20 py-2 bg-[#00827E] text-2xl text-white rounded-lg hover:bg-[#1F9688]"
                    >
                        Incomplete
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className="w-full h-20 py-2 bg-[#3DAA93] text-2xl text-white rounded-lg hover:bg-[#5CBE9D]"
                    >
                        Completed
                    </button>
                    <button
                        onClick={() => setFilter('overdue')}
                        className="w-full h-20 py-2 text-2xl bg-[#7AD2A8] text-white rounded-lg hover:bg-[#99E6B2]"
                    >
                        Overdue
                    </button>
                </div>
            </aside>

            {/* Right Side - Task List */}
            <main className="col-span-9 p-6">
                {/* Display Header for Selected Filter */}
                <h3 className="text-3xl font-bold mb-4">{filterHeader[filter]}</h3>
                {/* <h1 className="text-3xl font-bold mb-4">
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </h1> */}
                {/* Search and Priority Filters */}
                <div className="mb-6 flex space-x-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by title"
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => setPriorityFilter('High')}
                        className={`px-4 py-2 rounded-lg text-white ${priorityFilter === 'High' ? 'bg-gray-600 border-4' : 'bg-red-500'
                            } hover:bg-red-600`}
                    >
                        High
                    </button>
                    <button
                        onClick={() => setPriorityFilter('Medium')}
                        className={`px-4 py-2 rounded-lg text-white ${priorityFilter === 'Medium' ? 'bg-gray-600 border-4' : 'bg-yellow-500'
                            } hover:bg-yellow-600`}
                    >
                        Medium
                    </button>
                    <button
                        onClick={() => setPriorityFilter('Low')}
                        className={`px-4 py-2 rounded-lg text-white ${priorityFilter === 'Low' ? 'bg-gray-600 border-4' : 'bg-green-500'
                            } hover:bg-green-600`}
                    >
                        Low
                    </button>
                    <button
                        onClick={() => setPriorityFilter('All')}
                        className={`px-4 py-2 rounded-lg text-white ${priorityFilter === 'All' ? 'bg-gray-600 border-4' : 'bg-blue-500'
                            } hover:bg-gray-600`}
                    >
                        All
                    </button>
                </div>

                {/* Task List */}
                <div className="grid gap-4">
                    {Array.isArray(filteredTasks) && filteredTasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={deleteTask}
                            onUpdate={updateTask}
                            onComplete={markAsCompleted}
                            isEditing={editingTaskId === task.id}
                            setEditingTaskId={setEditingTaskId}
                            isEditable={task.status !== 'completed'}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TaskManager;
