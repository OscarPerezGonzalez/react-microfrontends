// import { API_PERMISSIONS } from '../constants/environments'
// import axios from 'axios'
import { profiles, profileById } from './mocks/mock_profiles'

export const getProfiles = () => {
	// console.log('API_USERS', API_PERMISSIONS)

	/*
  const config = {
		method: 'get',
		maxBodyLength: Infinity,
		url: 'https://devapigee.liverpool.com.mx/api/v1/perfiles',
		headers: {
			Authorization: 'Bearer szxJDvK1pcnyYGrP1ARxeLOE8Mks',
		},
	}

	axios
		.request(config)
		.then(response => {
			console.log(JSON.stringify(response.data))
		})
		.catch(error => {
			console.log(error)
		}) */

	return {
		data: profiles,
	}
}

export const getProfileById = id => {
	return {
		data: profileById,
	}
}
