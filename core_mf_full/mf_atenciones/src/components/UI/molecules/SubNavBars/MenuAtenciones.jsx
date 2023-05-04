import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  Box,
  Divider
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Badge from '@mui/material/Badge';
import WhatssApp from '../../../../resources/svg/Whatsapp.svg'
import './_style.css'
import { useAtencionesContext } from "../../../../providers/AtencionesProvider";

const useStyles = makeStyles(() => ({
  badge: {
    right: 17,
    top: 17,
    border: `0`,
    padding: '0 4px',
    color: 'white',
    fontSize: '16px',
    fontWeight: 400
  },
  badge2: {
    right: 16.5,
    top: 18,
    border: `0`,
    padding: '0 4px',
    color: '#666666',
    fontSize: '12px',
    fontWeight: 400
  },
}));

const dataAnteriores= [
  {id:1,
  numeroCelular: '7222032616',
  nombre:'Alan', 
  correoElectronico: 'alanhernandez@gmail.com', 
  apellidoPaterno: 'Mercado', 
  apellidoMaterno: 'Hernandez'},
  {id: 2,
    numeroCelular: '5510203040',
  nombre:'EEdgar', 
  correoElectronico: "fzorrilla@grupoasesores.com.mx035", 
  apellidoPaterno: 'RRivera', 
  apellidoMaterno: 'VVelazquez'},
  {id: 3,
  numeroCelular: '5510203040',
  nombre:'Francisco', 
  correoElectronico: "fzorrilla@grupoasesores.com.mx035", 
  apellidoPaterno: 'Zorrilla', 
  apellidoMaterno: 'Hurtado'}
]

const dataEnCurso= [
  {id: 4,
    numeroCelular: '5510203040',
    nombre:'EEdgar', 
    correoElectronico: "fzorrilla@grupoasesores.com.mx035", 
    apellidoPaterno: 'RRivera', 
    apellidoMaterno: 'VVelazquez'},
    {id: 5,
      numeroCelular: '5510203040',
    nombre:'Francisco', 
    correoElectronico: "fzorrilla@grupoasesores.com.mx035", 
    apellidoPaterno: 'Zorrilla', 
    apellidoMaterno: 'Hurtado'},
    {id:6,
      numeroCelular: '7222032616',
      nombre:'Alan', 
      correoElectronico: 'alanhernandez@gmail.com', 
      apellidoPaterno: 'Mercado', 
      apellidoMaterno: 'Hernandez'},
]

const shapeStyles = { bgcolor: '#EC9E00', width: 30, height: 30};
const shapeCircleStyles = { borderRadius: '50%', marginLeft: '2.5px', marginTop: '2.5px' };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const shapeStyles2 = { bgcolor: 'white', width: 30, height: 30, border:'2px solid grey'};
const circle2 = (
  <Box component="span" sx={{ ...shapeStyles2, ...shapeCircleStyles }} />
);

export default function MenuAtenciones() {

  const classes = useStyles()
  const badgeContentAnteriores = dataAnteriores.length;
  const badgeContentEnCurso = dataEnCurso.length;
  const {handleInteracciones} = useAtencionesContext()


  return (
    <>
      <Typography
        sx={{
          typography: (theme) => theme.typography.menu_title,
          paddingTop: "30px",
          paddingBottom: "15px",
          paddingLeft: "10px",
        }}
        noWrap
        component="div"
        display={"flex"}
        justifyContent={"space-between"}
      >
        Atenciones en Curso:
        <Badge
          badgeContent={badgeContentEnCurso}
          classes={{ badge: classes.badge }}
          style={{
            marginRight: "20px",
            marginTop: "-5px",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
            height: 35,
            width: 35,
          }}
        >
          {circle}
        </Badge>
      </Typography>
      <List component="nav" aria-labelledby="nested-list-one" disablePadding>
        {dataEnCurso.map((item) => (
          <>
            <ListItem disablePadding key={item.id}>
              <ListItemButton>
                <WhatssApp />
                &nbsp;
                <a className="first_text">&nbsp;{item.numeroCelular}</a>
                <a className="second_text">Hace 3 min</a>
              </ListItemButton>
            </ListItem>
            <Divider style={{marginTop: '5px', marginBottom: '5px'}}/>
          </>
        ))}
      </List>
      <Typography
        sx={{
          typography: (theme) => theme.typography.footer_notas,
          paddingTop: "20px",
          paddingBottom: "15px",
          paddingLeft: "10px",
        }}
        noWrap
        component="div"
        display={"flex"}
        justifyContent={"space-between"}
      >
        Anteriores:
        <Badge
          badgeContent={badgeContentAnteriores}
          classes={{ badge: classes.badge2 }}
          style={{ marginRight: "20px", marginTop: "-8px" }}
        >
          {circle2}
        </Badge>
      </Typography>
      <List component="nav" aria-labelledby="nested-list-one" disablePadding>
        {dataAnteriores.map((item) => (
          <>
            <ListItem disablePadding key={item.id}>
              <ListItemButton onClick={(e) => handleInteracciones(e, item)}>
                <WhatssApp />
                &nbsp;
                <p className="first_text">&nbsp;{item.numeroCelular}</p>
                <p className="second_text">Hace 3 min</p>
              </ListItemButton>
            </ListItem>
            <Divider style={{marginTop: '5px', marginBottom: '5px'}}/>
          </>
        ))}
      </List>
    </>
  );
}
