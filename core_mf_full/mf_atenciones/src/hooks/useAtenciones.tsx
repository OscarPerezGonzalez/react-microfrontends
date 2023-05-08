import React, { useEffect, useState} from 'react'
import { apicreate, clientesApi, headers_auth_create } from '../api/interaccionesApi'
import Cookies from 'universal-cookie'
import { KEY, SECRET } from '../constants/environments';


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
    severity: string
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

    const params_search = new URLSearchParams();
    params_search.append('X-LVP-PAG', '1');
    params_search.append('X-LVP-RPAG', '100');
    params_search.append('correoElectronico', client.correoElectronico);

    const [data, setData] = useState([])
    const [dataOn, setdataOn] = useState([])
    const [errors, setErrors] = useState({ error: false, severity: "error", errorMsg: '' })

    //Funciones para el control le interacciones y data

    const errorResp = err => {
		if (err.response) {
			setErrors({ error: true, severity: 'error', errorMsg: 'Error ' + err.response.data.codigo + ' ' + err.response.data.descripcion })
		} else if (err.request) {
			setErrors({
				error: true,
                severity: 'error',
				errorMsg: 'Error al Ingresar, Intente Nuevamente',
			})
		}
	}

	const handleInteracciones = (event, data) => {
        console.log(event)
        console.log(data)
        params_search.delete('correoElectronico')
        params_search.append('correoElectronico',data.correoElectronico)
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
        await clientesApi.get('',{headers: {Authorization: `Bearer ${cookies.get('auth')}`} ,params: params_search})
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
                errorResp(err)
            }else if(err.respose.data.codigo != 400){
                errorResp(err)
            }
        })
    }

    const bodyCreate = {
        apellidoMaterno: client.apellidoMaterno,
        apellidoPaterno: client.apellidoPaterno,
        correoElectronico: client.correoElectronico,
        idTipoCliente: "02",
        codigoOrganizacion: "LIVERPOOL",
        telefono: {
            numero: client.numeroCelular,
            alias: "CELULAR"
        },
        primerNombre: client.nombre.split(" ")[0],
        segundoNombre: client.nombre.split(" ")[1] || ""
    }

    const handleClientCreate = async event => {
		event.preventDefault()
        setIsLoading(true)
        await apicreate.get('',{headers: headers_auth_create, auth: {username: KEY, password: SECRET}})
        .then((response) => {
            if (response.status === 200) {
                clientesApi
                .post('', bodyCreate, {headers: {Authorization: `Bearer ${response.data.access_token}`} })
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        setIsLoading(false)
                        setErrors({ error: true, severity: "success", errorMsg: response.data.mensaje })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    if (err.response.data.codigo == 400) {
                        setIsLoading(false)
                        errorResp(err)
                    } else if (err.response.data.codigo == 401) {
                        setIsLoading(false)
                        errorResp(err)
                    } else if (err.response.data.codigo != 400) {
                        setIsLoading(false)
                        errorResp(err)
                    }
                })
            }
        })
        .catch ((err) => {
            setIsLoading(false)
            errorResp(err)
        })
    }

    return {
        data,
        dataOn,
        client,
        errors,
        setErrors,
        handleInteracciones,
        handleClientInfo,
        handleClientSearch,
        isLoading,
        token,
        setToken,
        firstTime,
        setFirstTime,
        handleClientCreate
    }
}

