import React from 'react'
import { Row } from '../GeneralStyles'
import { CellLinker } from '../CellLinker'
import { PATH_USERS_DETAIL_ID } from '../../constants/environments'

export const RowDataUser = ({ user, countCells }) => {
	const { nombre, apellidoPaterno, apellidoMaterno, idUsuario, campaña, perfil } = user
	const link = { pathname: `${PATH_USERS_DETAIL_ID}${idUsuario}`, user }

	return (
		<Row>
			<CellLinker label={nombre} link={link} countCells={countCells} />
			<CellLinker label={apellidoPaterno} link={link} countCells={countCells} />
			<CellLinker label={apellidoMaterno} link={link} countCells={countCells} />
			<CellLinker label={idUsuario} link={link} countCells={countCells} />
			<CellLinker label={campaña} link={link} countCells={countCells} />
			<CellLinker label={perfil} link={link} countCells={countCells} />
		</Row>
	)
}
