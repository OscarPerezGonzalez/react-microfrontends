import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BarChartIcon from '@mui/icons-material/BarChart'
import MenuAtenciones from '../SubNavBars/MenuAtenciones'
import MenuConfiguraciones from '../SubNavBars/MenuConfiguraciones'
import MenuReportes from '../SubNavBars/MenuReportes'
import logout from '../../../assets/images/svg/logout.svg'

const drawerWidth = 61

export default function PermanentDrawerLeft({ onSignOut }) {
	const [activo, setActivo] = React.useState('Atenciones')

	const HandleClick = () => {
		onSignOut()
	}

	const renderModule = () => {
		switch (activo) {
			case 'Atenciones':
				return <MenuAtenciones />
			case 'Ajustes':
				return <MenuConfiguraciones />
			case 'Reportes':
				return <MenuReportes />
			default:
				return <MenuAtenciones />
		}
	}

	React.useEffect(() => {
		console.log({ activo })
	})

	return (
		<>
			<Drawer
				variant='permanent'
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => HandleClick('Atenciones')}
								style={{
									justifyContent: 'center',
									borderLeft: activo === 'Atenciones' ? '4px solid #833177' : '4px solid white',
								}}
							>
								<ListItemIcon style={{ justifyContent: 'center' }}>
									<AccountBoxIcon fontSize='large' style={{ color: activo === 'Atenciones' ? '#833177' : '' }} />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => HandleClick('Ajustes')}
								style={{
									justifyContent: 'center',
									borderLeft: activo === 'Ajustes' ? '4px solid #833177' : '4px solid white',
								}}
							>
								<ListItemIcon style={{ justifyContent: 'center' }}>
									<SettingsApplicationsIcon fontSize='large' style={{ color: activo === 'Ajustes' ? '#833177' : '' }} />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => HandleClick('Reportes')}
								style={{
									justifyContent: 'center',
									borderLeft: activo === 'Reportes' ? '4px solid #833177' : '4px solid white',
								}}
							>
								<ListItemIcon style={{ justifyContent: 'center' }}>
									<BarChartIcon
										fontSize='large'
										style={{
											color: activo === 'Reportes' ? 'white' : '',
											backgroundColor: activo === 'Reportes' ? '#833177' : '',
											borderRadius: '20%',
										}}
									/>
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
				<ListItem disablePadding style={{ marginTop: 'auto', marginBottom: '50px' }}>
					<ListItemButton
						onClick={() => HandleClick('Logout')}
						style={{
							justifyContent: 'center',
							borderLeft: activo === 'Logout' ? '4px solid white' : '4px solid white',
						}}
					>
						<ListItemIcon style={{ justifyContent: 'center' }}>
							<img src={logout} alt='Logout'></img>
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
			</Drawer>
			<div
				style={{
					marginTop: '50px',
					width: '244px',
					borderRight: '1px solid #D8D8D8',
					height: '87vh',
					overflow: 'auto',
				}}
			>
				{renderModule()}
			</div>
		</>
	)
}
