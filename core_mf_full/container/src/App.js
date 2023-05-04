import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Box } from '@mui/material'
import StyleProvider from './context/Style'

import Progress from './components/Progress'
import Header from './components/UI/Header/Header'
import Navbar from './components/UI/Navbar/NavBar'
import Footer from './components/UI/Footer/Footer'

import { HOST_CONTAINER } from './constants/environments'
import { AssociateData } from './components/AssociateData/AssociateData'
import { SimpleColumns } from './components/AssociateData/SimpleColumns'

const CoreLazy = lazy(() => import('./components/Microfrontends/CoreApp'))
const AuthLazy = lazy(() => import('./components/Microfrontends/AuthApp'))
const UsersLazy = lazy(() => import('./components/Microfrontends/UsersApp'))

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false)
	console.log('isSignedIn:::::::::', isSignedIn)
	console.log('HOST_CONTAINER:::::', HOST_CONTAINER)

	return (
		<StyleProvider>
			<BrowserRouter>
				<Box sx={{ display: 'flex' }}>
					<Header />
					{/* <Navbar onSignOut={() => setIsSignedIn(false)} /> */}
					<Footer /> 
					<Box component='main' sx={{ marginTop: '50px', flexGrow: 1 }}>
						{/* <AssociateData /> */}
						{/* <SimpleColumns /> */}
						<Suspense fallback={<Progress />}>
							<Switch>
								<Route exact path='/auth'>
									<AuthLazy onSignIn={() => setIsSignedIn(true)} />
								</Route>
								<Route exact path='/plataforma' component={CoreLazy} />
								<Route exact path='/plataforma/usuarios' component={UsersLazy} />
							</Switch>
						</Suspense>
					</Box>
				</Box>
			</BrowserRouter>
		</StyleProvider>
	)
}