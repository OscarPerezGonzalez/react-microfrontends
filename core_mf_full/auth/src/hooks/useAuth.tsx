import { useState } from 'react'
import { authApi, loginApi, loginData, perfilApi } from '../api/authApi'
// import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'
import { API_KEY, SCOPE, GRANT_TYPE, KEY, SECRET } from '../constants/environments'
import { useHistory } from "react-router-dom";

export interface UserLogin {
	user: string
	password: string
}

export interface Errors {
	error: boolean
	errorMsg: string
}

export interface UseAuthHook {
	isLogin: boolean
	userLogin: UserLogin
	errors: Errors
}

const cookies = new Cookies()

export const useAuth = () => {
	//Declaramos Navigate para cambiar de Pagina
	// const navigate = useNavigate();
	const history = useHistory();

	const [userLogin, setUserLogin] = useState({
		usuario: '',
		contraseña: '',
	})

	const [idAvaya, setIdAvaya] = useState('')

	//Declaramos Params, headers para peticion axios
	const headers_login = {
		// 'X-LVP-ORG': 'LV-000',
		// 'X-LVP-FNT': 'LV-013',
		// 'X-LVP-USR': userLogin.usuario,
		'x-api-key': API_KEY,
	}

	const headers_proveedor = {
		'x-api-key': API_KEY
	}

	const headers_auth ={
		scope: SCOPE,
		grant_type: GRANT_TYPE,
	}

	//Declaramos VAriables que usaremos para context y uso de API y FORMIK
	const [errors, setErrors] = useState({ error: false, errorMsg: '' })
	const [respLogin, setRespLogin] = useState<loginData>({
		idOperador: "",
		idPerfilOperador: "",
		puesto: "",
		nombre: "",
		apellidoPaterno: "",
		apellidoMaterno: "",
		unidadNegocio: "",
		correoElectronico: ""
	})

	const [isLogin, setIsLogin] = useState(false)

	const [isLoading, setIsLoading] = useState(false)

	//Funciones para el control le login y mensajes
	const handleUserLogin = ({ target }) => {
		const { name, value } = target
		setUserLogin({
			...userLogin,
			[name]: value,
		})
	}

	const handleIdAvaya = ({ target }) => {
		const { value } = target
		setIdAvaya(value)
	}

	//Mandamos a llamar a la API y dependiendo de eso procedemos a mandar id o mostrar error en caso de que no llegue la peticion
	const handleProveedor = async event => {
		event.preventDefault()
		const data = {
			"idOperador": respLogin.idOperador,
			"unidadNegocio": respLogin.unidadNegocio,
			"idPerfilOperador": respLogin.idPerfilOperador,
			"idSucursal": "SUC-001",
			"canalAtencion": "CH-001",
			"idAvaya": idAvaya,
			"fechaInicioAtenciones": new Date()
		}
		await loginApi.post('/',data, {headers: headers_proveedor})
		.then((response) => {
			if (response.status === 200) {
				cookies.set('idAvaya',response.data.idAvaya)
				history.push("/platform/search");
			}
		}).catch((err) => {
			errorResp(err)
		})
	}

	const errorResp = err => {
		if (err.response) {
			setErrors({ error: true, errorMsg: 'Error ' + err.response.data.codigo + ' ' + err.response.data.descripcion })
		} else if (err.request) {
			setErrors({
				error: true,
				errorMsg: 'Error al Ingresar, Intente Nuevamente',
			})
		}
	}

	const apiPerfil = async (auth, idOperador) => {
		await perfilApi
			.get(`/${idOperador}`, { headers: {Authorization: 'Bearer ' + auth} })
			.then((response) => {
				if (response.status === 200) {
					cookies.set('isLogin', true, { maxAge: 8 * 3600 })
					cookies.set('permisos_liv', JSON.stringify(response.data), { maxAge: 8 * 3600 })
					setIsLogin(true)
				}
			})
			.catch((err) => {
				errorResp(err)
				setIsLoading(false)
				cookies.set('isLogin', false)
			})
	}

	const apiAuth = async (idOperador) => {
		await authApi
			.get('', {headers: headers_auth, auth: {username: KEY, password: SECRET}})
			.then((response) => {
				if (response.status === 200) {
					cookies.set('auth', response.data.access_token, { maxAge: 8 * 3600 })
					const auth= response.data.access_token
					apiPerfil(auth, idOperador)
				}
			})
			.catch((err) => {
				errorResp(err)
				setIsLoading(false)
				cookies.set('isLogin', false)
			})
	}

	const config = {
		method: 'post',

		maxBodyLength: Infinity,

		url: 'https://devapigee.liverpool.com.mx/api/v1/atenciones/login',

		headers: {
			'Content-Type': 'application/json',

			'x-api-key': '7eR8fTTlM4ZCfCUbepJLQX5DE5tyfMfSjUyodMQ02QpzSN2F', // scope: "READ", // grant_type: "client_credentials", // Authorization: //   "Basic TGVzR3NINnpGbW1qdUMzRkhSSGE2Z3dJZ2oxRllmaDJNc05YWGdVaUFETExob3lTOjB1ZHZMVmpPekRLSDRodVlQbFlhNngxTjdUbm5kM1NRRXBpclFGUzkxREdNOWNpMXVnRUFRa2d1M2pXbTdUQ0c=",
		},
	}

	//Mandamos a llamar a la API y dependiendo de eso procedemos a loguearnos o mostrar error
	const handleLogin = async event => {
		event.preventDefault()
		setIsLoading(true)
		await loginApi
			.post<loginData>(
				'/login',
				userLogin,
				{ headers: headers_login },
			)
			.then((response) => {
				if (response.status === 200) {
					setRespLogin(response.data)
					cookies.set('user', userLogin.usuario)
					apiAuth(response.data.idPerfilOperador)
					setIsLoading(false)
				}
			})
			.catch((err) => {
				if (err.response) {
					setErrors({ error: true, errorMsg: err.response.data })
				} else if (err.request) {
					setErrors({
						error: true,
						errorMsg: 'Error al Ingresar, Intente Nuevamente',
					})
				}
				setIsLoading(false)
				cookies.set('isLogin', false)
			})
	}

	return {
		errors,
		handleLogin,
		handleUserLogin,
		isLogin,
		userLogin,
		isLoading,
		setErrors,
		handleProveedor,
		handleIdAvaya,
		idAvaya
	}
}
