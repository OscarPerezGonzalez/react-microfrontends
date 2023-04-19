import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'

const ContainerCustom = styled(Container)`
	background-color: #ffdcb6;
`

export default function SignIn({ onSignIn }) {
	return (
		<main>
			<ContainerCustom>
				<Typography>Login</Typography>
				<Button variant='contained' onClick={onSignIn}>
					Action Login
				</Button>
			</ContainerCustom>
		</main>
	)
}
