import React from 'react'
import { BodyTable, ContainerData, HeaderTable, TableLayout } from './Styles'
import { TableHeader } from '../TableHeader'
import { Table, TableBody, TablePagination } from '@mui/material'
import { DEFAULT_ROWS_PER_PAGE } from '../../constants/generalApi'

export const TableData = ({
	countCells,
	data,
	headCells,
	order,
	orderBy,
	handleRequestSort,
	rowsPerPage,
	handleChangePage,
	handleChangeRowsPerPage,
	page,
	rowData,
}) => {
	return (
		<>
			<ContainerData>
				<HeaderTable>
					<Table>
						<TableHeader
							countCells={countCells}
							headCells={headCells}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
						/>
					</Table>
				</HeaderTable>
				<BodyTable>
					<TableLayout>
						<TableBody>{rowData}</TableBody>
					</TableLayout>
				</BodyTable>
			</ContainerData>

			<TablePagination
				rowsPerPageOptions={[DEFAULT_ROWS_PER_PAGE, DEFAULT_ROWS_PER_PAGE * 2, DEFAULT_ROWS_PER_PAGE * 3]}
				component='div'
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelRowsPerPage={'Filas por página'}
			/>
		</>
	)
}
