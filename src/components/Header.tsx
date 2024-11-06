export function Header() {
    return (
      <div className="header">
        <div className="left">
          <h1>Panel de analisis</h1>
          <ul className="breadcrumb">
            <li><a href="#">Analytics</a></li>
            /
            <li><a href="#" className="active">Shop</a></li>
          </ul>
        </div>
        <a href="#" className="report">
          <i className='bx bx-cloud-download'></i>
          <span>Descargar reporte</span>
        </a>
      </div>
    )
  }