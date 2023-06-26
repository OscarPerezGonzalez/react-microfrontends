import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { ContainerDetail, Separator } from '../../Styles/globals'
import { MiniDataUser } from '../../components/DataUser/MiniDataUser'
import { ResumeDataUser } from '../../components/DataUser/ResumeDataUser'
import { NavBackActions } from '../../components/NavBackActions'
import { PATH_USERS } from '../../constants/environments'
import { HeaderPath } from '../../components/HeaderPath'

export const UserDetail = ({ location }) => {
	const [miniData, setMiniData] = useState({})
	const [resumeData, setResumeData] = useState({})

	useEffect(() => {
		const { user } = location
		if (user) {
			const {
				idUsuario,
				creationDate,
				creationTo,
				lastConection,
				nombre,
				apellidoPaterno,
				apellidoMaterno,
				numeroEmpleado,
				correoElectronico,
				perfil,
				puesto,
				ubicacion,
				unidadNegocio,
				campaña,
				canalAsignado,
			} = user
			setMiniData({ idUsuario, creationDate, creationTo, lastConection })
			setResumeData({
				nombre,
				apellidoPaterno,
				apellidoMaterno,
				numeroEmpleado,
				correoElectronico,
				perfil,
				puesto,
				ubicacion,
				unidadNegocio,
				campaña,
				canalAsignado,
			})
		} else {
			window.location.href = PATH_USERS
		}
	}, [location])

	return (
		<>
			<HeaderPath path1='Configuraciones' path2='Usuarios' />
			<Separator />
			<ContainerDetail>
				<NavBackActions textBack='Información de usuario' linkBack={PATH_USERS} />
				<Grid container spacing={2}>
					<Grid xs={12} sm={4} md={4} item>
						<MiniDataUser miniData={miniData} />
					</Grid>
					<Grid xs={12} sm={8} md={8} item>
						<ResumeDataUser resumeData={resumeData} />
					</Grid>
				</Grid>
			</ContainerDetail>
		</>
	)
}
