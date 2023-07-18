import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CuentaPage = () => {
    const [cuentas, setCuentas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

  
    useEffect(() => {
      obtenerUsuarios();
      obtenerCuentas();
    }, []);
  
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/mostrarUser');
        setUsuarios(response.data.listaUsers);
      } catch (error) {
        console.log(error);
      }
    };
  
    const obtenerCuentas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/cuenta/get');
        setCuentas(response.data.cuentas);
      } catch (error) {
        console.log(error);
      }
    };
  
    const openModal = () => {
      setModalIsOpen(true);
    };

    const getUsernameById = (userId) => {
      const user = usuarios.find((user) => user._id === userId);
      return user ? user.userName : '';
    };

  return (
    <div className='container mt-4'>
    <h1>Lista de Cuentas</h1>
    <hr />
    <div className="mt-4">
      <button className="btn btn-success" onClick={openModal}>Editar Cuenta</button>
    </div>

    <div className="mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cuentas && cuentas.map((cuenta) => (
          <div className="col" key={cuenta._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">No. de Cuenta: {cuenta.noCuenta}</h5>
                <h5 className="card-title">Usuario: {getUsernameById(cuenta.usuario)}</h5>
                <p className="card-text">Saldo: Q{cuenta.saldo}</p>
                <p className="card-text">Tipo de Cuenta: {cuenta.tipoCuenta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CuentaPage;
