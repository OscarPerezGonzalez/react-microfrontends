import React from 'react'
import { TabList, TabContext, TabPanel } from '@mui/lab'
import { Box, Checkbox, Tab } from '@mui/material'
import { TextBlackMid, TextBlackMidS12 } from '../../Styles/globals'

export const PermissionsSelect = ({ value, handleChange, dataPermissions, orderKeysOrganize, updatePermissions }) => {
	return (
		<div style={{ marginTop: '34px' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange}>
						{Object.values(dataPermissions).map((data, id) => {
							return <Tab label={data[0] && data[0].permiso.nombre} value={(id + 1).toString()} key={id} />
						})}
					</TabList>
				</Box>
				{Object.values(dataPermissions).map((data, id) => {
					const dataModule = orderKeysOrganize(data, 'modulo', 'nombre')
					return (
						<TabPanel value={(id + 1).toString()} key={id}>
							<div style={{ display: 'flex', flexFlow: 'wrap' }}>
								{Object.values(dataModule).map((modules, id) => {
									return (
										<div key={id} style={{ width: '22%', padding: '0 10px' }}>
											<TextBlackMid>{modules[0].modulo.nombre}</TextBlackMid>
											{modules.map((module, id) => {
												return (
													<div
														key={id}
														style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
													>
														<TextBlackMidS12>{module.submodulo.nombre}</TextBlackMidS12>
														<Checkbox
															checked={module.esActivo}
															color='default'
															onChange={e => updatePermissions(e, module.idConfig)}
														/>
													</div>
												)
											})}
										</div>
									)
								})}
							</div>
						</TabPanel>
					)
				})}
			</TabContext>
		</div>
	)
}
