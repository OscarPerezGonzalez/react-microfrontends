import React from 'react'
import { Table, TableBody, TableRow } from '@mui/material'

import { CardDataBasic, TextBlack16, TextBlackMidS12 } from '../../Styles/globals'
import { CellLeftLg, CellRightLg } from './Styles'

export const ResumeDataUser = ({ resumeData }) => {
	const {
		nombre,
		apellidoPaterno,
		apellidoMaterno,
		numeroEmpleado,
		correoElectronico,
		perfil,
		puesto,
		ubicacion,
		unidadNegocio,
		campaña,
		canalAsignado,
	} = resumeData
	return (
		<CardDataBasic>
			<Table>
				<TableBody>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12> Nombre(s):</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{nombre}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Apellido Paterno:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{apellidoPaterno}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Apellido Materno:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{apellidoMaterno}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Número de empleado:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{numeroEmpleado}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Correo electrónico:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{correoElectronico}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Perfil de usuario:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{perfil}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Puesto:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{puesto}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Ubicación:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{ubicacion}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Unidad de negocio:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{unidadNegocio}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Campaña:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{campaña}</TextBlack16>
						</CellRightLg>
					</TableRow>
					<TableRow>
						<CellLeftLg>
							<TextBlackMidS12>Canal de contacto:</TextBlackMidS12>
						</CellLeftLg>
						<CellRightLg>
							<TextBlack16>{canalAsignado}</TextBlack16>
						</CellRightLg>
					</TableRow>
				</TableBody>
			</Table>
		</CardDataBasic>
	)
}
