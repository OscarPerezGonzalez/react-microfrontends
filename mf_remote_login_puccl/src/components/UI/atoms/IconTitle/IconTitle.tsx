import React from 'react'
import { Box, Typography } from '@mui/material'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import ContactCenter from '../../../../resources/svg/Contact_Center.svg'


const CustomIconTitle = () => {
    return (
      <>
        <Box display={'grid'} justifySelf={'center'} style={{paddingTop: '35px'}}>
            <ContactCenter />
        </Box>
      </>
    )
  }
  export default CustomIconTitle
  