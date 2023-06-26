import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { Profiles } from './pages/Profiles'
import { ProfileDetail } from './pages/ProfileDetail'
import { ProfileUpdate } from './pages/ProfileUpdate'
import { Users } from './pages/Users'
import { UserDetail } from './pages/UserDetail'
import './App.scss'
import {
	PATH_PROFILES,
	PATH_PROFILES_DETAIL_ID,
	PATH_PROFILES_UPDATE_ID,
	PATH_REPORTS,
	PATH_USERS,
	PATH_USERS_DETAIL_ID,
} from './constants/environments'
import { Reports } from './pages/Reports'

export default ({ history }) => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path={PATH_PROFILES} component={Profiles} />
				<Route exact path={`${PATH_PROFILES_DETAIL_ID}:id`} component={ProfileDetail} />
				<Route exact path={`${PATH_PROFILES_UPDATE_ID}:id`} component={ProfileUpdate} />
				<Route exact path={PATH_USERS} component={Users} />
				<Route exact path={`${PATH_USERS_DETAIL_ID}:id`} component={UserDetail} />
				<Route exact path={PATH_REPORTS} component={Reports} />
			</Switch>
		</Router>
	)
}
