import axios from "axios";
import Swal from "sweetalert2";

export const getCuentasDelUsuario = async () => {
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
      const response = await axios.get(`${BASE_URL}/NC/${usuarioId}`);
      const numerosDeCuenta = response.data.map((cuenta) => cuenta.noCuenta);
      return numerosDeCuenta;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al obtener las cuentas del usuario',
      });
      return null;
    }
  };
  