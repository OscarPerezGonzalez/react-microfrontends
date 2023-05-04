// MUI
import { styled } from '@mui/material';
import Button from '@mui/material/Button'
import React from 'react'

const CustomButtonS = styled(Button)({
  height: '32px',
  width: '114px',
  padding: 0,
  borderRadius: '4px',
  backgroundColor: '#833177',
  fontWeight: 400,
  fontSize: '12px',
  textTransform:"capitalize",
  fontFamily: 'Roboto',
  '&:hover': {
    backgroundColor: '#833177',
  },
});

const CustomButtonB = (props) => {
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

export default CustomButtonB