import './App.css'
import Sidebar from './core/components/Sidebar'
import Dashboard from './core/components/Dashboard'

function App () {
  
  return (
    <>
      <div className='flex justify-between items-start h-full'>
        
          <Sidebar />
          <Dashboard />
        
      </div>
    </>
  )
}

export default App
