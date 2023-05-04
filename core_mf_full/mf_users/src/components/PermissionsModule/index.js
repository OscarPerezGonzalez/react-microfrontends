import React, { useEffect, useState } from 'react'
import { PermissionsBoolean } from '../PermissionsBoolean'
import { orderKeysOrganize } from '../../utils/tools'
import { TextBlackMidS12, TextGrayMid } from '../../Styles/globals'

export const PermissionsModule = ({ dataPermissions }) => {
	const [dataModule, setDataModule] = useState([])
	useEffect(() => {
		const data = orderKeysOrganize(dataPermissions, 'modulo', 'nombre')
		setDataModule(data)
	}, [dataPermissions])

	return (
		<div style={{ display: 'flex', flexFlow: 'wrap' }}>
			{Object.values(dataModule).map((modules, id) => {
				return (
					<div key={id} style={{ width: '45%', padding: '0 10px' }}>
						<TextBlackMidS12 style={{ margin: '12px 0' }}>{modules[0].modulo.nombre}</TextBlackMidS12>
						{modules.map((module, id) => {
							return (
								<div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
									<TextGrayMid>{module.submodulo.nombre}</TextGrayMid>
									<span>
										<PermissionsBoolean esActivo={module.esActivo} />
									</span>
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}
