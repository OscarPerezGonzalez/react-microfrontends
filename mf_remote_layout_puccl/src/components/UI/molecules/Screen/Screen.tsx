import Grid  from '@mui/material/Grid';
import React from 'react'
import BackGroundImage from '../../../../resources/img/Background_Image.png'

const ScreenComponent = () => {

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
        {/* Content for the bottom half of the screen */}
      </Grid>
    </Grid>
  );
};

export default ScreenComponent 