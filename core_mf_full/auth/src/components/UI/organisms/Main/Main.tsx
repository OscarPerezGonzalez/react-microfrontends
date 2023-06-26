import React from 'react'
import { Box, Paper } from '@mui/material'
import GridContainer from '../../atoms/GridContainer/GridContainer'
import './_style.css'
import ScreenComponent from '../../molecules/Screen/Screen'
import CustomModal from '../../atoms/Modal/CustomModal'
import { useLoginContext } from '../../../../providers/AuthProvider'
import Cookies from 'universal-cookie'

const MainComponent = () => {

  const cookies = new Cookies()

  const [elementPosition, setElementPosition] = React.useState(0);
  const { errors, handleLogin, handleUserLogin,isLogin, userLogin, isLoading, setErrors, handleProveedor, handleIdAvaya, idAvaya} = useLoginContext();


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
        <Box component="main" sx={{flexGrow: 1}}>
          <GridContainer>
            <ScreenComponent/>
            <CustomModal 
            open={isLogin}
            handleSubmit={handleProveedor}
            value={idAvaya}
            onChange={(e)=>handleIdAvaya(e)}
            /> 
          </GridContainer>
        </Box>
      </Box>
        </>
    )
}

export default MainComponent