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
  {id:1,telefono: '7222032616'},{id: 5,telefono: '7222032616'},{id: 9,telefono: '7222032616'}, {id: 13,telefono: '7222032616'},{id: 17,telefono: '7222032616'},{id: 21,telefono: '7222032616'},
]

const dataEnCurso= [
  {id:1,telefono: '7222032616'},{id: 5,telefono: '7222032616'},{id: 9,telefono: '7222032616'}, {id: 13,telefono: '7222032616'},{id: 17,telefono: '7222032616'},{id: 21,telefono: '7222032616'},
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
                <a className="first_text">&nbsp;{item.telefono}</a>
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
              <ListItemButton>
                <WhatssApp />
                &nbsp;
                <a className="first_text">&nbsp;{item.telefono}</a>
                <a className="second_text">Hace 3 min</a>
              </ListItemButton>
            </ListItem>
            <Divider style={{marginTop: '5px', marginBottom: '5px'}}/>
          </>
        ))}
      </List>
    </>
  );
}
