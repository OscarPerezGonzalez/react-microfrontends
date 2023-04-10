import Grid from '@mui/material/Grid'

const GridContainer = props => {
  const { children, ...rest } = props
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  )
}

export default GridContainer
