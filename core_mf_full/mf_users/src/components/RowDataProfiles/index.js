import React, { useState } from 'react'
import { Row } from '../GeneralStyles'
import { CellNoneBorder } from '../../Styles/globals'
import { Link } from 'react-router-dom'
import { CellLinker } from '../CellLinker'
import { PATH_PROFILES_UPDATE_ID, PATH_PROFILES_DETAIL_ID } from '../../constants/environments'
import { DeleteProfile } from '../DeleteProfile/DeleteProfile'

export const RowDataProfiles = ({ profile, countCells }) => {
	const { nombrePerfil, puesto, codigo, idPerfil } = profile
	const link = { pathname: `${PATH_PROFILES_DETAIL_ID}${idPerfil}`, profile }

	const [modalIsOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	const deleteProfile = () => {
		setIsOpen(false)
	}

	return (
		<>
			<DeleteProfile modalIsOpen={modalIsOpen} closeModal={closeModal} deleteProfile={deleteProfile} />
			<Row>
				<CellLinker label={nombrePerfil} link={link} countCells={countCells} />
				<CellLinker label={puesto} link={link} countCells={countCells} />
				<CellLinker label={codigo} link={link} countCells={countCells} />
				<CellNoneBorder $width={`${(100 / countCells).toString()}%`}>
					<div>
						<Link
							to={`${PATH_PROFILES_UPDATE_ID}${idPerfil}`}
							style={{ fontSize: '14px', color: '#833177', marginRight: '30px' }}
						>
							Editar
						</Link>
						<a style={{ fontSize: '14px', color: '#833177', marginRight: '30px' }} onClick={openModal}>
							Eliminar
						</a>
					</div>
				</CellNoneBorder>
			</Row>
		</>
	)
}
