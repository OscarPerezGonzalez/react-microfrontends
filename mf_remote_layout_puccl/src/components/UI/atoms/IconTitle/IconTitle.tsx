import React from 'react'
import { Box, Typography } from '@mui/material'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'


const CustomIconTitle = () => {
    return (
      <>
        <Box display={"flex"} marginLeft={'20px'} marginTop={'10px'}>
            <Typography>
                <PersonSearchIcon style={{color: "#979797",fontSize:"32px"}}/>
            </Typography>
             <Typography style={{paddingLeft: "10px", marginTop: "5px", textTransform:"capitalize", fontSize: '16px'}} > {/*sx={{typography : (theme) => theme.typography.search_title}} */}
                Buscar Cliente
            </Typography>
        </Box>
      </>
    )
  }
  export default CustomIconTitle
  