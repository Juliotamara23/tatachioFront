import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import './App.css'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true) // Cambiado a true para iniciar abierto
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} />
        <div className={`content ${sidebarOpen ? '' : 'close'}`}>
          <Navbar 
            toggleSidebar={toggleSidebar}
            toggleDarkMode={() => setDarkMode(!darkMode)}
            isDarkMode={darkMode}
          />
          <Dashboard />
        </div>
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} 
          onClick={toggleSidebar}
        ></div>
      </div>
    </Router>
  )
}