import Grid  from '@mui/material/Grid';
import React from 'react'
import BackGroundImage from '../../../../../resources/img/Background_Image.png'
import Typography from '@mui/material/Typography';
import BoxInputsCreate from '../../BoxInputsCreate/BoxInputsCreate';
import Liverpool_Logo from '../../../../../resources/svg/Liverpool_Logo.svg'
import './_style.css'
const ScreenComponentCreate = () => {

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
      <BoxInputsCreate />
    </Grid>
  );
};

export default ScreenComponentCreate 