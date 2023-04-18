import React, { useState } from "react";
import { Box, Grid, Typography, Button, TextField} from "@mui/material";
import { makeStyles } from "@mui/styles";
import './_style.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography:{
    paddingBottom: "1rem"
  }
}));

export const Footer = () => {


  const classes = useStyles();

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bottom: "0px",
        left: 0,
        width: "100%",
        height: "auto",
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.footer.main,
        paddingTop: "1rem",
      }}
    >
        <Grid container className={classes.container}>
          <Grid item>
            <Typography className={classes.typography} sx={{typography : (theme) => theme.typography.footer}}>
              {`${new Date().getFullYear()} Liverpool / Todos los derechos reservados D.R. ® Portal de consulta para uso exclusivo intertno`}
            </Typography>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Footer;
