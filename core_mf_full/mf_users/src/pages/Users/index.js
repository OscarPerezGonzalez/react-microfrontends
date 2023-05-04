import React from 'react'
import { Container } from '@mui/material'
import { HeaderUsers } from '../../components/HeaderUsers'
import { useGetDataTable } from '../../hooks/useGetDataTable'
import { TableData } from '../../components/TableData'
import { RowDataUser } from '../../components/RowDataUser'
import { Separator } from '../../Styles/globals'
import { HeaderPath } from '../../components/HeaderPath'

export const Users = () => {
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
			<HeaderPath path1='Configuraciones' path2='Usuarios' />
			<Separator />
			<Container>
				<HeaderUsers />
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
