import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";

export default function MenuConfiguraciones() {
    
    return (
      <>
      <Typography sx={{typography : (theme) => theme.typography.menu_title, paddingTop:'30px', paddingBottom:'30px', paddingLeft:'10px'}} noWrap component="div">
          Configuraciones
        </Typography>
      <Button sx={{typography : (theme) => theme.typography.name, color: 'black', justifyContent:'initial'}} fullWidth> Usuarios</Button> {/* cuando clickea mandar font weight a bold*/}
      <Divider></Divider>
      <Button sx={{typography : (theme) => theme.typography.name, color: 'black', justifyContent:'initial'}} fullWidth> Perfiles</Button> {/* cuando clickea mandar font weight a bold*/}
      <Divider></Divider>
      <Button sx={{typography : (theme) => theme.typography.name, color: 'black', justifyContent:'initial'}} fullWidth> Catálogos</Button> {/* cuando clickea mandar font weight a bold*/}
      <Divider></Divider>
      </>
    );
  }