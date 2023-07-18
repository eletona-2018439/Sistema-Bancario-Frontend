import React, { useEffect, useState } from 'react';
import { getTransaccionesPorUsuario } from './apiTransacciones';

const TransaccionesTabla = () => {
  const [transacciones, setTransacciones] = useState([]);

  useEffect(() => {
    obtenerTransacciones();
  }, []);

  const obtenerTransacciones = async () => {
    // Llamar a la función de la API para obtener las transacciones del usuario logueado
    const data = await getTransaccionesPorUsuario();

    if (data) {
      setTransacciones(data);
    }
  };

  return (
    <div className="transacciones-container">
      <h1>Transacciones del Usuario</h1>
      <hr />
      <div className="table-container">
        <table className='table-tran'>
          <thead className='thead-dark'>
            <tr>
              <th>Cuenta Origen</th>
              <th>Cuenta Destino</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {transacciones.map((transaccion) => (
              <tr key={transaccion._id}>
                <td>{transaccion.cuentaOrigen}</td>
                <td>{transaccion.cuentaDestino}</td>
                <td>{transaccion.monto}</td>
                <td>{transaccion.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default TransaccionesTabla;
