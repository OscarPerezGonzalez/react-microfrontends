import React from 'react'
import GridContainer from '../UI/GridContainer/GridContainer'
import { Paper } from '@mui/material'
import GridItem from '../UI/GridItem/GridItem'
import asesoTelefonico from '../../assets/images/svg/Asesor_Telefónico.svg'
import lapiz from '../../assets/images/svg/lapiz.svg'

export const AssociateData = () => {
	return (
		<GridContainer xs={12} sm={12} md={12}>
			<Paper
				sx={{
					p: 1,
					margin: 'auto',
					flexGrow: 1,
					border: 0,
					backgroundColor: theme => theme.palette.secondary.main,
				}}
			>
				<GridContainer style={{ marginTop: '10px' }}>
					<GridItem md={-1}>
						<img style={{ paddingRight: '10px' }} src={asesoTelefonico} alt='Asesor_Telefonico' />
					</GridItem>
					<GridItem md={7}>
						<GridContainer sx={{ typography: theme => theme.typography.main_text }}>
							<GridItem md={2.5} sx={{ typography: theme => theme.typography.name }} color='#833177'>
								Oscar Pérez González
							</GridItem>
							<GridItem md={9} style={{ marginTop: '2px' }}>
								Acesor CCL
							</GridItem>
							<GridItem md={2.5} style={{ marginTop: '5px' }}>
								<strong>ID Avaya:</strong> 123456 <img src={lapiz} alt='lapiz' />
							</GridItem>
							<GridItem md={2.5} style={{ marginTop: '5px' }}>
								<strong>Skill Activo:</strong> Seguimientos
							</GridItem>
							<GridItem md={2} style={{ marginTop: '5px' }}>
								<strong>Auxiliar:</strong> <span className='text-auxiliar'>Activo</span>
							</GridItem>
						</GridContainer>
					</GridItem>
				</GridContainer>
			</Paper>
		</GridContainer>
	)
}
