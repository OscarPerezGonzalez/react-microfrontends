// MUI
import React from 'react'
import { styled, TextField } from '@mui/material'
import './_style.css'

const InputTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
    marginTop: '0rem !important'
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
    fontSize: '16px',
    fontWeight: 300,
  },'& .MuiInputBase-root': {
    height: '40px',
    width: '261px',
    fontSize: '16px',
    fontWeight: 300,
  },
  marginTop: '10px',
  marginRight: '20px',
  marginLeft: '20px',
  marginBottom: '15px',
});

const CustomTextInput = (props) => {
  const { label, id, value, onChange, disabled, name, error, helperText } = props
  return (
    <>
      <InputTextField variant="outlined"
          disabled={disabled}
          onChange={onChange}
          id={id}
          name={name}
          label={label}
          value={value}
          error={error}
          helperText={helperText}
          >
      </InputTextField>
    </>
  )
}
export default CustomTextInput
