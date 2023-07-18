//Sirve para poveer la info a toda la app

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const rol = JSON.parse(localStorage.getItem('rol'));

    return {
        logged: !!user,
        user: user,
        rol: rol
    }
}

export const AuthProvider = ({ children }) => {

    //Reducer maneja los estados para el control
    const [authState, dispatch] = useReducer(authReducer, { }, init);


    const login = (name = '', rol = '') => {
        const user = { id: 'ABC', name, rol}
        const action = {type: types.login, payload: user }
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('rol', JSON.stringify(rol));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        const action = {type: types.logout}
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,

            //Methods
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}
