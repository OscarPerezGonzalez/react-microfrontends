import React from 'react'
import { Box, Typography } from '@mui/material'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


const CustomIconTitle = () => {
    return (
      <>
        <Box display={"flex"} marginLeft={'20px'} marginTop={'20px'} marginBottom={'10px'}>
            <Typography>
                <PersonSearchIcon style={{color: "#979797",fontSize:"27px"}}/>
            </Typography>
            <Typography style={{paddingLeft: "10px", paddingTop: "2.5px", textTransform:"capitalize"}} sx={{typography : (theme) => theme.typography.search_title}}>
                Buscar Cliente
            </Typography>
        </Box>
      </>
    )
  }
  export default CustomIconTitle
  