import React from 'react'
import MainComponentShow from '../components/UI/organisms/Main/MainShow'
import StyleProvider from '../providers/Style'


const Home = () => {
	return (
		<>
		<StyleProvider>
			<MainComponentShow/>
		</StyleProvider>
		</>
	)
}

export default Home
