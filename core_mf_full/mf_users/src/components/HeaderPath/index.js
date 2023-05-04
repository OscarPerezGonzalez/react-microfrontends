import { Container } from '@mui/material'
import React from 'react'
import { PrincipalNav, TextBlackXl } from '../../Styles/globals'
import IconSeparator from '../../assets/svg/separator.svg'

export const HeaderPath = ({ path1, path2 }) => {
	return (
		<Container>
			<PrincipalNav>
				<TextBlackXl>{path1}</TextBlackXl>
				<img src={IconSeparator} style={{ margin: '0 18px' }} />
				<TextBlackXl>{path2}</TextBlackXl>
			</PrincipalNav>
		</Container>
	)
}
