import * as React from 'react'
import { Button, Divider, Typography } from '@mui/material'

export default function MenuConfiguraciones() {
	return (
		<>
			<Typography
				sx={{
					typography: theme => theme.typography.menu_title,
					paddingTop: '30px',
					paddingBottom: '30px',
					paddingLeft: '10px',
				}}
				noWrap
				component='div'
			>
				Configuraciones
			</Typography>
			<Button href='/plataforma/configuracion/usuarios' sx={{ typography: theme => theme.typography.name, color: 'black', justifyContent: 'initial' }} fullWidth>
				{' '}
				Usuarios
			</Button>
			<Divider></Divider>
			<Button href='/plataforma/configuracion/perfiles' sx={{ typography: theme => theme.typography.name, color: 'black', justifyContent: 'initial' }} fullWidth>
				{' '}
				Perfiles
			</Button>
			<Divider></Divider>
			<Button sx={{ typography: theme => theme.typography.name, color: 'black', justifyContent: 'initial' }} fullWidth>
				{' '}
				Catálogos
			</Button>
			<Divider></Divider>
		</>
	)
}
