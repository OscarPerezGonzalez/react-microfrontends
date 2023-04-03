// MUI
import { styled, ButtonProps } from '@mui/material';
import Button from '@mui/material/Button'
import React from 'react'

const CustomButtonS = styled(Button)({
  height: '64px',
  width: '260px',
  padding: "8px 16px 8px 16px",
  borderRadius: '4px',
  backgroundColor: '#833177',
  fontStyle: "normal",
  textTransform:"capitalize",
  fontWeight: 400,
  fontSize: '11px',
  fontFamily: 'Roboto',
  '&:hover': {
    backgroundColor: '#833177',
  },
  marginTop: '30px',
  marginRight: '20px',
  marginLeft: '20px',
});

const CustomButtonA = (props) => {
  const { id, children, onClick, disabled } = props
  return (
    <>
      <CustomButtonS
        variant="contained"
        id={id}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </CustomButtonS>
    </>
  )
}

export default CustomButtonA