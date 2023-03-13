import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
          El puerto de Liverpool 360°
          </Typography>
        </Toolbar>
      </AppBar>      
    </>
  );
}

export default Header