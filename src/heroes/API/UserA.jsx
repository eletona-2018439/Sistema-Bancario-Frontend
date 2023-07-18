import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const UsersLogic = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user/mostrarUser');
      const { data } = response;
      setUsers(data.listaUsers);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

 

const deleteUser = async (userId) => {
  try {
    const rol = JSON.parse(localStorage.getItem('rol'));

    if (rol === 'ADMIN_ROLE') {
      await axios.delete(`http://localhost:8080/api/user/eliminar/${userId}`);
      getUsers();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'No tienes el rol correspondiente para efectuar la operación.',
      });
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
  }
};


  const updateUser = async (updatedUser) => {
    try {
      await axios.put(`http://localhost:8080/api/user/${updatedUser.id}`, updatedUser);
      getUsers();
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return {
    users,
    deleteUser,
    updateUser,
    getUsers
  };
};

export default UsersLogic;