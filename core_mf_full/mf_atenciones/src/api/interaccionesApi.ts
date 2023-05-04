import { io } from "socket.io-client";
import { GRANT_TYPE, KEY, SCOPE, SECRET, URL_API_AUTH, URL_API_CLIENTES, URL_API_INTERACCIONES } from "../constants/environments";
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const BASE_URL_CLIENTES = URL_API_CLIENTES
const headers_auth ={
	scope: SCOPE,
	grant_type: GRANT_TYPE,
}


export const clientesApi = axios.create({
    baseURL: BASE_URL_CLIENTES
})

clientesApi.interceptors.request.use(
	async config => {
	  const token = await cookies.get('auth')
	  config.headers.authorization = `Bearer ${token}`;
	  return config;
	},
	error => {
	  Promise.reject(error);
	}
  );

clientesApi.interceptors.response.use(
	(response) => {
		return response
	},
	async (error) => {
		if(error.response.status === 401){
			await axios
			.get(URL_API_AUTH,
				{headers: 
				headers_auth,
				auth: {username: KEY, password: SECRET}})
			.then((response) => {
				if(response.status === 200){
					console.log('edite cookie');
					cookies.set('auth', response.data.access_token, { maxAge: 8 * 3600 });
					clientesApi.defaults.headers.common[
						"Authorization"
					  ] = `Bearer ${response.data.access_token}`;
				}
			})
			.catch((err) => {
				return Promise.reject(err)
			});
			return axios(error.config)
		}
		return Promise.reject(error)
	}
)

clientesApi.defaults.headers.common["Content-Type"] = "application/json";
clientesApi.defaults.headers.common['X-LVP-ORG'] = 'LV-000';
clientesApi.defaults.headers.common['X-LVP-FNT'] = 'LV-001';
clientesApi.defaults.headers.common['X-LVP-USR'] = 'alan@hernandez.com.mx';
clientesApi.defaults.headers.common["Authorization"] = `Bearer ${cookies.get('auth')}`;

// export const socket = io(URL_API_INTERACCIONES);