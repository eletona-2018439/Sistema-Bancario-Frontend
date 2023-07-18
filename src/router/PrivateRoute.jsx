import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    //Use location sirve para recordar la ultima parte de la ubicacion
    const { pathname, search } = useLocation();
    //console.log(location);

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    //console.log('rerender');

    return (logged)
        ? children
        : <Navigate to='/login' />
}

//Verificamos si esta logeado por mnedio del context, si existe pasa,, si no lo esta se regresa al login
