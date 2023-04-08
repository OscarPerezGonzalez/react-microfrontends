import Grid  from '@mui/material/Grid';
import React from 'react'
import BackGroundImage from '../../../../resources/img/Background_Image.png'
import Typography from '@mui/material/Typography';
import BoxResultComponent from '../BoxResults/BoxResults';

const ScreenComponent = () => {
  const props = [
    { nombre: "Dato 1", apellidop: "Dato 2", apellidom: "Dato 3", correo: 'alan@gmail.com', tel: '7222032616' },
    { nombre: "Dato 4", apellidop: "Dato 5", apellidom: "Dato 6", correo: 'alan@gmail.com', tel: '7222032616'},
    { nombre: "Dato 7", apellidop: "Dato 8", apellidom: "Dato 9", correo: 'alan@gmail.com', tel: '7222032616' },
    { nombre: "Dato 10", apellidop: "Dato 11", apellidom: "Dato 12", correo: 'alan@gmail.com', tel: '7222032616' },
    { nombre: "Dato 13", apellidop: "Dato 14", apellidom: "Dato 15", correo: 'alan@gmail.com', tel: '7222032616'},
    { nombre: "Dato 16", apellidop: "Dato 17", apellidom: "Dato 18", correo: 'alan@gmail.com', tel: '7222032616' },
    { nombre: "Dato 1", apellidop: "Dato 2", apellidom: "Dato 3", correo: 'alan@gmail.com', tel: '7222032616' },
    { nombre: "Dato 4", apellidop: "Dato 5", apellidom: "Dato 6", correo: 'alan@gmail.com', tel: '7222032616'},
    { nombre: "Dato 7", apellidop: "Dato 8", apellidom: "Dato 9", correo: 'alan@gmail.com', tel: '7222032616' },
    { nombre: "Dato 7", apellidop: "Dato 8", apellidom: "Dato 9", correo: 'alan@gmail.com', tel: '7222032616' },
  ];

    const gridItemStyle = {
        backgroundSize: 'cover',
        height: '90%',
        width: '100%',
    }
  return (
    <Grid container>
      <Grid item xs={12} >
        <img src={ BackGroundImage } alt='Image' style={gridItemStyle}/>
      </Grid>
      <Grid item xs={12}>
        <div style={{position:'fixed', top: '60%', left: '10%', right: '10%', bottom: 0 }}>
          <Typography marginBottom={'20px'} style={{fontSize: '16px', fontWeight: '400'}}>Resultados De Búsqueda</Typography>
          <BoxResultComponent data={props}/>
        </div>
      </Grid>
    </Grid>
  );
};

export default ScreenComponent 