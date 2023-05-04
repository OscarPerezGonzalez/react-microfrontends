import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Signin from './pages/Signin'
import './App.scss'
import { HOST_MICROFRONT } from '../../core_mf/src/constants/environments'

export default ({ history, onSignIn }) => {
	console.log('HOST_MICROFRONT::::', HOST_MICROFRONT)

	return (
		<Router history={history}>
			<Switch>
				<Route path='/auth/login'>
					<Signin />
				</Route>
			</Switch>
		</Router>
	)
}
