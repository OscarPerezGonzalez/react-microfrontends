import React from 'react'
import { Table, TableBody, TableRow } from '@mui/material'

import { CardDataBasic, IconMd, CellLeft, CellRight, TextBlackMid, TextGrayMid } from '../../Styles/globals'
import PersonSVG from '../../assets/svg/person.svg'

export const MiniDataUser = ({ miniData }) => {
	const { idUsuario, creationDate, creationTo, lastConection } = miniData
	return (
		<CardDataBasic>
			<IconMd src={PersonSVG} alt={'Icon Person'} />
			<Table>
				<TableBody>
					<TableRow>
						<CellLeft>
							<TextBlackMid>ID de usuario:</TextBlackMid>
						</CellLeft>
						<CellRight>
							<TextGrayMid>{idUsuario}</TextGrayMid>
						</CellRight>
					</TableRow>
					<TableRow>
						<CellLeft>
							<TextBlackMid>Fecha de creación:</TextBlackMid>
						</CellLeft>
						<CellRight>
							<TextGrayMid>{creationDate}</TextGrayMid>
						</CellRight>
					</TableRow>
					<TableRow>
						<CellLeft>
							<TextBlackMid>Activo hasta:</TextBlackMid>{' '}
						</CellLeft>
						<CellRight>
							<TextGrayMid>{creationTo}</TextGrayMid>
						</CellRight>
					</TableRow>
					<TableRow>
						<CellLeft>
							<TextBlackMid> Última conexión:</TextBlackMid>
						</CellLeft>
						<CellRight>
							<TextGrayMid>{lastConection}</TextGrayMid>
						</CellRight>
					</TableRow>
				</TableBody>
			</Table>
		</CardDataBasic>
	)
}
