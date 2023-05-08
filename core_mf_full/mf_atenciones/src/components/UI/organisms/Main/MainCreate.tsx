import React from 'react'
import { Box, Paper } from '@mui/material'
import GridContainer from '../../atoms/GridContainer/GridContainer'
import GridItem from '../../atoms/GridItem/GridItem'
import NavBar from '../NavBar/NavBar'
import Asesor_telefonico from '../../../../resources/svg/Asesor_Telefónico.svg'
import Lapiz from '../../../../resources/svg/Lapiz.svg'
import './_style.css'
import ScreenComponentCreate from '../../molecules/Screens/ScreenCreate/ScreenCreate'
import Cookies from 'universal-cookie'

const MainComponentCreate = () => {
  const cookies = new Cookies()

  const data_user = cookies.get('user_data')


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
                  <GridItem md={-1}><Asesor_telefonico style={{marginRight: '10px', paddingBottom: '350px !important'}}/></GridItem>
                  <GridItem md={7}>
                    <GridContainer sx={{typography : (theme) => theme.typography.main_text}}>
                      <GridItem md={2.5} sx={{typography : (theme) => theme.typography.name}} color='#833177'>{data_user.nombre + " " + data_user.apellidoPaterno + " " +data_user.apellidoMaterno}</GridItem>
                      <GridItem md={9} style={{marginTop: '2px'}}><strong>Asesor </strong>{data_user.idPerfilOperador}</GridItem>
                      <GridItem md={2.5} style={{marginTop: '2px'}}><strong>ID Avaya:</strong>{cookies.get('idAvaya')} <Lapiz/></GridItem>
                      <GridItem md={3} style={{marginTop: '2px'}}><strong>Skill Activo:</strong> Seguimientos</GridItem>
                      <GridItem md={2.5} style={{marginTop: '2px'}}><strong>Extensión:</strong> <span className="text-auxiliar">Activo</span></GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <ScreenComponentCreate/>
          </GridContainer>
        </Box>
      </Box>
        </>
    )
}

export default MainComponentCreate