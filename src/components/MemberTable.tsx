export default function MemberTable() {
  return (
    <div className="orders">
      <div className="header">
        <i className='bx bx-receipt'></i>
        <h3>Resumen de miembros</h3>
        <i className='bx bx-filter'></i>
        <i className='bx bx-search'></i>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Numero de documento</th>
            <th>Familia</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>John Doe</p>
            </td>
            <td>
              <p>1231213</p>
            </td>
            <td>120</td>
            <td><span className="status completed">Incluido</span></td>
          </tr>
          <tr>
            <td>
              <p>Jane Smith</p>
            </td>
            <td>
              <p>7654321</p>
            </td>
            <td>135</td>
            <td><span className="status pending">Excluidos</span></td>
          </tr>
          <tr>
            <td>
              <p>Bob Johnson</p>
            </td>
            <td>
              <p>9876543</p>
            </td>
            <td>142</td>
            <td><span className="status process">Pendiente</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}