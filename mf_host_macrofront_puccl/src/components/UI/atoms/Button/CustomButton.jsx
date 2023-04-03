// MUI
import Button from '@mui/material/Button'

const CustomButton = (props) => {
  const { id, children, onClick, disabled } = props
  return (
    <>
      <Button
        variant="contained"
        id={id}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
}

export default CustomButton