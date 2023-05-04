import React from 'react'
import { Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const HeaderUsers = () => {
	return (
		<header style={{ margin: '18px 0' }}>
			<Grid container>
				<Grid item xs={12} sm={6} md={6}>
					<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<Typography>Todos los usuarios</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<div style={{ display: 'flex', justifyContent: 'end' }}>
						<Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
							<InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search google maps' }} />
							<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
								<SearchIcon />
							</IconButton>
						</Paper>
					</div>
				</Grid>
			</Grid>
		</header>
	)
}
