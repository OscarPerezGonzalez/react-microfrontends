import { Typography } from '@mui/material'
import React, {useContext} from 'react'
import { useAtencionesContext } from '../../../../providers/AtencionesProvider'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './_styless.css'


const TextReturnComponent = () => {
    const history = useHistory();
    const {client} = useAtencionesContext()
    const {firstTime} = useAtencionesContext()

    const handleCreate= (event) => {
        event.preventDefault();
        history.push({pathname: '/plataforma/atenciones/buscar', state: client})
    }

    return (
        <div 
        style={{
            position: "absolute",
            top: "32%",
            left: "12.5%",
            right: "12.5%",
            bottom: 0,
            height: "100%",
          }}>
            <Typography className='my-typography' onClick={handleCreate} justifyContent={'center'} alignContent={'center'} style={{color: 'white'}}>
                <ArrowBackIcon/>Buscar Cliente
            </Typography>
        </div>
    )
}


export default TextReturnComponent