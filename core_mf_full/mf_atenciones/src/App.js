import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Create from './pages/Create'
import Home from './pages/Home'

import './App.scss'
import { HOST_MICROFRONT } from './constants/environments'
import { AtencionesProvider } from './providers/AtencionesProvider'

export default ({ history }) => {
	console.log('HOST_MICROFRONT::::', HOST_MICROFRONT)
	return (
		<>
			<AtencionesProvider>
				<Router history={history}>
					<Switch>
						<Route exact path='/plataforma/atenciones/crear' component={Create} />
						<Route path='/plataforma/atenciones/buscar' component={Home} />
					</Switch>
				</Router>
			</AtencionesProvider>
		</>
	)
}
