import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../redux/tasksSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
                {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
    );
};

export default TaskItem;


