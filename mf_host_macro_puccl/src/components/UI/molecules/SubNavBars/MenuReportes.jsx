import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";

export default function MenuReportes() {
    
    return (
      <>
      <Typography sx={{typography : (theme) => theme.typography.menu_title, paddingTop:'30px', paddingBottom:'30px', paddingLeft:'10px'}} noWrap component="div">
          Reportes
        </Typography>
      <Button sx={{typography : (theme) => theme.typography.name, color: 'black', justifyContent:'initial'}} fullWidth> Reporte de Usuarios</Button>
      <Divider></Divider>
      <Button sx={{typography : (theme) => theme.typography.name, color: 'black', justifyContent:'initial'}} fullWidth> Reporte de Interacciones</Button>
      <Divider></Divider>
      <Button sx={{typography : (theme) => theme.typography.name, color: 'black', justifyContent:'initial'}} fullWidth> Reporte de Accesos</Button>
      <Divider></Divider>
      </>
    );
  }