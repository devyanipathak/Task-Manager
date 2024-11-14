import React, { useState } from 'react';

const Task = ({ task, onDelete, onUpdate, onComplete, isEditing, setEditingTaskId, isEditable }) => {
    const [editTask, setEditTask] = useState({ ...task });

    const handleSave = () => {
        onUpdate(editTask);
        setEditingTaskId(null);
    };

    return (
        <div className="p-4 bg-white border rounded-lg shadow-md">
            {isEditing && isEditable ? (
                <>
                    <input
                        type="text"
                        value={editTask.title}
                        onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                        placeholder="Task Title"
                        className="mb-2 w-full px-3 py-2 border rounded-md"
                    />
                    <textarea
                        value={editTask.description}
                        onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                        placeholder="Task Description"
                        className="mb-2 w-full px-3 py-2 border rounded-md"
                    />
                    <input
                        type="date"
                        value={editTask.dueDate}
                        onChange={(e) => setEditTask({ ...editTask, dueDate: e.target.value })}
                        className="mb-2 w-full px-3 py-2 border rounded-md"
                    />
                    <select
                        value={editTask.priority}
                        onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
                        className="mb-2 w-full px-3 py-2 border rounded-md"
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditingTaskId(null)}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-700 mb-1">{task.description}</p>
                    <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
                    <p className={`text-sm font-semibold ${
                        task.priority === 'High' ? 'text-red-600' : 
                        task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                    }`}>
                        Priority: {task.priority}
                    </p>
                    <div className="flex mt-2 space-x-2">
                        {isEditable && (
                            <button
                                onClick={() => setEditingTaskId(task.id)}
                                className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                        )}
                        <button
                            onClick={() => onDelete(task.id)}
                            className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                        {task.status !== 'completed' && (
                            <button
                                onClick={() => onComplete(task.id)}
                                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Mark as Completed
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Task;
