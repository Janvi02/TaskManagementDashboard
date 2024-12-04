import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        filter: 'all', // State for the current filter
        searchTerm: '', // State for the search term
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const index = state.tasks.findIndex(task => task.id === id);
            if (index !== -1) {
                state.tasks[index] = { ...state.tasks[index], ...updatedTask };
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        filterTasks: (state, action) => {
            state.filter = action.payload; // Update the current filter
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload; // Update the search term
        },
        reorderTasks: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [movedTask] = state.tasks.splice(sourceIndex, 1);
            state.tasks.splice(destinationIndex, 0, movedTask); // Reorder the task
        },
    },
});

// Export actions
export const {
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    filterTasks,
    setSearchTerm,
    reorderTasks,
} = taskSlice.actions;

// Selector to get filtered and searched tasks
export const selectFilteredTasks = (state) => {
    const { tasks, filter, searchTerm } = state.tasks;

    // Apply filtering
    let filteredTasks = tasks;
    switch (filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case 'pending':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'overdue':
            filteredTasks = tasks.filter(
                task => new Date(task.dueDate) < new Date() && !task.completed
            );
            break;
        default:
            filteredTasks = tasks; // Show all tasks
    }

    // Apply search
    if (searchTerm) {
        filteredTasks = filteredTasks.filter(task =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return filteredTasks;
};

export default taskSlice.reducer;
