import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import UsersLogic from '../API/UserA'



export const UpdateUser = ({ selectedUserId, closeModal }) => {
  // Estado para almacenar los datos del usuario
  const { users, updateUser, getUsers } = UsersLogic(); // Use users and updateUser from UsersLogic
  const [userData, setUserData] = useState({
    nombre: '',
    userName: '',
    password: '',
    Dpi: '',
    Celular: '',
    direccion: '',
    email: '',
    NamefromWork: '',
    IngresosMensauales: '',
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/mostrarEditar/${selectedUserId}`);
      const user = response.data.user;

      setUserData(user);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };




  // Función para manejar los cambios en los campos de entrada
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario de edición
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/user/editar/${selectedUserId}`, userData);
      console.log('Usuario actualizado correctamente');
      Swal.fire({
        title: 'Edición exitosa',
        text: 'Se editó correctamente el usuario',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        closeModal();
        getUsers();
      });
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  const handleCancel = () => {
    closeModal(); // Cerrar el modal
    getUsers();
  };


  return (
    <div className="modal">
      <h1>Editar usuario</h1>
      <Modal isOpen={true} onRequestClose={closeModal}>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-3'>
            <h1>Editar Usuario</h1>
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" name="nombre" value={userData.nombre} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Nombre de usuario:</label>
            <input type="text" className="form-control" name="userName" value={userData.userName} onChange={handleInputChange} readOnly />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              readOnly={true}
            />
          </div>


          <div className="mb-3">
            <label className="form-label">Dpi:</label>
            <input
              type="number"
              className="form-control"
              name="Dpi"
              value={userData.Dpi}
              onChange={handleInputChange}
              readOnly={true}
            />
          </div>


          <div className="mb-3">
            <label className="form-label">Celular:</label>
            <input type="number" className="form-control" name="Celular" value={userData.Celular} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección:</label>
            <input type="text" className="form-control" name="direccion" value={userData.direccion} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico:</label>
            <input type="email" className="form-control" name="email" value={userData.email} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Nombre del trabajo:</label>
            <input type="text" className="form-control" name="NamefromWork" value={userData.NamefromWork} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Ingresos mensuales:</label>
            <input type="number" className="form-control" name="IngresosMensauales" value={userData.IngresosMensauales} onChange={handleInputChange} />
          </div>

          <button className="btn btn-dark" type="submit" style={{ marginRight: '10px' }}>Guardar cambios</button>
          <button className="btn btn-danger" onClick={handleCancel} style={{ marginRight: '10px' }}>Cancelar</button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateUser;