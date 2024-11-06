import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  toggleSidebar: () => void
  toggleDarkMode: () => void
  isDarkMode: boolean
}

export default function Navbar({ toggleSidebar, toggleDarkMode, isDarkMode }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav>
      <i className='bx bx-menu' onClick={toggleSidebar}></i>
      <form onSubmit={handleSearch}>
        <div className="form-input">
          <input 
            type="search" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
        </div>
      </form>
      <input 
        type="checkbox" 
        id="theme-toggle" 
        hidden 
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>
      <Link to="/notifications" className="notif">
        <i className='bx bx-bell'></i>
        <span className="count">12</span>
      </Link>
      <Link to="/profile" className="profile">
        <img src="/placeholder.svg" alt="Profile" />
      </Link>
    </nav>
  )
}