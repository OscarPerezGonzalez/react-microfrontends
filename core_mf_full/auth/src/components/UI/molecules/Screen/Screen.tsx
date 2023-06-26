import Grid  from '@mui/material/Grid';
import React from 'react'
import BackGroundImage from '../../../../resources/img/BackgroundImage.png'
import Typography from '@mui/material/Typography';
import BoxInputs from '../BoxInputs/BoxInputs';
import './_style.css'
const ScreenComponent = () => {

    const gridItemStyle = {
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
    }
  return (
    <Grid container position={'relative'}>
      <Grid item xs={12} >
        <img src={ BackGroundImage } alt='Image' style={gridItemStyle}/>
        <Typography style={{position: 'absolute', top: '10%', left: '40%'}} className='text_b'> Liverpool 360°</Typography>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <BoxInputs />
    </Grid>
  );
};

export default ScreenComponent 