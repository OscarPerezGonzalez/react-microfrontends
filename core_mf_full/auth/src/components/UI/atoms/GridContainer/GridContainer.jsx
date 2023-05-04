import Grid from "@mui/material/Grid";
import React from 'react'

const GridContainer = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
};

export default GridContainer;
