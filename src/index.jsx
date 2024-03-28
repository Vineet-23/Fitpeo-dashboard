import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Finding the root element in the DOM
const rootElement = document.getElementById('root');

// Creating a root for rendering React components
const root = createRoot(rootElement);

// Rendering the App component within a StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
