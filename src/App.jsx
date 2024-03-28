// Importing useState hook from React
import { useState } from 'react';

// Importing necessary components and styles
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './core/components/Sidebar';
import Dashboard from './core/components/Dashboard';

// Main App component
function App() {
  // State for controlling sidebar visibility
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className='flex justify-between items-start h-full'>
        {/* Using React Router for navigation */}
        <Router>
          {/* Sidebar component with props */}
          <Sidebar isOpen={sidebar} setIsOpen={setSidebar} />
          {/* Dashboard component with props */}
          <Dashboard isOpen={sidebar} setIsOpen={setSidebar} />
        </Router>
      </div>
    </>
  );
}

export default App;
