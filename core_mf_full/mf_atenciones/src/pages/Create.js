import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StyleProvider from '../providers/Style'
import MainComponentCreate from '../components/UI/organisms/Main/MainCreate'

const Landing = () => {
	return (
		<>
		<StyleProvider>
			<MainComponentCreate/>
		</StyleProvider>
		</>
	)
}

export default Landing
