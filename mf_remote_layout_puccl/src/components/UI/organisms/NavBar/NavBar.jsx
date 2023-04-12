import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuAtenciones from "../../molecules/SubNavBars/MenuAtenciones";
import Logout from '../../../../resources/svg/Logout.svg'
import Atenciones from '../../../../resources/svg/Atenciones.svg'
import "./_style.css"

const drawerWidth = 61;

export default function PermanentDrawerLeft() {

  const [activo, setActivo] = React.useState('Atenciones')

  const HandleClick = (name) => {
    setActivo(name);
  }

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
            <Box sx={{ overflow: "hidden"}}>
              <List >
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => HandleClick('Atenciones')} style={{justifyContent:"center", 
                  borderLeft: activo == 'Atenciones' ? '4px solid #833177': '4px solid white',}}>
                      <ListItemIcon style={{justifyContent:"center"}}>       
                        {activo == 'Atenciones' ? <Atenciones fontSize="large" className="my-svg-wrapper1"/> : <Atenciones className="my-svg-wrapper2 my-svg-wrapper1-1"/>} {/*<Atenciones fontSize="large" style={{fill: activo == 'Atenciones' ? '#833177': 'black'}}/>         */}
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
      <div style={{marginTop: '60px', width: '244px', height: '40.1vw', overflowY:'scroll', position:'fixed', left: 61}}>
            {<MenuAtenciones/>}
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