import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilters from '../components/TaskFilters';

const Dashboard = () => {
    return (
        <div>
            <h1>Task Management Dashboard</h1>
            <TaskForm />
            <TaskFilters />
            <TaskList />
        </div>
    );
};

export default Dashboard;

