import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../redux/tasksSlice';
import './TaskFilters.css'; // Import the filterTasks action

const TaskFilters = () => {
    const dispatch = useDispatch();

    const handleFilter = (filterType) => {
        dispatch(filterTasks(filterType)); // Dispatch the filter action
    };

    return (
        <div className="task-filters">
            <button onClick={() => handleFilter('all')}>All Tasks</button>
            <button onClick={() => handleFilter('completed')}>Completed Tasks</button>
            <button onClick={() => handleFilter('pending')}>Pending Tasks</button>
            <button onClick={() => handleFilter('overdue')}>Overdue Tasks</button>
        </div>
    );
};

export default TaskFilters;

