import React from 'react'
import { AuthProvider } from '../providers/AuthProvider'
import MainComponent from '../components/UI/organisms/Main/Main'


export default function SignIn({ onSignIn }) {
	return (
		<>
			<AuthProvider>
				<MainComponent/>
			</AuthProvider>
		</>
	)
}
