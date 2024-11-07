import { Link } from 'react-router-dom'

interface InsightData {
  icon: string
  value: string | number
  label: string
  color: string
}

const insights: InsightData[] = [
  { icon: 'clipboard-list', value: '1,074', label: 'Paid Order', color: 'primary' },
  { icon: 'eye', value: '3,944', label: 'Site Visit', color: 'warning' },
  { icon: 'search', value: '14,721', label: 'Searches', color: 'success' },
  { icon: 'dollar-circle', value: '$6,742', label: 'Total Sales', color: 'danger' },
]

interface OrderData {
  user: string
  date: string
  status: 'Completed' | 'Pending' | 'process'
}

const orders: OrderData[] = [
  { user: 'John Doe', date: '14-08-2023', status: 'Completed' },
  { user: 'John Doe', date: '14-08-2023', status: 'Pending' },
  { user: 'John Doe', date: '14-08-2023', status: 'process' },
]

export default function Dashboard() {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><Link to="/analytics">Analytics</Link></li>
            /
            <li><Link to="/shop" className="active">Shop</Link></li>
          </ul>
        </div>
        <button className="report">
          <i className='bx bx-cloud-download'></i>
          <span>Download CSV</span>
        </button>
      </div>

      <ul className="insights">
        {insights.map((item, index) => (
          <li key={index}>
            <i className={`bx bx-${item.icon}`}></i>
            <span className="info">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </span>
          </li>
        ))}
      </ul>

      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className='bx bx-receipt'></i>
            <h3>Recent Orders</h3>
            <i className='bx bx-filter'></i>
            <i className='bx bx-search'></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <img src="/placeholder.svg" alt={order.user} />
                    <p>{order.user}</p>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reminders">
          <div className="header">
            <i className='bx bx-note'></i>
            <h3>Reminders</h3>
            <i className='bx bx-filter'></i>
            <i className='bx bx-plus'></i>
          </div>
          <ul className="task-list">
            <li className="completed">
              <div className="task-title">
                <i className='bx bx-check-circle'></i>
                <p>Start Our Meeting</p>
              </div>
              <i className='bx bx-dots-vertical-rounded'></i>
            </li>
            <li className="completed">
              <div className="task-title">
                <i className='bx bx-check-circle'></i>
                <p>Analyse Our Site</p>
              </div>
              <i className='bx bx-dots-vertical-rounded'></i>
            </li>
            <li className="not-completed">
              <div className="task-title">
                <i className='bx bx-x-circle'></i>
                <p>Play Football</p>
              </div>
              <i className='bx bx-dots-vertical-rounded'></i>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}