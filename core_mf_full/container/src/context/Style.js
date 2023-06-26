import React from 'react'

import { ThemeProvider } from '@mui/material'
import { pucclTheme } from '../theme/theme'

const StyleProvider = ({ children }) => <ThemeProvider theme={pucclTheme}>{children}</ThemeProvider>

export default StyleProvider
