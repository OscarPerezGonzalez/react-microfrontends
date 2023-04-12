import Grid  from '@mui/material/Grid';
import React from 'react'
import BackGroundImage from '../../../../resources/img/Background_Image.png'
import Typography from '@mui/material/Typography';
import BoxResultComponent from '../BoxResults/BoxResults';
import BoxInputs from '../BoxInputs/BoxInputs';
import BoxInputsCreate from '../BoxInputsCreate/BoxInputsCreate';
import Liverpool_Logo from '../../../../resources/svg/Liverpool_Logo.svg'
import './_style.css'
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
        height: '70%',
        width: '100%',
    }
  return (
    <Grid container position={'relative'}>
      <Grid item xs={12} >
        <img src={ BackGroundImage } alt='Image' style={gridItemStyle}/>
        <Typography style={{position: 'absolute', top: '5%', left: '12.5%'}} className='text_b'> Bienvenido</Typography>
        <div style={{position: 'absolute', top: '20%', left: '12.5%', display:'inline-flex'}} >
        <Typography noWrap component="div">
          <Liverpool_Logo/>&nbsp;
          </Typography>
          <Typography  style={{ marginTop: '-0.7rem'}}noWrap component="div" className='text_360'>
           360°
        </Typography>
        </div>
        <Typography style={{position: 'absolute', top: '17%', left: '63%'}} className='text_vista'> Vista 360º del cliente en una pantalla</Typography>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <div style={{position:'absolute', top: '100%', left: '12.5%', right: '12.5%', bottom: '-72%' }}>
          <Typography marginBottom={'20px'} style={{fontSize: '16px', fontWeight: '400', }}>Resultados De Búsqueda</Typography>
          <BoxResultComponent data={props}/>
      </div>
      <BoxInputs />
      {/* <BoxInputsCreate /> */}
    </Grid>
  );
};

export default ScreenComponent 