import React from 'react'
import { styled, TextField } from '@mui/material'

const InputTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'black',
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
	},
	'& .MuiInputBase-root': {
		height: '40px',
		minWidth: '280px',
		width: '340px',
		fontSize: '16px',
		fontWeight: 300,
	},
	marginTop: '13px',
	marginBottom: '15px',
})

export const TextInput = ({ label, id, value, onChange, name }) => {
	return <InputTextField variant='outlined' onChange={onChange} id={id} name={name} label={label} value={value} />
}
