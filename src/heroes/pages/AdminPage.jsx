import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const API_URL = 'http://localhost:8080/api/user/';
import { useNavigate } from 'react-router-dom';


const generateAccountNumber = () => {
  const randomNum = Math.floor(Math.random() * 10000000000);
  return String(randomNum).padStart(10, '0');
};

export const AdminPage = () => {
  const [ingresosError, setIngresosError] = useState(false);
  const [dpiError, setDpiError] = useState(false); 
  const [celularError, setCelularError] = useState(false); 
  const [formData, setFormData] = useState({
    nombre: '',
    userName: '',
    password: '',
    Dpi: '',
    Celular: '',
    direccion: '',
    email: '',
    NamefromWork: '',
    IngresosMensauales: 0
  });

  const { nombre, userName, password, Dpi, Celular, direccion, email, NamefromWork, IngresosMensauales } = formData;

  const handleChange = (e) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (name === "IngresosMensauales") {
      if (parseInt(value, 10) < 200) {
        setIngresosError(true);
      } else {
        setIngresosError(false);
      }
    }

    if (name === "Dpi" && value.length === 13) {
      setDpiError(false);
    }
  
    if (name === "Celular" && value.length === 8) {
      setCelularError(false);
    }
  


  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Validación de ingreso mensual mínimo (200)
  if (IngresosMensauales < 200) {
    Swal.fire('Error', 'El ingreso mensual debe ser de al menos 200', 'error');
    return;
  }

    // Validación de DPI (13 dígitos)
    if (Dpi.length !== 13) {
      Swal.fire('Error', 'El DPI debe tener exactamente 13 dígitos', 'error');
      return;
    }
  
    // Validación de Celular (8 dígitos)
    if (Celular.length !== 8) {
      Swal.fire('Error', 'El número de celular debe tener exactamente 8 dígitos', 'error');
      return;
    }

    const generatedAccountNumber = generateAccountNumber();

    try {
      const response = await axios.post(`${API_URL}agregar`, {
        nombre,
        userName,
        password,
        Dpi,
        Celular,
        direccion,
        email,
        NamefromWork,
        IngresosMensauales
      });

      if (response.status === 201) {
        // Registro exitoso
        Swal.fire('Registro exitoso', 'Usuario registrado exitosamente', 'success');
      } else {
        // Error en el registro
        Swal.fire('Error', 'Error al registrar el usuario', 'error');
      }
    } catch (error) {
      console.log('Error en la solicitud de registro:', error);
      // Mostrar alerta de error
      Swal.fire('Error', 'Error en la solicitud de registro', 'error');
    }

    // Limpiar el formulario
    setFormData({
      nombre: '',
      userName: '',
      password: '',
      Dpi: '',
      Celular: '',
      direccion: '',
      email: '',
      NamefromWork: '',
      IngresosMensauales: 0
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="container mt-4">
        <h1>Register</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">DPI</label>
            <input
              type="text"
              className="form-control"
              name="Dpi"
              value={Dpi}
              onChange={handleChange}
              maxLength={13}
            />
            {Dpi.length < 13 && (
            <p className="text-danger">El DPI debe tener al menos 13 dígitos.</p>
          )}
          </div>
          <div className="mb-3">
            <label className="form-label">Celular</label>
            <input
              type="text"
              className="form-control"
              name="Celular"
              value={Celular}
              onChange={handleChange}
              maxLength={8}
            />
             {Celular.length < 8 && (
            <p className="text-danger">El número de celular debe tener al menos 8 dígitos.</p>
          )}
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              value={direccion}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre de Trabajo</label>
            <input
              type="text"
              className="form-control"
              name="NamefromWork"
              value={NamefromWork}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingresos Mensuales</label>
            <input
              type="number"
              className="form-control"
              name="IngresosMensauales"
              value={IngresosMensauales}
              onChange={handleChange}
            />
             {ingresosError && <p className="text-danger">El ingreso mensual debe ser de al menos Q200.</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
        <footer className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Bank All Star. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
};