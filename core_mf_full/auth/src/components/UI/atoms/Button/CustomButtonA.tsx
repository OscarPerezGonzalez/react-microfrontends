// MUI
import { styled } from '@mui/material';
import Button from '@mui/material/Button'
import React from 'react'

const CustomButtonS = styled(Button)({
  height: '48px',
  width: '201px',
  padding: "8px 16px 8px 16px",
  borderRadius: '4px',
  backgroundColor: '#833177',
  fontStyle: "normal",
  textTransform:"capitalize",
  fontWeight: 400,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#833177',
  },
  marginTop: '10px',
});

const CustomButtonA = (props) => {
  const { id, children, onClick, disabled, type } = props
  return (
    <>
      <CustomButtonS
        variant="contained"
        id={id}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </CustomButtonS>
    </>
  )
}

export default CustomButtonA