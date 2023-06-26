import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerCustom = styled(Container)`
	background-color: #ffdcb6;
`

const Home = () => {
	return (
		<main>
			<ContainerCustom>
				<Typography>Home</Typography>
				<Link to='/landing'>
					<Button variant='contained'>Go to Landing</Button>
				</Link>
			</ContainerCustom>
		</main>
	)
}

export default Home
