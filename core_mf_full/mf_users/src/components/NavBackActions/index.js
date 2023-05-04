import React from 'react'
import { Nav, Back, TextBack } from './Styles'
import IconGoBack from '../../assets/svg/goBack.svg'
import { Link } from 'react-router-dom'

export const NavBackActions = ({ action, linkBack, textBack }) => {
	return (
		<Nav>
			<Back>
				<Link to={linkBack}>
					<img src={IconGoBack} alt='goBack' />
				</Link>
				<TextBack>{textBack}</TextBack>
			</Back>
			{action || <div />}
		</Nav>
	)
}
