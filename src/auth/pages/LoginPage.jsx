import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { apiLogin } from "../api/apiAuthUser";
import './LoginPage.css';
import logo from '..//..//..//public/slogan.jpg';

export const LoginPage = () => {
  const { userName, password, onInputChange, onResetForm } = useForm({
    userName: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Victor Cancinos");
    navigate(lastPath, {
      replace: true,
    });
  };

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const result = await apiLogin(userName, password);
    if (result === false) return null;

    const { nombre, rol } = result.data;
    const lastPath = localStorage.getItem("lastPath") || "/";
    login(nombre, rol);

    // Redirigir a la página correspondiente al rol
    switch (rol) {
      case "ADMIN_ROLE":
        navigate("/usersA", {
          replace: true,
        });
        break;
      case "USER_ROL":
        navigate("/home", {
          replace: true,
        });
        break;
      default:
        navigate(lastPath, {
          replace: true,
        });
    }

    onResetForm();
  };

  return (

    <div className="log" style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="container-login">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={logo} alt="" />
            <div className="text">
              <span className="text-1"></span>
              <br />
              <span className="text-1"></span>
              <span className="text-2"></span>
            </div>
          </div>
          <div className="back">


          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={onSubmitLogin}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Nombre de Usuario"
                      required
                      name="userName"
                      value={userName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      required
                      name="password"
                      value={password}
                      onChange={onInputChange}
                    />
                  </div>

                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};