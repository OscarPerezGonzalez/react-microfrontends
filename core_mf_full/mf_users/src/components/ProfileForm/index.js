import { Grid, Typography } from '@mui/material'
import React from 'react'
import { InputText, SimpleFlex } from '../../Styles/globals'
import { CardForm } from './Styles'

export const ProfileForm = ({ formData, setFormData }) => {
	return (
		<CardForm>
			<Grid container>
				<Grid item xs={12} sm={5} md={5}>
					<SimpleFlex>
						<Typography>Nombre del perfil:</Typography>
						<InputText
							type='text'
							name='nombrePerfil'
							placeholder='Nombre del perfil'
							value={formData.nombrePerfil}
							onChange={e => setFormData({ ...formData, nombrePerfil: e.target.value })}
						/>
					</SimpleFlex>
				</Grid>
				<Grid item xs={12} sm={3} md={3}>
					<SimpleFlex>
						<Typography>Código:</Typography>
						<InputText
							type='text'
							name='codigo'
							placeholder='Código'
							value={formData.codigo}
							onChange={e => setFormData({ ...formData, codigo: e.target.value })}
						/>
					</SimpleFlex>
				</Grid>
				<Grid item xs={12} sm={4} md={4}></Grid>
				<Grid item xs={12} sm={12} md={12}>
					<SimpleFlex>
						<Typography>Descripción:</Typography>
						<InputText
							type='text'
							name='DescripcionPerfil'
							placeholder='Descripción'
							value={formData.DescripcionPerfil}
							onChange={e => setFormData({ ...formData, DescripcionPerfil: e.target.value })}
						/>
					</SimpleFlex>
				</Grid>
			</Grid>
		</CardForm>
	)
}
