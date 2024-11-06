import { Link } from 'react-router-dom'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`sidebar ${isOpen ? '' : 'close'}`}>
      <Link to="/" className="logo">
        <i className='bx bx-buoy'></i>
        <div className="logo-name"><span>TATACHIO </span>MIRABEL</div>
      </Link>
      <ul className="side-menu">
        <li><Link to="/"><i className='bx bxs-dashboard'></i>Dashboard</Link></li>
        <li><Link to="/shop"><i className='bx bx-store-alt'></i>Shop</Link></li>
        <li className="active"><Link to="/analytics"><i className='bx bx-analyse'></i>Analytics</Link></li>
        <li><Link to="/tickets"><i className='bx bx-message-square-dots'></i>Tickets</Link></li>
        <li><Link to="/users"><i className='bx bx-group'></i>Users</Link></li>
        <li><Link to="/settings"><i className='bx bx-cog'></i>Settings</Link></li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/logout" className="logout">
            <i className='bx bx-log-out-circle'></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}