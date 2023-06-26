import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProfileById } from '../api/profiles'
import { orderKeysOrganize, reorganizeLists } from '../utils/tools'

export const useProfileUpdate = () => {
	const params = useParams()
	const [dataPermissions, setDataPermissions] = useState([])
	const [value, setValue] = useState('1')
	const [formData, setFormData] = useState({
		nombrePerfil: '',
		codigo: '',
		DescripcionPerfil: '',
	})

	useEffect(() => {
		const res = getProfileById(params.id)
		const { codigo, DescripcionPerfil, nombrePerfil, configPermisos } = res.data
		const data = orderKeysOrganize(configPermisos, 'permiso', 'nombre')
		setFormData({ nombrePerfil, codigo, DescripcionPerfil })
		setDataPermissions(data)
	}, [params.id])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const updatePermissions = (e, idConfig) => {
		const originalPermissionsList = reorganizeLists(dataPermissions)
		const newCheckedList = originalPermissionsList.map((permission, id) => {
			const idx = id + 1
			return idx.toString() === idConfig ? { ...permission, esActivo: e.target.checked } : permission
		})
		const data = orderKeysOrganize(newCheckedList, 'permiso', 'nombre')
		setDataPermissions(data)
	}

	return {
		dataPermissions,
		formData,
		handleChange,
		setFormData,
		updatePermissions,
		value,
	}
}
