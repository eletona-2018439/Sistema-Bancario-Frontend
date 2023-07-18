import axios from "axios";
import Swal from "sweetalert2";

const URL = 'http://localhost:8080/api/auth/';

export const apiLogin = async (userName, password) => {
    try {
        const response = await axios.post(`${URL}login`, {
            userName,
            password,
        });
        const token = response.data.token;
        // Guardar token en el almacenamiento local
        if (token) {
          localStorage.setItem("token", token);
        }
        if (response) {
            Swal.fire({
                icon: "success",
                title: "¡ Bienvenido !",
                text: "¡Ha iniciado sesión con exito!",
                confirmButtonText: "Ok",
            });
        }
        return response;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: `${msg}`,
        });
        return false;
    }
};





export const registerUser = async (nombre, userName, password, noCuenta, dpi, celular, email) => {
  try {
    const response = await axios.post(`${URL}/api/user/register`, {
      nombre,
      userName,
      password,
      noCuenta,
      dpi,
      celular,
      email
    });

    if (response.status === 201) {
      // Registro exitoso
      console.log('Usuario registrado exitosamente');
      return true;
    } else {
      // Error en el registro
      console.log('Error al registrar el usuario');
      return false;
    }
  } catch (error) {
    console.log('Error en la solicitud de registro:', error);
    return false;
  }
};