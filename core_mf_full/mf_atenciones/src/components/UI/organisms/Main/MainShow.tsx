import React from 'react'
import ScreenComponentShow from '../../molecules/Screens/ScreenShow/ScreenShow'
import { Box, Paper } from '@mui/material'
import GridContainer from '../../atoms/GridContainer/GridContainer'
import GridItem from '../../atoms/GridItem/GridItem'
import NavBar from '../NavBar/NavBar'
import Asesor_telefonico from '../../../../resources/svg/Asesor_Telefónico.svg'
import Lapiz from '../../../../resources/svg/Lapiz.svg'
import './_style.css'

const MainComponentShow = () => {

  const [elementPosition, setElementPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setElementPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
    return (
        <>
        <Box sx={{ display: "flex" }} style={{ top: elementPosition }}>
        <NavBar/>
        <Box component="main" sx={{ flexGrow: 1, marginLeft:'244px'  }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  flexGrow: 1,
                  border: 0,
                  backgroundColor: (theme) => theme.palette.secondary.main,
                }}
              >
                <GridContainer style={{marginTop: '10px'}}>
                  <GridItem md={-1}><Asesor_telefonico style={{marginRight: '10px'}}/></GridItem>
                  <GridItem md={7}>
                    <GridContainer sx={{typography : (theme) => theme.typography.main_text}}>
                      <GridItem md={2.5} sx={{typography : (theme) => theme.typography.name}} color='#833177'>Oscar Pérez González</GridItem>
                      <GridItem md={9} style={{marginTop: '2px'}}>Acesor CCL</GridItem>
                      <GridItem md={2.5} style={{marginTop: '2px'}}><strong>ID Avaya:</strong> 123456 <Lapiz/></GridItem>
                      <GridItem md={3} style={{marginTop: '2px'}}><strong>Skill Activo:</strong> Seguimientos</GridItem>
                      <GridItem md={2.5} style={{marginTop: '2px'}}><strong>Extensión:</strong> <span className="text-auxiliar">Activo</span></GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <ScreenComponentShow />
          </GridContainer>
        </Box>
      </Box>
        </>
    )
}

export default MainComponentShow