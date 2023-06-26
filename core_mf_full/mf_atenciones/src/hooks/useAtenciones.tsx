import React, { useEffect, useState} from 'react'
import { apicreate, clientesApi, headers_auth, headers_auth_create } from '../api/interaccionesApi'
import Cookies from 'universal-cookie'
import { KEY, SECRET, URL_API_AUTH } from '../constants/environments';
import axios from 'axios';


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

    const [cookie_auth, setCookieAuth] = useState(cookies.get('auth') || '')
	const [isLoading, setIsLoading] = useState(false)
    const [firstTime, setFirstTime] = useState(true)

    const params_search = new URLSearchParams();
    params_search.append('X-LVP-PAG', '1');
    params_search.append('X-LVP-RPAG', '100');
    params_search.append('correoElectronico', client.correoElectronico);
    params_search.append('apellidoMaterno', client.apellidoMaterno)
    params_search.append('apellidoPaterno', client.apellidoPaterno)
    params_search.append('numeroCelular', client.numeroCelular)
    params_search.append('primerNombre', client.nombre.split(" ")[0] || "")
    params_search.append('segundoNombre', client.nombre.split(" ")[1] || "")

    const [data, setData] = useState([])
    const [dataOn, setdataOn] = useState([])
    const [errors, setErrors] = useState({ error: false, severity: "error", errorMsg: '' })

    //Funciones para el control le interacciones y data

    const errorResp = err => {
		if (err.response) {
            if (err.response.data.descripcion.includes('tres(3)')){
                setErrors({ error: true, severity: 'error', errorMsg: 'Error ' + err.response.data.codigo +
                 ' Debe especificar valores distintos a RFC, No. de Cuenta y No. de Tarjeta' })
            }
            else if(err.response.data.descripcion.includes('No se encontró ningún registro')){
            }else{
                setErrors({ error: true, severity: 'error', errorMsg: 'Error ' + err.response.data.codigo + ' ' +  err.response.data.descripcion })
            }
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
        // setClient(client => ({
        //     ...client,
        //     ...data
        // })) ver el objeto que nos va a entregar la llamada y conforme a eso hacer la busqueda se hará una distinta busqueda 
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

    const removeEmpty = () => {
        for (const [key, value] of params_search.entries()) {
            if (value === "") {
              params_search.delete(key);
            }
          }
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
        removeEmpty()
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
                errorResp(err)
            }else if (err.response.data.codigo == 401){
                setFirstTime(true)
                setIsLoading(false)
                errorResp(err)
            }else if(err.response.data.codigo != 400){
                setIsLoading(false)
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
        primerNombre: client.nombre.split(" ")[0] || "",
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
                    if (response.status === 200) {
                        setIsLoading(false)
                        setErrors({ error: true, severity: "success", errorMsg: response.data.mensaje })
                    }
                })
                .catch((err) => {
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
        firstTime,
        setFirstTime,
        handleClientCreate
    }
}

