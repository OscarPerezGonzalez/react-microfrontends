import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Liverpool_Logo from '../../../../resources/svg/Liverpool_Logo.svg'

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , height: '58px'}}
      >
        <Toolbar>
          <Typography sx={{typography : (theme) => theme.typography.header_text}} noWrap component="div">
          <Liverpool_Logo/>&nbsp;
          </Typography>
          <Typography sx={{typography : (theme) => theme.typography.header_number}} style={{ marginTop: '-0.7rem'}}noWrap component="div">
           360°
          </Typography>
        </Toolbar>
      </AppBar>      
    </>
  );
}

export default Header