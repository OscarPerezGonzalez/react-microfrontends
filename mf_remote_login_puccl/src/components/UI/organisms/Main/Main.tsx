import React from 'react'
import { Box, Paper } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GridContainer from '../../atoms/GridContainer/GridContainer'
import './_style.css'
import ScreenComponent from '../../molecules/Screen/Screen'

const MainComponent = () => {

  const [elementPosition, setElementPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setElementPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
    return (
        <>
        <Box sx={{ display: "flex" }} style={{ top: elementPosition }}>
        <Header />
        <Footer />
        <Box component="main" sx={{ marginTop: "50px", flexGrow: 1}}>
          <GridContainer>
            <ScreenComponent/>
          </GridContainer>
        </Box>
      </Box>
        </>
    )
}

export default MainComponent