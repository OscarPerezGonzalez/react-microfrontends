import React from 'react'
import { TableHead, TableRow, TableSortLabel } from '@mui/material'
import { CellNoneBorder, TextGrayMax } from '../../Styles/globals'

export const TableHeader = ({ countCells, headCells, order, orderBy, onRequestSort }) => {
	const createSortHandler = newOrderBy => event => {
		onRequestSort(event, newOrderBy)
	}

	return (
		<TableHead>
			<TableRow>
				{headCells.map(headCell => (
					<CellNoneBorder
						key={headCell.id}
						sortDirection={orderBy === headCell.id ? order : false}
						$width={`${(100 / countCells).toString()}%`}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							<TextGrayMax>{headCell.label}</TextGrayMax>
						</TableSortLabel>
					</CellNoneBorder>
				))}
			</TableRow>
		</TableHead>
	)
}
