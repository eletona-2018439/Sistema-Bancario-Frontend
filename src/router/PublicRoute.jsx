import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    //console.log('Ruta pública');

    return (!logged)
        ? children
        : <Navigate to='/marvel' />
}