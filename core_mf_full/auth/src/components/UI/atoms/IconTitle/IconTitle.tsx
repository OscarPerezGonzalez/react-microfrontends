import React from 'react'
import { Box } from '@mui/material'
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
  