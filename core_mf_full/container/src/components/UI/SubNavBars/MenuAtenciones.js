import * as React from 'react'
import { List, ListItem, ListItemButton, ListItemText, Typography, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

export default function MenuAtenciones() {
	const [openOne, setOpenOne] = React.useState(false)
	const [openTwo, setOpenTwo] = React.useState(false)
	const [openThree, setOpenThree] = React.useState(false)
	const [openFour, setOpenFour] = React.useState(false)
	const [openFive, setOpenFive] = React.useState(false)
	const [openSix, setOpenSix] = React.useState(false)
	const handleClickOne = () => {
		setOpenOne(!openOne)
	}
	const handleClickTwo = () => {
		setOpenTwo(!openTwo)
	}
	const handleClickThree = () => {
		setOpenThree(!openThree)
	}
	const handleClickFour = () => {
		setOpenFour(!openFour)
	}
	const handleClickFive = () => {
		setOpenFive(!openFive)
	}
	const handleClickSix = () => {
		setOpenSix(!openSix)
	}

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
				Atenciones {/* icono al final */}
			</Typography>

			{/* icono y numero
        Abajo va la lista con data
        */}
			<List component='nav' aria-labelledby='nested-list-one' disablePadding>
				<ListItem disablePadding>
					<ListItemButton onClick={handleClickOne}>
						<ListItemText primary='Información del Cliente'></ListItemText>
						{openOne ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openOne} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Datos Generales' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Direcciones' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Mesa de Regalos' />
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
			</List>
			<List component='nav' aria-labelledby='nested-list-two'>
				<ListItem disablePadding>
					<ListItemButton onClick={handleClickTwo}>
						<ListItemText primary='Folios de Seguimiento'></ListItemText>
						{openTwo ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openTwo} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Consultar Folios' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Crear Nuevos Folios' />
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
			</List>
			<List component='nav' aria-labelledby='nested-list-three'>
				<ListItem disablePadding>
					<ListItemButton onClick={handleClickThree}>
						<ListItemText primary='Pedidos'></ListItemText>
						{openThree ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openThree} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Historial de Compras' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Cancelaciones y Devoluciones' />
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
			</List>
			<List component='nav' aria-labelledby='nested-list-four'>
				<ListItem disablePadding>
					<ListItemButton onClick={handleClickFour}>
						<ListItemText primary='Crédito y Tarjetas'></ListItemText>
						{openFour ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openFour} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Tarjetas' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Movimientos de la Cuenta' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Estado de Cuenta' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Detalle de Boleta' />
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
			</List>
			<List component='nav' aria-labelledby='nested-list-five'>
				<ListItem disablePadding>
					<ListItemButton onClick={handleClickFive}>
						<ListItemText primary='Seguros'></ListItemText>
						{openFive ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openFive} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Consulta de Pólizas' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Tickets de atención' />
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
			</List>
			<List component='nav' aria-labelledby='nested-list-six'>
				<ListItem disablePadding>
					<ListItemButton onClick={handleClickSix}>
						<ListItemText primary='Promociones'></ListItemText>
						{openSix ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openSix} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem disablePadding>
							<ListItemButton
							//   onClick={} router a donde se ocupe
							>
								<ListItemText primary='Consulta de Promociones' />
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
			</List>
		</>
	)
}
