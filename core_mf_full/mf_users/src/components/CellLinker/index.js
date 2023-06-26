import React from 'react'
import { LinkerItem } from './Styles'
import { CellNoneBorder } from '../../Styles/globals'

export const CellLinker = ({ label, link, countCells }) => {
	return (
		<CellNoneBorder $width={`${(100 / countCells).toString()}%`}>
			<LinkerItem to={link}>{label}</LinkerItem>
		</CellNoneBorder>
	)
}
