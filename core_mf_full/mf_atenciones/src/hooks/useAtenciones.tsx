import React, { useEffect, useState} from 'react'
import { clientesApi } from '../api/interaccionesApi'
import Cookies from 'universal-cookie'


export interface ClienteAtenciones {
    apellidoMaterno: string;
	apellidoPaterno: string;
	correoElectronico: string;
	idMdm: string;
	numeroCelular: string;
	nombre: string;
}

export interface Errors {
	error: boolean
	errorMsg: string
}

export interface UseAtencionesHook {
	clienteAtenciones: ClienteAtenciones
	errors: Errors
}

const cookies = new Cookies()

export const useAtenciones = () => {

	//Declaramos Params, headers para peticion axios

    const [token, setToken] = useState('')

    const [client, setClient] = useState({
        apellidoMaterno: "",
        apellidoPaterno: "",
        correoElectronico: "",
        numeroCelular: "",
        nombre: "",
        rfc:"",
        no_tarjeta: '',
        no_cuenta:''
    })

	const [isLoading, setIsLoading] = useState(false)
    const [firstTime, setFirstTime] = useState(true)

    const params = new URLSearchParams();
    params.append('X-LVP-PAG', '1');
    params.append('X-LVP-RPAG', '100');
    params.append('correoElectronico', client.correoElectronico);

    const [data, setData] = useState([])
    const [dataOn, setdataOn] = useState([])
    const [errors, setErrors] = useState({ error: false, errorMsg: '' })

    //Funciones para el control le interacciones y data

	const handleInteracciones = (event, data) => {
        console.log(event)
        console.log(data)
        params.delete('correoElectronico')
        params.append('correoElectronico',data.correoElectronico)
        setClient(client => ({
            ...client,
            ...data
        }))
        handleClientSearch(event)
        // setdataOn(data.filter((item) => item.idAtencion === target.idAtencion))
		// setData(data.filter((item) => item.idAtencion !== target.idAtencion))
	}

    const handleClientInfo = ({ target }) => {
		const { name, value } = target
		setClient({
			...client,
			[name]: value,
		})
	}

	// useEffect(() => {
	// 	socket.on('message', data => {
	// 		console.log('Received information from server:', data)
    //         setData(data)
	// 	})

	// }, [])

    const handleClientSearch = async event => {
		event.preventDefault()
        setIsLoading(true)
        setToken(cookies.get('auth'))
        await clientesApi.get('', {params: params})
        .then((response) => {
            if(response.status === 200) {
                setData(response.data)
                setIsLoading(false)
            }
        })
        .catch((err) => {
            if(err.response.data.codigo == 400){
                setData([])
                setFirstTime(false)
                setIsLoading(false)
            }else if (err.response.data.codigo == 401){
                setFirstTime(true)
                setIsLoading(false)
            }
        })
    }

    return {
        data,
        dataOn,
        client,
        errors,
        handleInteracciones,
        handleClientInfo,
        handleClientSearch,
        isLoading,
        token,
        setToken,
        firstTime,
        setFirstTime //remover cuando se tenga el flujo con API correctamente
    }
}

