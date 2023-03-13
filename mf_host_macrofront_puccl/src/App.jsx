import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "./components/UI/atoms/Button/CustomButton";

import StyleProvider from "./context/Style";
import Button from "@mui/material/Button";
import Footer from "./components/UI/organims/Footer/Footer";
import { Box, CssBaseline, Paper, Toolbar, Typography } from "@mui/material";

// Styles
import "./index.css";
import DrawerAppBar from "./components/UI/organims/Header/Header";
import Navbar from "./components/UI/organims/NavBar/NavBar";
import Header from "./components/UI/organims/Header/Header";
import PersistentDrawerLeft from "./components/UI/organims/NavBar/NavBar";
import ClippedDrawer from "./components/UI/organims/Header/Header";
import GridContainer from "./components/UI/atoms/GridContainer/GridContainer";
import GridItem from "./components/UI/atoms/GridItem/GridItem";

import PersonalData from "mf_remote_clients_puccl/PersonalData";

const App = () => {
  return (
    <StyleProvider>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Navbar />
        <Footer />
        <Box component="main" sx={{ marginTop: "55px", flexGrow: 1 }}>
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
                <GridContainer>
                  <GridItem md={1}>ICON</GridItem>
                  <GridItem md={7}>
                    <GridContainer>
                      <GridItem md={3}>Oscar Pérez González</GridItem>
                      <GridItem md={9}>Acesor CCL</GridItem>
                      <GridItem md={4}>ID AVAYA 123456</GridItem>
                      <GridItem md={4}>Skill Activo: Seguimientos</GridItem>
                      <GridItem md={4}>Auxiliar: Activo</GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem md={4}>BARRA DE BUSQUEDA</GridItem>
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  flexGrow: 1,
                  border: 0,
                }}
              >
                <GridContainer>
                  <GridItem md={4}>Beadcrum</GridItem>
                  <GridItem md={4}>Seguimientos|Marca</GridItem>
                  <GridItem md={4}>Botón Folio de atención</GridItem>
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <h1>Aqui van los Mfs</h1>
          </GridContainer>
        </Box>
      </Box>
    </StyleProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
