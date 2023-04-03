import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@mui/material'
import { pucclTheme } from '../theme/theme'

const StyleProvider = ({ children }) => {
  return <ThemeProvider theme={pucclTheme}>{children}</ThemeProvider>
}

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StyleProvider
