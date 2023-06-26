import React from 'react'
import GridContainer from '../UI/GridContainer/GridContainer'
import GridItem from '../UI/GridItem/GridItem'
import { Paper } from '@mui/material'

export const SimpleColumns = () => {
	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={12}>
				<Paper
					sx={{
						p: 1,
						margin: 'auto',
						flexGrow: 1,
						border: 0,
					}}
				>
					<GridContainer>
						<GridItem md={4}>Beadcrum</GridItem>
						<GridItem md={4}>Seguimientos|Marca</GridItem>
						<GridItem md={4}>Botón Folio de atención</GridItem>
					</GridContainer>
				</Paper>
			</GridItem>
		</GridContainer>
	)
}
