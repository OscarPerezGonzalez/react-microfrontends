import { Table, TableContainer } from '@mui/material'
import styled from 'styled-components'

export const ContainerData = styled(TableContainer)`
	margin-top: 20px;
	min-width: 750px;
`

export const HeaderTable = styled.div`
	position: 'sticky';
	border: 1px solid #d8d8d8;
	border-radius: 12px 12px 0 0;
`

export const BodyTable = styled.div`
	height: 340px;
	overflow: auto;
	border-left: 1px solid #d8d8d8;
	border-right: 1px solid #d8d8d8;
	border-bottom: 1px solid #d8d8d8;
	border-radius: 0 0 12px 12px;
`

export const TableLayout = styled(Table)`
	table-layout: 'fixed';
`
