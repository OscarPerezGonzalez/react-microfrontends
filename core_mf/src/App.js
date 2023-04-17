import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Landing from './pages/Landing'
import Home from './pages/Home'

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
})

export default ({ history }) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path='/landing' component={Landing} />
					<Route path='/' component={Home} />
				</Switch>
			</Router>
		</StylesProvider>
	)
}
