import { Typography } from '@mui/material'
import React, {useContext} from 'react'
import { useAtencionesContext } from '../../../../providers/AtencionesProvider'
import {useHistory} from 'react-router-dom'


const TextCreateComponent = () => {
    const history = useHistory();
    const {client} = useAtencionesContext()
    const {firstTime} = useAtencionesContext()

    const handleCreate= (event) => {
        event.preventDefault();
        history.push({pathname: '/platform/create', state: client})
    }

    return (
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
            {!firstTime ? 
            <Typography justifyContent={'center'} alignContent={'center'}> {/*If bandera y empty opc 1  if bandera other value opc 2 */}
                Ningún cliente coincide con la búsqueda. Vuelve a ingresar los datos o <span><a href='#' onClick={handleCreate}>crea un nuevo cliente</a></span>
            </Typography>
            :
            <Typography justifyContent={'center'} alignContent={'center'} style={{fontSize: '14px', color: '#D8D8D8'}}>
            Realiza una búsqueda
            </Typography>
}
        </div>
    )
}


export default TextCreateComponent