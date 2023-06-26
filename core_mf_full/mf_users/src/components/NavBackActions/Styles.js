import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px 0;
`

export const Back = styled.div`
	display: flex;
	align-items: center;
`

export const TextBack = styled(Typography)`
	margin-left: 12px !important;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #333333;
`
