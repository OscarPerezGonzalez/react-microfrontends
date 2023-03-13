// MUI
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'

const CustomInput = (props) => {
  const { label, id, value, onChange, disabled } = props
  return (
    <>
      <FormControl variant="standard">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          disabled={disabled}
          id={id}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </>
  )
}

export default CustomInput
