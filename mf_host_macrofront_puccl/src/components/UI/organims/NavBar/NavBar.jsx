import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuAtenciones from "../../molecules/SubNavBars/MenuAtenciones";
import MenuConfiguraciones from "../../molecules/SubNavBars/MenuConfiguraciones";
import MenuReportes from "../../molecules/SubNavBars/MenuReportes";
import Logout from '../../../../svg/logout.svg'
import Atenciones from '../../../../svg/Atenciones.svg'
import "./_style.css"

const drawerWidth = 61;

export default function PermanentDrawerLeft() {

  const [activo, setActivo] = React.useState('Atenciones')

  const HandleClick = (name) => {
    setActivo(name);
  }

  const renderModule = () => {
    switch (activo) {
      case "Atenciones":
        return <MenuAtenciones />;
      case "Ajustes":
        return <MenuConfiguraciones />;
      case "Reportes":
        return <MenuReportes />;
      default:
        return <MenuAtenciones />;
    }
  };


  React.useEffect(() => {
    console.log({activo})

  })
  

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
            <Toolbar/>
            <Box sx={{ overflow: "auto"}}>
              <List >
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => HandleClick('Atenciones')} style={{justifyContent:"center", 
                  borderLeft: activo == 'Atenciones' ? '4px solid #833177': '4px solid white',}}>
                      <ListItemIcon style={{justifyContent:"center"}}>       
                        {activo == 'Atenciones' ? <Atenciones fontSize="large" className="my-svg-wrapper1"/> : <Atenciones className="my-svg-wrapper2 my-svg-wrapper1-1"/>} {/*<Atenciones fontSize="large" style={{fill: activo == 'Atenciones' ? '#833177': 'black'}}/>         */}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => HandleClick('Ajustes')} style={{justifyContent:"center",
                    borderLeft: activo == 'Ajustes' ? '4px solid #833177': '4px solid white',}}>
                      <ListItemIcon style={{justifyContent:"center"}}>
                      <SettingsIcon fontSize="large" style={{color: activo == 'Ajustes' ? 'white': '', 
                                                            backgroundColor: activo == 'Ajustes' ? '#833177': '#F5F5F5',
                                                            borderRadius:'20%'}}/>                
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => HandleClick('Reportes')} style={{justifyContent:"center",
                     borderLeft: activo == 'Reportes' ? '4px solid #833177': '4px solid white',}}>
                      <ListItemIcon style={{justifyContent:"center"}}>
                      <BarChartIcon fontSize="large" style={{color: activo == 'Reportes' ? 'white': '', 
                                                            backgroundColor: activo == 'Reportes' ? '#833177': 'F5F5F5',
                                                            borderRadius:'20%'}}/>        
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
              </List>
            </Box>
            <ListItem disablePadding style= {{marginTop: 'auto', marginBottom: '50px'}}>
              <ListItemButton onClick={() => HandleClick('Logout')} style={{justifyContent:"center",
              borderLeft: activo == 'Logout' ? '4px solid white': '4px solid white',}}>
                <ListItemIcon style={{justifyContent:"center"}}>
                <Logout />        
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
      </Drawer>
      <div style={{marginTop: '50px', width: '244px',borderRight: '1px solid #D8D8D8', height: '87vh', overflow:'auto'}}>
            {renderModule()}
          </div>
    </>
  );
}

{/* <List>
  {["All mail", "Trash", "Spam"].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List> */}