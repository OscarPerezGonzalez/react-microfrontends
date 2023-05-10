import { io } from "socket.io-client";
import { GRANT_TYPE, KEY, SCOPE, SECRET, URL_API_AUTH, URL_API_CLIENTES, URL_API_INTERACCIONES, SCOPE_CREATE } from "../constants/environments";
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const BASE_URL_CLIENTES = URL_API_CLIENTES
export const headers_auth ={
	scope: SCOPE,
	grant_type: GRANT_TYPE,
}

export const headers_auth_create ={
	scope: SCOPE_CREATE,
	grant_type: GRANT_TYPE,
}


export const clientesApi = axios.create({
    baseURL: BASE_URL_CLIENTES
})

export const apicreate = axios.create({
	baseURL: URL_API_AUTH
})

clientesApi.interceptors.response.use(
	response => {
		return response
	},
	function (error) {
		const originalRequest = error.config;
		if(error.response.status === 401){
			return axios
			.get(URL_API_AUTH,
				{headers: 
				headers_auth,
				auth: {username: KEY, password: SECRET}})
			.then((response) => {
				if(response.status === 200){
					cookies.set('auth', response.data.access_token, { maxAge: 8 * 3600 });
					originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
					return axios(originalRequest);
			}})
			.catch((err) => {
				return Promise.reject(err)
			});
		}
		return Promise.reject(error)
	}
)

clientesApi.defaults.headers.common["Content-Type"] = "application/json";
clientesApi.defaults.headers.common['X-LVP-ORG'] = 'LV-000';
clientesApi.defaults.headers.common['X-LVP-FNT'] = 'LV-001';
clientesApi.defaults.headers.common['X-LVP-USR'] = 'emorales'//cookies.get('user')

// export const socket = io(URL_API_INTERACCIONES);