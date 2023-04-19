import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerCustom = styled(Container)`
	background-color: #ffdcb6;
`

const Landing = () => {
	return (
		<main>
			<ContainerCustom>
				<Typography>Landing</Typography>
				<Link to='/'>
					<Button variant='contained'>Go to Home</Button>
				</Link>
			</ContainerCustom>
		</main>
	)
}

export default Landing
