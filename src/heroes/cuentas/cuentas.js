import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = 'http://localhost:8080/api/cuenta';

export const getCuentas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get`);
    return response.data.cuentas;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener las cuentas',
    });
    return null;
  }
};

export const getCuentasByUsuario = async (usuarioId) => {
  try {
    const response = await axios.get(`${BASE_URL}/usuario/${usuarioId}`);
    return response.data.cuentas;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener las cuentas del usuario',
    });
    return null;
  }
};

export const createCuenta = async (tipoCuenta, saldo, usuario) => {
  try {
    let randomNoCuenta;
    let existingCuenta;

    do {
      randomNoCuenta = Math.floor(Math.random() * 9000000000) + 1000000000;
      existingCuenta = await axios.get(`${BASE_URL}/${randomNoCuenta}`);
    } while (existingCuenta);

    const cuentaData = {
      noCuenta: randomNoCuenta.toString(),
      tipoCuenta,
      saldo,
      usuario
    };

    const response = await axios.post(BASE_URL, cuentaData);
    return response.data.cuentaDB;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al crear la cuenta',
    });
    return null;
  }
};

export const updateCuenta = async (id, cuentaData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, cuentaData);
    return response.data.cuentaActualizada;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al actualizar la cuenta',
    });
    return null;
  }
};

export const deleteCuenta = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data.cuentaEliminada;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al eliminar la cuenta',
    });
    return null;
  }
};

export default {
    getCuentasByUsuario,
    createCuenta,
    updateCuenta,
    deleteCuenta
  };