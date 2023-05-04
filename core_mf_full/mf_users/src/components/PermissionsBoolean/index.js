import React from 'react'
import { TextGreen, TextRed } from '../../Styles/globals'

export const PermissionsBoolean = ({ esActivo }) =>
	esActivo ? <TextGreen>Activo</TextGreen> : <TextRed>Sin permisos</TextRed>
