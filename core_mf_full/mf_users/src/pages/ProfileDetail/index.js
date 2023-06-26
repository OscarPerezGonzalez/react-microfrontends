import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerDetail, Separator } from '../../Styles/globals'
import { Grid } from '@mui/material'

import { PermissionsData } from '../../components/Profile/PermissionsData'
import { ProfileData } from '../../components/Profile/ProfileData'
import { getProfileById } from '../../api/profiles'
import { NavBackActions } from '../../components/NavBackActions'
import { PATH_PROFILES } from '../../constants/environments'
import { HeaderPath } from '../../components/HeaderPath'

export const ProfileDetail = () => {
	const params = useParams()
	const [profileData, setProfileData] = useState({})
	const [permissionsData, setPermissionsData] = useState([])

	useEffect(() => {
		const res = getProfileById(params.id)
		const { puesto, codigo, DescripcionPerfil, configPermisos } = res.data

		setProfileData({ puesto, codigo, DescripcionPerfil })
		setPermissionsData(configPermisos)
	}, [params.id])

	return (
		<>
			<HeaderPath path1='Configuraciones' path2='Detalle de perfil' />
			<Separator />
			<ContainerDetail>
				<NavBackActions textBack='Detalle de perfil' linkBack={PATH_PROFILES} />
				<Grid container spacing={2}>
					<Grid xs={12} sm={4} md={4} item>
						<ProfileData profileData={profileData} />
					</Grid>
					<Grid xs={12} sm={8} md={8} item>
						<PermissionsData permissionsData={permissionsData} />
					</Grid>
				</Grid>
			</ContainerDetail>
		</>
	)
}
