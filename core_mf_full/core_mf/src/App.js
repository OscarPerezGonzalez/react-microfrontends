import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'

import './App.scss'
import { HOST_MICROFRONT } from './constants/environments'

export default ({ history }) => {
	console.log('HOST_MICROFRONT::::', HOST_MICROFRONT)
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/landing' component={Landing} />
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	)
}
