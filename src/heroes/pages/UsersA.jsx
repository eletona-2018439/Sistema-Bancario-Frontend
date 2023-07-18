import React, { useState } from 'react';
import UsersLogic from '../API/UserA';
import { UpdateUser } from './UpdateUser';
import Modal from 'react-modal';
import "./Styles/UserA.css"


export const UsersA = () => {
  const { users, deleteUser, updateUser, getUsers } = UsersLogic();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [shouldOpenEditModal, setShouldOpenEditModal] = useState(false);
  const [shouldOpenViewModal, setShouldOpenViewModal] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  getUsers();


  const handleDeleteUser = (userId) => {
    setSelectedUserId(userId);
    setDeleteModalIsOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteUser(selectedUserId);
    setDeleteModalIsOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteModalIsOpen(false);
  };

  const handleEditUser = (userId) => {
    setSelectedUserId(userId);
    setShouldOpenEditModal(true);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShouldOpenViewModal(true);

    
  };

  const handleUpdateUser = async (updatedUser) => {
    await updateUser(updatedUser);
    getUsers(); // Obtenemos la lista actualizada de usuarios después de actualizar un usuario
  };

  return (
    <div className='mivista mt-4'>
      <h1>Usuarios</h1>
      <hr />
      <table className="table table-hover">
        <thead className='thead-dark'>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">UserName</th>
            <th className="text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id || index}>
              <td >{index + 1}</td>
              <td >{user.nombre}</td>
              <td >{user.userName}</td>
              <td>
                <button className="btn btn-success ms-2" onClick={() => handleViewUser(user)}>
                  Ver
                </button>
                <button className="btn btn-warning ms-2" onClick={() => handleEditUser(user._id)}>
                  Editar
                </button>
                <button
                  type="mivista button"
                  className="btn btn-danger ms-2"
                  data-bs-toggle="modal"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmación de eliminación */}
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={handleCancelDelete}
        contentLabel="Confirmar eliminación"
       className='mivista small-modal'
      >
        <h2>Confirmar Eliminación</h2>
        <p>¿Estás seguro de eliminar el usuario?</p>
        <div className=''>
          <button className="mivista btn btn-danger" onClick={handleConfirmDelete}>
            Sí
          </button>
          <button className="mivista btn btn-secondary me-2" onClick={handleCancelDelete}>
            No
          </button>
        </div>
      </Modal>

      {/* Modal de visualización de datos del usuario */}
      {shouldOpenViewModal && selectedUser && (
        <Modal
          isOpen={shouldOpenViewModal}
          onRequestClose={() => setShouldOpenViewModal(false)}
          contentLabel="Datos del usuario"
          style={{
            content: {
              width: '400px',
              height: 'auto',
              margin: 'auto',
            },
          }}
        >
          <h2>Datos del usuario</h2>
          <div className='ver'>
            <div className="mb-3">
              <label>Nombre:ㅤ</label>
              <span>{ selectedUser.nombre}</span>
            </div>
            <div className="mb-3">
              <label>Nombre de usuario:ㅤ</label>
              <span>{selectedUser.userName}</span>
            </div>
          
            <div className="mb-3">
              <label>DPI:ㅤ</label>
              <span>{selectedUser.Dpi}</span>
            </div>
            <div className="mb-3">
              <label>Celular:ㅤ</label>
              <span>{selectedUser.Celular}</span>
            </div>
            <div className="mb-3">
              <label>Dirección:ㅤ </label>
              <span>{selectedUser.direccion}</span>
            </div>
            <div className="mb-3">
              <label>Correo electrónico: ㅤ</label>
              <span>{selectedUser.email}</span>
            </div>
            <div className="mb-3">
              <label>Nombre del trabajo:ㅤ </label>
              <span>{selectedUser.NamefromWork}</span>
            </div>
            <div className="mb-3">
              <label>Ingresos mensuales: ㅤ</label>
              <span>{selectedUser.IngresosMensauales}</span>
            </div>
            <button className="btn btn-danger btn-custom" onClick={() => setShouldOpenViewModal(false)}>
            Cerrar
          </button>
          </div>
        </Modal>
      )}

      {/* Modal de edición */}
      {shouldOpenEditModal && (
        <UpdateUser
          selectedUserId={selectedUserId}
          closeModal={() => setShouldOpenEditModal(false)}
          updateUser={handleUpdateUser}
          getUsers={getUsers}
        />
      )}
    </div>
  );
};

export default UsersA;