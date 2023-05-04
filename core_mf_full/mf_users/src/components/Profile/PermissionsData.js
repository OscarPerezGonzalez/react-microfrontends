import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { CardDataBasic, TextBlackMidS12 } from '../../Styles/globals'
import { orderKeysOrganize } from '../../utils/tools'
import { PermissionsModule } from '../PermissionsModule'
import IconDown from '../../assets/svg/down.svg'

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	border: `0px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}))

const AccordionSummary = styled(props => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: 'white',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export const PermissionsData = ({ permissionsData }) => {
	const [expanded, setExpanded] = useState('panel1')
	const [dataPermissions, setDataPermissions] = useState([])

	useEffect(() => {
		const data = orderKeysOrganize(permissionsData, 'permiso', 'nombre')
		setDataPermissions(data)
	}, [permissionsData])

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false)
	}

	return (
		<CardDataBasic>
			{Object.values(dataPermissions).map((data, id) => {
				return (
					<Accordion expanded={expanded === `panel${id + 1}`} onChange={handleChange(`panel${id + 1}`)} key={id}>
						<AccordionSummary
							id={`panel${id + 1}d-header`}
							aria-controls={`panel${id + 1}d-content`}
							expandIcon={<img src={IconDown} />}
						>
							<TextBlackMidS12>{data[0] && `Permisos de ${data[0].permiso.nombre}`}</TextBlackMidS12>
						</AccordionSummary>
						<AccordionDetails>
							<PermissionsModule dataPermissions={data} />
						</AccordionDetails>
					</Accordion>
				)
			})}
		</CardDataBasic>
	)
}
