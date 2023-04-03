/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react'
import { createBrowserHistory } from 'history'

import { Box, Paper } from '@mui/material'

import { Route, Router, Switch } from 'react-router-dom'
// import Spinner from 'components/SpinnerLoaderComp'
import routes from 'routes'
import NotFound from 'pages/NotFound'
import StyleProvider from './context/Style'
import Footer from './components/UI/organims/Footer/Footer'

// Styles
import './index.css'
import Navbar from './components/UI/organims/NavBar/NavBar'
import Header from './components/UI/organims/Header/Header'
import GridContainer from './components/UI/atoms/GridContainer/GridContainer'
import GridItem from './components/UI/atoms/GridItem/GridItem'
import asesoTelefonico from './svg/Asesor_Telefónico.svg'
// eslint-disable-next-line import/no-unresolved
import lapiz from './svg/lapiz.svg'

export const history = createBrowserHistory()
const rutasProducto = routes

const App = () => {
  return (
    <StyleProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Navbar />
        <Footer />
        <Box component="main" sx={{ marginTop: '50px', flexGrow: 1 }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Paper
                sx={{
                  p: 1,
                  margin: 'auto',
                  flexGrow: 1,
                  border: 0,
                  backgroundColor: theme => theme.palette.secondary.main,
                }}
              >
                <GridContainer style={{ marginTop: '10px' }}>
                  <GridItem md={-1}>
                    <img
                      style={{ paddingRight: '10px' }}
                      src={asesoTelefonico}
                      alt="Asesor_Telefonico"
                    />
                  </GridItem>
                  <GridItem md={7}>
                    <GridContainer
                      sx={{ typography: theme => theme.typography.main_text }}
                    >
                      <GridItem
                        md={2.5}
                        sx={{ typography: theme => theme.typography.name }}
                        color="#833177"
                      >
                        Oscar Pérez González
                      </GridItem>
                      <GridItem md={9} style={{ marginTop: '2px' }}>
                        Acesor CCL
                      </GridItem>
                      <GridItem md={2.5} style={{ marginTop: '5px' }}>
                        <strong>ID Avaya:</strong> 123456{' '}
                        <img src={lapiz} alt="lapiz" />
                      </GridItem>
                      <GridItem md={2.5} style={{ marginTop: '5px' }}>
                        <strong>Skill Activo:</strong> Seguimientos
                      </GridItem>
                      <GridItem md={2} style={{ marginTop: '5px' }}>
                        <strong>Auxiliar:</strong>{' '}
                        <span className="text-auxiliar">Activo</span>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  {/* <GridItem md={4}>BARRA DE BUSQUEDA</GridItem> */}
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Paper
                sx={{
                  p: 1,
                  margin: 'auto',
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
            {/* <Spinner /> */}
            <Router history={history}>
              <Suspense fallback={null}>
                <Switch>
                  {rutasProducto.map(route => {
                    const { mf, path } = route
                    if (route.mf) {
                      return (
                        <Route
                          key={mf.scope}
                          path={path}
                          render={props => (
                            <route.component
                              key={mf.scope}
                              scope={mf.scope}
                              module={mf.module}
                              remoteUrl={mf.remoteUrl}
                              {...props}
                            />
                          )}
                        />
                      )
                    }

                    return (
                      <Route
                        exact
                        key={path}
                        path={path}
                        // eslint-disable-next-line no-confusing-arrow
                        render={props => <route.component {...props} />}
                      />
                    )
                  })}

                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Suspense>
            </Router>
          </GridContainer>
        </Box>
      </Box>
    </StyleProvider>
  )
}

export default App
