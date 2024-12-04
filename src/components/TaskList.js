import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { selectFilteredTasks } from '../redux/tasksSlice';
import './TaskList.css'; // Import the selector

const TaskList = () => {
    const filteredTasks = useSelector(selectFilteredTasks); // Use the selector to get filtered tasks

    return (
        <ul>
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;





