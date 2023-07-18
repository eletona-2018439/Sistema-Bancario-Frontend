import React from 'react'
import { TransaccionForm } from '../../transacciones/Transacciones'
import TransaccionesTabla from '../../transacciones/TablaTransaccion'

export const UserPage = () => {
    return (
        <>
        <TransaccionesTabla></TransaccionesTabla>
        <TransaccionForm></TransaccionForm>
        </>
    )
}
