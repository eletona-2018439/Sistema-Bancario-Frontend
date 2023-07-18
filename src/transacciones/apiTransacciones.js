import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = 'http://localhost:8080/api/transaccion';

export const getTransaccionesPorCuenta = async (noCuenta) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${BASE_URL}/cuentas/${noCuenta}/transacciones`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener las transacciones de la cuenta',
    });
    return null;
  }
};

export const getTransacciones = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${BASE_URL}/ver`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener las transacciones',
    });
    return null;
  }
};

export const postTransaccion = async (cuentaOrigen, cuentaDestino, monto) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`${BASE_URL}/New`, {
      cuentaOrigen,
      cuentaDestino,
      monto,
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.error,
    });
    return null;
  }
};

export const deleteTransaccion = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.delete(`${BASE_URL}/transaccion/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.error,
    });
    return null;
  }
};

export const getTransaccionesPorUsuario = async () => {
  try {
    const token = localStorage.getItem("token");

    // Dividir el token y obtener la parte necesaria
    const tokenParts = token.split(".");
    const encodedPayload = tokenParts[1];

    // Decodificar el payload en base64
    const decodedPayload = atob(encodedPayload);

    // Convertir el payload decodificado en un objeto JavaScript
    const payload = JSON.parse(decodedPayload);

    // Obtener el ID del usuario del payload
    const usuarioId = payload.uid;

    const response = await axios.get(`${BASE_URL}/usuarios/${usuarioId}/transacciones`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener las transacciones del usuario',
    });
    return null;
  }
};
