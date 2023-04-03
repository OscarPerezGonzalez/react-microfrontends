// MUI
import React from 'react'
import { styled, TextField } from '@mui/material'

const InputTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#D8D8D8',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D8D8D8',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D8D8D8',
    },
    '&:hover fieldset': {
      borderColor: '#D8D8D8',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D8D8D8',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '20px',
    fontWeight: 300,
  },'& .MuiInputBase-root': {
    height: '64px',
    width: '520px',
  },
  marginTop: '30px',
  marginRight: '20px',
  marginLeft: '20px',
  fontSize: '16px',
  fontWeight: 300,
});

const CustomTextInput = (props) => {
  const { label, id, value, onChange, disabled } = props
  return (
    <>
      <InputTextField variant="outlined"
          label={label}
          disabled={disabled}
          id={id}
          value={value}
          onChange={onChange}
          >
      </InputTextField>
    </>
  )
}
export default CustomTextInput
