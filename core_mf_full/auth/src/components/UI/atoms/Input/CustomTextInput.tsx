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
      borderColor: '#833177',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#833177',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '16px',
    fontWeight: 300,
  },'& .MuiInputBase-root': {
    height: '40px',
    width: '351px',
    fontSize: '16px',
    fontWeight: 300,
  },
  marginBottom: '35px',
});

const CustomTextInput = (props) => {

  const { label, id, value, onChange, disabled, name, error, helperText, type, InputProps } = props
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
          type={type}
          InputProps={ InputProps}
          >
      </InputTextField>
    </>
  )
}
export default CustomTextInput
