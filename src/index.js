import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './App.css';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

root.render(
    <Provider store={store}>
        <App />
    </Provider>
); // Render your app




