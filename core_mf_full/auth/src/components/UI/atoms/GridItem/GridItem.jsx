import Grid from '@mui/material/Grid'
import React from 'react'

const GridItem = (props) => {
  const { children, ...rest } = props
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  )
}

export default GridItem
