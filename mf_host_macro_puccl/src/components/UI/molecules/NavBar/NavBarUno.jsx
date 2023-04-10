import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BarChartIcon from '@mui/icons-material/BarChart'
import MenuAtenciones from '../SubNavBars/MenuAtenciones'
import MenuConfiguraciones from '../SubNavBars/MenuConfiguraciones'
import MenuReportes from '../SubNavBars/MenuReportes'

// import NotificationsIcon from '@mui/icons-material/Notifications';

// import atenciones from '../../../../svg/atenciones.svg'
// import ajustes from '../../../../svg/ajustes.svg'
// import reportes from '../../../../svg/reportes.svg'
// import ayuda from '../../../../svg/ayuda.svg'
import logout from '../../../../svg/logout.svg'

// import { useModulesContext } from "../../../../context/SubNavBar";

const drawerWidth = 98

export default function PermanentDrawerLeft() {
  const [activo, setActivo] = React.useState('Atenciones')
  // const {handleModule} = useModulesContext();

  const HandleClick = name => {
    setActivo(name)
    // handleModule(name)
  }

  const renderModule = () => {
    switch (activo) {
      case 'Atenciones':
        return <MenuAtenciones />
      case 'Ajustes':
        return <MenuConfiguraciones />
      case 'Reportes':
        return <MenuReportes />
      default:
        return <MenuAtenciones />
    }
  }

  React.useEffect(() => {
    console.log({ activo })
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
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => HandleClick('Atenciones')}
                style={{
                  margin: 'center',
                  borderLeft:
                    activo == 'Atenciones'
                      ? '4px solid #833177'
                      : '4px solid white',
                }}
              >
                <ListItemIcon style={{ justifyContent: 'center' }}>
                  <AccountBoxIcon
                    fontSize="large"
                    style={{ color: activo == 'Atenciones' ? '#833177' : '' }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => HandleClick('Ajustes')}
                style={{
                  justifyContent: 'center',
                  borderLeft:
                    activo == 'Ajustes'
                      ? '4px solid #833177'
                      : '4px solid white',
                }}
              >
                <ListItemIcon style={{ justifyContent: 'center' }}>
                  <SettingsApplicationsIcon
                    fontSize="large"
                    style={{ color: activo == 'Ajustes' ? '#833177' : '' }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => HandleClick('Reportes')}
                style={{
                  justifyContent: 'center',
                  borderLeft:
                    activo == 'Reportes'
                      ? '4px solid #833177'
                      : '4px solid white',
                }}
              >
                <ListItemIcon style={{ justifyContent: 'center' }}>
                  <BarChartIcon
                    fontSize="large"
                    style={{
                      color: activo == 'Reportes' ? 'white' : '',
                      backgroundColor: activo == 'Reportes' ? '#833177' : '',
                      borderRadius: '20%',
                    }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding>
                    <ListItemButton onClick={() => HandleClick('Notifications')}>
                      <ListItemIcon>
                      <NotificationsIcon style={{ backgroundColor: '#F5F5F5', fontSize: 35, borderRadius: '20%' }}/>        
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => HandleClick('Ayuda')}>
                      <ListItemIcon>
                      <img src={ayuda} alt="Ayuda"></img>        
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem> */}
          </List>
        </Box>
        <ListItem
          disablePadding
          style={{ marginTop: 'auto', marginBottom: '50px' }}
        >
          <ListItemButton
            onClick={() => HandleClick('Logout')}
            style={{
              justifyContent: 'center',
              borderLeft:
                activo == 'Logout' ? '4px solid white' : '4px solid white',
            }}
          >
            <ListItemIcon style={{ justifyContent: 'center' }}>
              <img src={logout} alt="Logout"></img>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Drawer>
      <div
        style={{
          marginTop: '50px',
          width: '244px',
          borderRight: '1px solid #D8D8D8',
          height: '90vh',
          overflow: 'auto',
        }}
      >
        {renderModule()}
      </div>
    </>
  )
}

{
  /* <List>
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
</List> */
}
