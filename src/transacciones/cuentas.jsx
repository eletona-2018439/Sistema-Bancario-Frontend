import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:8080/api/cuenta";

const SelectCuentasUsuario = ({ value, onChange }) => {
  const [numerosDeCuenta, setNumerosDeCuenta] = useState([]);

  useEffect(() => {
    const getCuentasDelUsuario = async () => {
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

        const response = await axios.get(`${BASE_URL}/NC/${usuarioId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { numerosDeCuenta } = response.data;
        setNumerosDeCuenta(numerosDeCuenta);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al obtener las cuentas del usuario",
        });
      }
    };

    getCuentasDelUsuario();
  }, []);

  return (
    <div>
      <select value={value} onChange={onChange}>
        <option value="">Seleccionar cuenta</option>
        {numerosDeCuenta.map((numeroCuenta, index) => (
          <option key={index} value={numeroCuenta}>
            {numeroCuenta}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCuentasUsuario;
