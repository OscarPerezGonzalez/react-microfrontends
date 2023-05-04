import React from 'react'
import { Row } from '../GeneralStyles'
import { CellNoneBorder } from '../../Styles/globals'
import { Link } from 'react-router-dom'
import { CellLinker } from '../CellLinker'
import { PATH_PROFILES_UPDATE_ID, PATH_PROFILES_DETAIL_ID } from '../../constants/environments'

export const RowDataProfiles = ({ profile, countCells }) => {
	const { nombrePerfil, puesto, codigo, idPerfil } = profile
	const link = { pathname: `${PATH_PROFILES_DETAIL_ID}${idPerfil}`, profile }

	return (
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
					<a>Eliminar</a>
				</div>
			</CellNoneBorder>
		</Row>
	)
}
