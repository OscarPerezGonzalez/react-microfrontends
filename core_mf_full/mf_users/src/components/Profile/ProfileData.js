import React from 'react'
import { Table, TableBody, TableRow } from '@mui/material'
import { CardDataBasic, IconMd, CellLeft, CellRight, TextGrayMid, TextBlackMid } from '../../Styles/globals'
import IconPermissions from '../../assets/svg/permissions.svg'

export const ProfileData = ({ profileData }) => {
	const { puesto, codigo, DescripcionPerfil } = profileData

	return (
		<CardDataBasic>
			<IconMd src={IconPermissions} alt={'Icon Permissions'} />
			<Table>
				<TableBody>
					<TableRow>
						<CellLeft>
							<TextBlackMid>Puesto:</TextBlackMid>{' '}
						</CellLeft>
						<CellRight>
							<TextGrayMid>{puesto}</TextGrayMid>{' '}
						</CellRight>
					</TableRow>
					<TableRow>
						<CellLeft>
							<TextBlackMid>Código:</TextBlackMid>{' '}
						</CellLeft>
						<CellRight>
							<TextGrayMid>{codigo}</TextGrayMid>
						</CellRight>
					</TableRow>
					<TableRow>
						<CellLeft>
							<TextBlackMid>Descripción:</TextBlackMid>
						</CellLeft>
						<CellRight>
							<TextGrayMid>{DescripcionPerfil}</TextGrayMid>
						</CellRight>
					</TableRow>
				</TableBody>
			</Table>
		</CardDataBasic>
	)
}
