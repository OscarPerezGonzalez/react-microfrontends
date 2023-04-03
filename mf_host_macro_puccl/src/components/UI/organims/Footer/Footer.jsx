import React, { FC, ReactElement, useState } from "react";
import { Box, Container, Grid, Typography, Button, TextField, Popper, IconButton, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import notas from '../../../../svg/Notas.svg'
import AddIcon from '@mui/icons-material/Add';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor:theme.palette.secondary.main,
    minWidth: 354,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    justifyContent: "left",
    textTransform: 'none',
    paddingBottom: "0.5rem",
    marginTop: "-0.5rem",
    marginRight:"10px"
  },
  typography:{
    marginRight: "-10rem",
    paddingBottom: "1rem"
  },
  textField:{
    minWidth:'360px', 
    backgroundColor: "white",
    [`& fieldset`]: {
      borderRadius: 0,
    },
  }
}));

export const Footer = () => {


  const classes = useStyles();
  const [showTextArea, setShowTextArea] = useState(true)

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
              {`${new Date().getFullYear()} El Puerto de Liverpool / Todos los derechos reservados D.R. ® Portal de consulta para uso exclusivo interno`}
            </Typography>
          </Grid>
          <Grid item position={"absolute"} justifySelf={'right'}>  
            <Button 
              className={classes.button} 
              sx={{typography : (theme) => theme.typography.footer_notas}} 
              onClick={() =>showTextArea == true ? setShowTextArea(false) : setShowTextArea(true)}
              style={{color: showTextArea == false ? "white" : "#833177", backgroundColor: showTextArea == false ? "#833177" : "#F5F5F5"}}>
                <TextSnippetIcon/>&nbsp;Nota rápida {showTextArea ? <AddIcon style={{marginLeft:"14rem"}}/> : <RemoveIcon style={{marginLeft:"14rem"}}/> } 
            </Button> 
            <div  style={{overflow:'auto', marginBottom:'22rem', marginRight:'10px'}} hidden={showTextArea}>
              <TextField className={classes.textField} multiline rows={14} placeholder="Escribe Aquí..."/>
            </div> 
          </Grid>
        </Grid>
    </Box>
  );
};

export default Footer;
