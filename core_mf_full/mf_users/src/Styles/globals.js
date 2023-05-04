import { Container, CardContent, TableCell, Typography } from '@mui/material'
import styled from 'styled-components'

export const CellNoneBorder = styled(TableCell)`
	border-bottom: none;
	padding: 5px 2px;
	width: ${props => (props.$width ? props.$width : 'auto')};
`

export const ContainerDetail = styled(Container)`
	margin-top: 18px;
`

export const CardDataBasic = styled(CardContent)`
	border: 1px solid #d8d8d8;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const IconMd = styled.img`
	height: 85px;
	margin-bottom: 30px;
`

export const CellLeft = styled(TableCell)`
	border-bottom: none !important;
	padding: 6px 0 !important;
	text-align: right !important;
	width: 40%;
	vertical-align: top !important;
`

export const CellRight = styled(TableCell)`
	border-bottom: none !important;
	padding: 6px 18px !important;
	text-align: left !important;
	width: 60%;
`

export const TextBlackXl = styled(Typography)`
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	color: #333333;
`

export const TextBlack16 = styled(Typography)`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #333333;
`

export const TextBlackMid = styled(Typography)`
	font-weight: 400 !important;
	font-size: 14px !important;
	color: #333333;
`

export const TextBlackMidS12 = styled(Typography)`
	font-weight: 300 !important;
	font-size: 12px !important;
	color: #333333;
`

export const TextGrayMax = styled(Typography)`
	font-weight: 500 !important;
	font-size: 14px !important;
	color: #666666;
`

export const TextGrayMid = styled(Typography)`
	font-weight: 400 !important;
	font-size: 14px !important;
	color: #666666;
`

export const TextGreen = styled(Typography)`
	font-weight: 400;
	font-size: 12px;
	color: #0abd3e;
`

export const TextRed = styled(Typography)`
	font-weight: 400;
	font-size: 12px;
	color: #ff0000;
`

export const ButtonPurple = styled.button`
	background-color: #833177;
	border-radius: 4px;
	color: #fff;
	border: 0;
	padding: 8px 16px;
	cursor: pointer;
`

export const SimpleFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px;
`

export const PrincipalNav = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 18px 0;
`

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: #d8d8d8;
`

export const InputText = styled.input`
	border-radius: 4px;
	width: 85%;
	font-size: 16px;
	padding: 10px;
	border: 1px solid #d8d8d8;
`
