import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";

import { AdminPage } from "../pages/AdminPage";
import { UserPage } from "../pages/UserPage";
import { UsersA } from "../pages/UsersA";
import { CuentasA } from "../pages/CuentasA";
import { UpdateUser } from "../pages/UpdateUser";
import CuentaPage from "../pages/CuentaPage";
import { HomePage } from "../pages/HomePage";
import Cuentas from "../pages/cuentas";


export const HeroesRoutes = () => {

    const rol = JSON.parse(localStorage.getItem('rol'));

    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>


                    {/* Rutas de Admin */}
                    <Route path="admin"
                        element={
                            (rol === 'ADMIN_ROLE') ?
                                <AdminPage />
                                :
                                <Navigate to='/search' />

                        }
                    />

                    <Route path="usersA"
                        element={
                            (rol === 'ADMIN_ROLE') ?
                                <UsersA />
                                :
                                <Navigate to='/search' />

                        }
                    />

                    <Route path="cuentasA"
                        element={
                            (rol === 'ADMIN_ROLE') ?
                                <CuentasA />
                                :
                                <Navigate to='/search' />

                        }
                    />

                    <Route path="UpdateUser"
                        element={
                            (rol === 'ADMIN_ROLE') ?
                                <UpdateUser />
                                :
                                <Navigate to='/search' />

                        }
                    />




                    {/* Rutas de User */}
                    <Route path="home"
                        element={
                            (rol === 'USER_ROL') ?
                                <HomePage />
                                :
                                <Navigate to='/search' />
                        }
                    />
                    <Route path="cuenta"
                        element={
                            (rol === 'USER_ROL') ?
                                <Cuentas/>
                                :
                                <Navigate to='/search' />
                        }
                    />

                    <Route path="user"
                        element={
                            (rol === 'USER_ROL') ?

                                <UserPage />
                                :
                                <Navigate to='/search' />
                        }
                    />

                    {/* Search, Hero by ID */}

                </Routes>
            </div>
        </>
    )
}