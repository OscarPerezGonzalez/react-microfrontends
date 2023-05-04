import axios from 'axios'
import { URL_API_AUTH, URL_API_LOGIN, URL_API_PERFILES } from '../constants/environments';

export interface loginData {
	idOperador: string;
	idPerfilOperador: string;
	puesto: string;
	nombre: string;
	apellidoPaterno: string;
	apellidoMaterno: string;
	unidadNegocio: string;
	correoElectronico: string;
}

const BASE_URL_LOGIN = URL_API_LOGIN
const BASE_URL_AUTH = URL_API_AUTH
const BASE_URL_PERFILES = URL_API_PERFILES

export const loginApi = axios.create({
    baseURL: BASE_URL_LOGIN
})

export const perfilApi = axios.create({
	baseURL: BASE_URL_PERFILES
})

export const authApi = axios.create({
	baseURL: BASE_URL_AUTH
})


loginApi.defaults.headers.common["Content-Type"] = "application/json";
perfilApi.defaults.headers.common["Content-Type"] = "application/json";
authApi.defaults.headers.common["Content-Type"] = "application/json";