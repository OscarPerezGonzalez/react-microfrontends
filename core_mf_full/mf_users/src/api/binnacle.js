// import { API_USERS } from '../constants/environments'
// import axios from 'axios'
import { reportes } from './mocks/mock_reporte'

export const getUsersFromBinnacle = () => {
	// console.log('API_USERS', API_USERS)
	/* const myHeaders = new Headers()
	myHeaders.append('Authorization', 'Bearer F1fmZXwKsmruvAC4IbycwsJcWo7Y')

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		redirect: 'follow',
	}

	fetch('https://devapigee.liverpool.com.mx/api/v1/bitacora/usuarios/_reporte', requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error))
    */
	/* const data = JSON.stringify({
		primerNombre: 'IVAN',
		apellidoPaterno: 'VAZQUEZ',
		apellidoMaterno: 'DIAZ',
	})

	const config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: 'https://devapigee.liverpool.com.mx/api/v1/tickets/_buscar',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ekGxFdxnmGykAXLmF0GCl9q1lpHF',
			'X-LVP-FNT': 'LV-003',
			'X-LVP-ORG': 'LV-000',
			'X-LVP-USR': 'jhernandez', // httpsAgent,
		},

		data,
	}

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data))
		})
		.catch(function (error) {
			console.log(error)
		})
		*/

	return {
		data: reportes,
	}
}
