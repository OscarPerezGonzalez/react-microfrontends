import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import { useGetDataTable } from '../../hooks/useGetDataTable'
import { TableData } from '../../components/TableData'
import { RowDataProfiles } from '../../components/RowDataProfiles'
import { ButtonPurple, Separator, TextBlackXl } from '../../Styles/globals'
import { Navigation } from './Styles'
import IconSeparator from '../../assets/svg/separator.svg'
import { AddProfile } from '../../components/AddProfile'

export const Profiles = () => {
	const headCells = [
		{ id: 'nombrePerfil', numeric: false, label: 'Nombre del Perfil' },
		{ id: 'puesto', numeric: false, label: 'Puesto' },
		{ id: 'codigo', numeric: false, label: 'Código' },
		{ id: null, numeric: false, label: 'Acciones' },
	]

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
	} = useGetDataTable('profiles')
	const [modalIsOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	const createProfile = () => {
		setIsOpen(false)
	}

	return (
		<>
			<AddProfile modalIsOpen={modalIsOpen} closeModal={closeModal} createProfile={createProfile} />
			<Container>
				<Navigation>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<TextBlackXl>Configuraciones</TextBlackXl>
						<img src={IconSeparator} style={{ margin: '0 18px' }} />
						<TextBlackXl>Perfiles</TextBlackXl>
					</div>
					<ButtonPurple type='submit' onClick={openModal}>
						Agregar nuevo perfil
					</ButtonPurple>
				</Navigation>
			</Container>
			<Separator />
			<Container style={{ marginTop: '20px' }}>
				<Typography>Todos los usuarios</Typography>
				<TableData
					countCells={headCells.length}
					data={data}
					headCells={headCells}
					order={order}
					orderBy={orderBy}
					handleRequestSort={handleRequestSort}
					rowsPerPage={rowsPerPage}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
					page={page}
					rowData={
						visibleRows
							? visibleRows.map((profile, index) => (
									<RowDataProfiles profile={profile} key={index} countCells={headCells.length} />
							  ))
							: null
					}
				/>
			</Container>
		</>
	)
}
