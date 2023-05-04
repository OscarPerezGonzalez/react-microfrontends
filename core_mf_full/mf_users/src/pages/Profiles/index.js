import React from 'react'
import { Container, Typography } from '@mui/material'
import Modal from 'react-modal'
import { useGetDataTable } from '../../hooks/useGetDataTable'
import { TableData } from '../../components/TableData'
import { RowDataProfiles } from '../../components/RowDataProfiles'
import { ButtonPurple, Separator, TextBlack16, TextBlackXl } from '../../Styles/globals'
import { Navigation } from './Styles'
import IconSeparator from '../../assets/svg/separator.svg'
import IconClose from '../../assets/svg/close.svg'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

Modal.setAppElement('#root')

export const Profiles = () => {
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
	const [modalIsOpen, setIsOpen] = React.useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00'
	}

	function closeModal() {
		setIsOpen(false)
	}

	const headCells = [
		{ id: 'nombrePerfil', numeric: false, label: 'Nombre del Perfil' },
		{ id: 'puesto', numeric: false, label: 'Puesto' },
		{ id: 'codigo', numeric: false, label: 'Código' },
		{ id: null, numeric: false, label: 'Acciones' },
	]

	const rowData = visibleRows
		? visibleRows.map((profile, index) => (
				<RowDataProfiles profile={profile} key={index} countCells={headCells.length} />
		  ))
		: null

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<div style={{ height: '450px', width: '350px' }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<TextBlack16>Agregar nuevo perfil</TextBlack16>
						<img src={IconClose} alt='close' onClick={closeModal} />
					</div>
				</div>
			</Modal>
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
					rowData={rowData}
				/>
			</Container>
		</>
	)
}
