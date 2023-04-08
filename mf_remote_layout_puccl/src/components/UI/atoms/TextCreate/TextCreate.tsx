import { Typography } from '@mui/material'
import React from 'react'


const TextCreateComponent = () => {

    return (
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <Typography justifyContent={'center'} alignContent={'center'}> {/*If bandera y empty opc 1  if bandera other value opc 2 */}
                {/* Ningún cliente coincide con la búsqueda. Vuelve a ingresar los datos o <span><a href="#">crea un nuevo cliente</a></span> */}
            </Typography>
            <Typography justifyContent={'center'} alignContent={'center'} style={{fontSize: '14px', color: '#D8D8D8'}}>
            Realiza una búsqueda
            </Typography>
        </div>
    )
}


export default TextCreateComponent