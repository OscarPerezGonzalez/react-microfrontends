import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Header({ isSignedIn, onSignOut }) {
	const onClick = () => {
		if (isSignedIn && onSignOut) {
			onSignOut()
		}
	}

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' color='inherit' noWrap component={RouterLink} to='/'>
					App
				</Typography>
				<Button onClick={onClick} color='inherit' component={RouterLink} to={isSignedIn ? '/' : '/auth/signin'}>
					{isSignedIn ? 'Logout' : 'Login'}
				</Button>
			</Toolbar>
		</AppBar>
	)
}
