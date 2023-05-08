import React from 'react'
import { HeaderPath } from '../../components/HeaderPath'
import { ButtonPurple, Separator, TextPurpleMid } from '../../Styles/globals'
import { Container } from '@mui/material'
import { TableData } from '../../components/TableData'
import { useGetDataTable } from '../../hooks/useGetDataTable'
import { RowDataUser } from '../../components/RowDataUser'
import IconGraphic from '../../assets/svg/graphicTag.svg'

export const Reports = () => {
	const {
		handleRequestSort,
		order,
		orderBy,
		visibleRows,
		data,
		rowsPerPage,
		page,
		handleChangePage,
		handleChangeRowsPerPage,
	} = useGetDataTable('users')

	const headCells = [
		{ id: 'nombre', numeric: false, label: 'Nombre' },
		{ id: 'apellidoPaterno', numeric: false, label: 'Apellido paterno' },
		{ id: 'apellidoMaterno', numeric: false, label: 'Apellido materno' },
		{ id: 'idUsuario', numeric: false, label: 'ID' },
		{ id: 'campaña', numeric: false, label: 'Campaña' },
		{ id: 'perfil', numeric: false, label: 'Perfil de Usuario' },
	]

	return (
		<>
			<HeaderPath path1='Reportes' path2='Reporte de usuarios' />
			<Separator />
			<Container>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
					<div style={{ borderRadius: '20px', backgroundColor: '#F5F5F5', padding: '12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
							<img src={IconGraphic} />
							<span style={{ marginLeft: '12px' }}>
								<TextPurpleMid>Usuarios totales</TextPurpleMid>
							</span>
						</div>
						<div style={{ fontSize: '36px', fontWeight: '700', color: '#333333' }}>1647</div>
					</div>
					<div style={{ borderRadius: '20px', backgroundColor: '#F5F5F5', padding: '12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
							<img src={IconGraphic} />
							<span style={{ marginLeft: '12px' }}>
								<TextPurpleMid>Usuarios totales</TextPurpleMid>
							</span>
						</div>
						<div style={{ fontSize: '36px', fontWeight: '700', color: '#333333' }}>1647</div>
					</div>
					<div style={{ borderRadius: '20px', backgroundColor: '#F5F5F5', padding: '12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
							<img src={IconGraphic} />
							<span style={{ marginLeft: '12px' }}>
								<TextPurpleMid>Usuarios totales</TextPurpleMid>
							</span>
						</div>
						<div style={{ fontSize: '36px', fontWeight: '700', color: '#333333' }}>1647</div>
					</div>
					<div style={{ borderRadius: '20px', backgroundColor: '#F5F5F5', padding: '12px' }}>
						<ButtonPurple>Descargar reporte</ButtonPurple>
					</div>
				</div>
				<TableData
					data={data}
					headCells={headCells}
					countCells={headCells.length}
					order={order}
					orderBy={orderBy}
					handleRequestSort={handleRequestSort}
					rowsPerPage={rowsPerPage}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
					page={page}
					rowData={
						visibleRows
							? visibleRows.map((user, index) => <RowDataUser user={user} key={index} countCells={headCells.length} />)
							: null
					}
				/>
			</Container>
		</>
	)
}
